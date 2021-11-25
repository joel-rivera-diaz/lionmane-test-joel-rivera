import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { loadVariants, VariantData } from '../thunks';
import { Variant } from '../components/Variant';
import { Header } from '../components/Header';
import { RootState, AppDispatch } from '../store';
import {} from '../components/Variant';
import { 
	getVariants,
	getVariantImages,
	selectFavoriteVariant
} from '../actions';

interface Props {
	variants: VariantData[],
	favoriteVariant: string,
	isLoading: boolean,
	onSelectFavoritePressed: (name: string) => AppDispatch,
	onDisplayAlertPressed: (text: string) => AppDispatch,
	startLoadingVariants: (breed: string) => AppDispatch
}

const BreedPage: FC<Props> = (props) => {
	const { 
		isLoading,
		variants, 
		onSelectFavoritePressed,
		startLoadingVariants,
		favoriteVariant
	} = props;

	const { breed } = useParams();

	useEffect(() => {
		startLoadingVariants(breed);
	}, [breed]);

	return (
		<div className='BreedPage'>
			<Header />
			<div className='content'>
				{variants.map( (v) => <Variant name={v.name} imageURL={v.imageURLs[0]} />)}
			</div>
			
			{/* <h1>Showing Variant from Breed: {breed}</h1>
			<h3>is loading? : {isLoading}</h3>
			<h3>Favorite Variant: {favoriteVariant}</h3> */}
			{/* <p>Favorite: -- {favoriteVariant}</p> */}
			{/* <p>am i receicing props? onSelectFavoritePressed: {onSelectFavoritePressed.toString()} </p> */}
			{/* <button onClick={()=> onSelectFavoritePressed('Hymalaya como Piero') }>Hyma</button>
			<button onClick={()=> onSelectFavoritePressed('Viralata mi locooo') }>Viralata</button>
			<button onClick={()=> onSelectFavoritePressed('Pug como Benito') }>Pug</button> */}

			

		</div>
		
	);
};

const mapStateToProps = state => ({
	variants: state.variants,
	favoriteVariant: state.favoriteVariant,
	isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
	onSelectFavoritePressed: name => dispatch(selectFavoriteVariant(name)),
	startLoadingVariants: breed => dispatch(loadVariants(breed))
});

const ConnectedBreedPage = connect(mapStateToProps, mapDispatchToProps)(BreedPage) 


export  { ConnectedBreedPage as BreedPage };
