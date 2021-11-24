import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { variants, favoriteVariant } from '../reducers';
import { Variant } from '../components/Variant';
import { RootState, AppDispatch } from '../store';
import { 
	getVariants,
	getVariantImages,
	selectFavoriteVariant
} from '../actions';

interface Props {
	variants: { name: string }[],
	favoriteVariant: string,
	onSelectFavoritePressed: (name: string) => AppDispatch
}

const Breed: FC<Props> = ({ 
	variants, 
	onSelectFavoritePressed,
	favoriteVariant
}) => {
	let { breed } = useParams();

	useEffect(() => {
		// action get variants?
		// get variant
	}, []);

	return (
		<>
			<h1>Showing Variant from Breed: {breed}</h1>
			<p>Favorite: -- {favoriteVariant}</p>
			<p>am i receicing props? onSelectFavoritePressed: {onSelectFavoritePressed.toString()} </p>
			<button onClick={()=> onSelectFavoritePressed('Hymalaya como Piero') }>Hyma</button>
			<button onClick={()=> onSelectFavoritePressed('Viralata mi locooo') }>Viralata</button>
			<button onClick={()=> onSelectFavoritePressed('Pug como Benito') }>Pug</button>

		</>
		
	);
};

const mapStateToProps = state => ({
	variants: state.variants,
	favoriteVariant: state.favoriteVariant
});

const mapDispatchToProps = dispatch => ({
	onSelectFavoritePressed: name => dispatch(selectFavoriteVariant(name)),
});

const ConnectedBreed = connect(mapStateToProps, mapDispatchToProps)(Breed) 


export  { ConnectedBreed as Breed };