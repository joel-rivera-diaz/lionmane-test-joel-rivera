import { FC } from "react";
import { AppDispatch } from "../store";
import { connect } from "react-redux";
import { selectFavoriteVariant, closePopup } from "../actions";


interface Props {
	popupVariant: string,
	isVariantPopupOpen: boolean,
	onClosePopup: () => AppDispatch,
	onSelectFavoritePressed: (name:string) => AppDispatch 
}

const Popup: FC<Props> = ({ popupVariant, onClosePopup, isVariantPopupOpen, onSelectFavoritePressed }) => {
	let display;
	
	if( isVariantPopupOpen ){
		display = {display: 'block'}
	} else {
		display = {display: 'none'}
	}

	return (
		<div className='Popup' style={display}>
			<div className='box'>
				<div className='title'>
					<h3>Variant Gallery: {popupVariant} </h3>
					<button onClick={() => onClosePopup()}>X</button>
				</div>
				<div className='gallery'>

				</div>
				<div className='button'>
					<button onClick={() => onSelectFavoritePressed(popupVariant)}>
						Select as Favorite
					</button>
				</div>
			</div>
		</div>
		
	);
}

const mapStateToProps = state => ({
	isVariantPopupOpen: state.isVariantPopupOpen,
	popupVariant: state.popupVariantSelected
});

const mapDispatchToProps = dispatch => ({
	onSelectFavoritePressed: name => dispatch(selectFavoriteVariant(name)),
	onClosePopup:  () => dispatch(closePopup())
});

const ConnectedPopup = connect(mapStateToProps, mapDispatchToProps)(Popup);

export  { ConnectedPopup as Popup }; 