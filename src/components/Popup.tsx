import { FC, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from "../store";
import { connect } from "react-redux";
import { selectFavoriteVariant, closePopup } from "../actions";
import { VariantData } from '../thunks';


interface Props {
	variants: VariantData[],
	popupVariant: string,
	isVariantPopupOpen: boolean,
	onClosePopup: () => AppDispatch,
	onSelectFavoritePressed: (name:string) => AppDispatch 
}

const Popup: FC<Props> = ({ variants, popupVariant, onClosePopup, isVariantPopupOpen, onSelectFavoritePressed }) => {
	const navigate = useNavigate();
	const imgURLs = useMemo(() => { 
		let urls: string[] = [];
		for (const v of variants) {
			if(v.name === popupVariant){
				urls = v.imageURLs;
			}
		}
		return urls.slice(0, 3);
	}, [popupVariant]);
	

	let display;
	if( isVariantPopupOpen ){
		display = {display: 'block'}
	} else {
		display = {display: 'none'}
	}

	const onSelectingFavoriteClick = () => {
		onSelectFavoritePressed(popupVariant);
		navigate(`/`);
	};

	return (
		<div className='Popup' style={display}>
			<div className='box'>
				<div className='title'>
					<h3>Variant Gallery: {popupVariant} </h3>
					<button onClick={() => onClosePopup()}>X</button>
				</div>
				<div className='gallery'>
					{imgURLs.map( url => (
						<img src={url}  />
					))}
				</div>
				<div className='button'>
					<button onClick={() => onSelectingFavoriteClick()}>
						Select as Favorite
					</button>
				</div>
			</div>
		</div>
		
	);
}

const mapStateToProps = state => ({
	variants: state.variants,
	isVariantPopupOpen: state.isVariantPopupOpen,
	popupVariant: state.popupVariantSelected
});

const mapDispatchToProps = dispatch => ({
	onSelectFavoritePressed: name => dispatch(selectFavoriteVariant(name)),
	onClosePopup:  () => dispatch(closePopup())
});

const ConnectedPopup = connect(mapStateToProps, mapDispatchToProps)(Popup);

export  { ConnectedPopup as Popup }; 