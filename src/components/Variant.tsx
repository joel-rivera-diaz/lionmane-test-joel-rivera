import { FC } from "react";
import { AppDispatch } from "../store";
import { connect } from "react-redux";
import { selectFavoriteVariant, openPopup } from "../actions";


interface Props {
	name: string,
	imageURL: string,
	onSelectFavoritePressed: (name:string) => AppDispatch,
	onOpenPopup: (name:string) => AppDispatch
}

const Variant: FC<Props> = ({ name, imageURL, onSelectFavoritePressed, onOpenPopup }) => {
	return (
		<div className='Variant' onClick={() => onOpenPopup(name)}>
			<div className='thumb'>
				<img src={imageURL}></img>
			</div>
			<div className='info'>
				<h6>{name}</h6>
			</div>
		</div>
		
	);
}

const mapStateToProps = state => ({
	favoriteVariant: state.favoriteVariant,
});

const mapDispatchToProps = dispatch => ({
	onSelectFavoritePressed: name => dispatch(selectFavoriteVariant(name)),
	onOpenPopup: name => dispatch(openPopup(name))
});

const ConnectedVariant = connect(mapStateToProps, mapDispatchToProps)(Variant);

export  { ConnectedVariant as Variant }; 