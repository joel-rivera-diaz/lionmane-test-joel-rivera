import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { loadVariants } from '../thunks';
import { Variant } from '../components/Variant';
import { RootState, AppDispatch } from '../store';
import {} from '../components/Variant';
import { 
	getVariants,
	getVariantImages,
	selectFavoriteVariant
} from '../actions';

interface Props {
	variants: string[],
	favoriteVariant: string,
	isLoading: boolean,
	onSelectFavoritePressed: (name: string) => AppDispatch,
	onDisplayAlertPressed: (text: string) => AppDispatch,
	startLoadingVariants: (breed: string) => AppDispatch
}

const Breed: FC<Props> = ({
	isLoading,
	variants, 
	onSelectFavoritePressed,
	startLoadingVariants,
	favoriteVariant
}) => {
	let { breed } = useParams();

	useEffect(() => {
		startLoadingVariants(breed);
	}, [breed]);

	return (
		<>
			{variants.map( vname => <Variant name={vname} imageURL={'https://pbs.twimg.com/profile_images/652078131034124288/Mb9ohLiV_400x400.jpg'} />)}
			<h1>Showing Variant from Breed: {breed}</h1>
			<h3>is loading? : {isLoading}</h3>
			<h3>Favorite Variant: {favoriteVariant}</h3>
			{/* <p>Favorite: -- {favoriteVariant}</p> */}
			{/* <p>am i receicing props? onSelectFavoritePressed: {onSelectFavoritePressed.toString()} </p> */}
			{/* <button onClick={()=> onSelectFavoritePressed('Hymalaya como Piero') }>Hyma</button>
			<button onClick={()=> onSelectFavoritePressed('Viralata mi locooo') }>Viralata</button>
			<button onClick={()=> onSelectFavoritePressed('Pug como Benito') }>Pug</button> */}

			

		</>
		
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

const ConnectedBreed = connect(mapStateToProps, mapDispatchToProps)(Breed) 


export  { ConnectedBreed as Breed };
