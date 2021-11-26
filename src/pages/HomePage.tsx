import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { Header } from '../components/Header';
import { loadBreeds } from '../thunks';

interface Props {
	breeds: string[],
	startLoadingBreeds: () => AppDispatch
}

const HomePage: FC<Props>  = ({ startLoadingBreeds, breeds }) => {
	const navigate = useNavigate();

	useEffect(() => {
		startLoadingBreeds();
	}, []);

	return (
		<div className='HomePage'>
			<Header />
			<div className='favorite'>
				
			</div>
			<div className='breed-list'>
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
	isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
	startLoadingBreeds: () => dispatch(loadBreeds())
});

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export  { ConnectedHomePage as HomePage };