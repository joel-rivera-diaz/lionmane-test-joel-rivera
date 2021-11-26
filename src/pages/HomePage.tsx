import { FC, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { Header } from '../components/Header';
import { loadBreeds, VariantData } from '../thunks';

interface Props {
	breeds: string[],
	favoriteVariant: string,
	variants: VariantData[],
	startLoadingBreeds: () => AppDispatch
}

const HomePage: FC<Props>  = ({ startLoadingBreeds, breeds, favoriteVariant, variants }) => {
	const navigate = useNavigate();

	useEffect(() => {
		startLoadingBreeds();
	}, []);

	const imgURLs = useMemo(() => { 
		let urls: string[] = [];
		for (const v of variants) {
			if(v.name === favoriteVariant){
				urls = v.imageURLs;
			}
		}
		return urls.slice(0, 3);
	}, [favoriteVariant]);

	return (
		<div className='HomePage'>
			<Header />
			<div className='favorite'>
				{favoriteVariant ? <h2>Favorite: {favoriteVariant}</h2> : 'Please Choose a Favorite'}
				<img src={imgURLs[0]}></img>
			</div>
			<div className='breed-list'>
				<hr />
				<h1>Breeds: </h1>
				{breeds.map( breed =>(
					<div className='breed' onClick={() => navigate(`/breed/${breed}`)}>
						{breed}
					</div>
				))}
			</div>
		</div>
		
	);
};

const mapStateToProps = state => ({
	breeds: state.breeds,
	isLoading: state.isLoading,
	favoriteVariant: state.favoriteVariant,
	variants: state.variants
});

const mapDispatchToProps = dispatch => ({
	startLoadingBreeds: () => dispatch(loadBreeds())
});

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export  { ConnectedHomePage as HomePage };