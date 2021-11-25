import { FC } from "react";
import { AppDispatch } from "../store";
import { selectFavoriteVariant } from "../actions";

interface Props {
	name: string,
	imageURL: string,
	onSelectFavoritePressed?: (name:string) => AppDispatch 
}

export const Variant: FC<Props> = ({ name, imageURL, onSelectFavoritePressed }) => {
	return (
		<>
			<img src={imageURL}></img>
			<h6>Name: {name}</h6>
			<button onClick={()=> onSelectFavoritePressed(name)}>Select as Favorite</button>
		</>
		
	);
}

const mapStateToProps = state => ({
	favoriteVariant: state.favoriteVariant,
});

const mapDispatchToProps = dispatch => ({
	onSelectFavoritePressed: name => dispatch(selectFavoriteVariant(name)),
});