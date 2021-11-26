import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { Header } from '../components/Header';
import { loadBreeds } from '../thunks';

interface Props {
	breeds: string[],
	startLoadingBreeds: () => AppDispatch
}

const HomePage: FC<Props>  = ({ startLoadingBreeds, breeds }) => {

	useEffect(() => {
		startLoadingBreeds();
	}, []);

	return (
		<div className='HomePage'>
			<Header />
			<div className='favorite'>

			</div>
			<div className='breed-list'>
				
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