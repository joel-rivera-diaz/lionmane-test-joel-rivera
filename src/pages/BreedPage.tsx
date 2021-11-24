import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { variants } from '../reducers';
import { 
	getVariants,
	getVariantImages,
	selectFavoriteVariant
} from '../actions';

interface Props {
	variants: Array<any>,
	onSelectFavoritePressed: (name: string) => any
}

const Breed: FC<Props> = ({ variants, onSelectFavoritePressed }) => {
	let { breed } = useParams();

	useEffect(() => {
		// action get variants?
		// get variant
	}, []);

	return (
		<h1>Showing Variant from Breed: {breed}</h1>
	);
};

const mapStateToProps = state => ({
	variants: state.variants,
});

const mapDispatchToProps = dispatch => ({
	onSelectFavoritePressed: name => dispatch(selectFavoriteVariant(name)),
});

const ConnectedBreed = connect(mapStateToProps, mapDispatchToProps)(Breed) 


export  { ConnectedBreed as Breed };
