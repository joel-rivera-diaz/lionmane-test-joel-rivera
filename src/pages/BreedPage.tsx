import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Variant } from '../components/Variant';
import { Header } from '../components/Header';
import { Popup } from '../components/Popup';
import { RootState, AppDispatch } from '../store';
import { loadVariants, VariantData } from '../thunks';
import {  } from '../actions';

interface Props {
	variants: VariantData[],
	isLoading: boolean,
	startLoadingVariants: (breed: string) => AppDispatch
}

const BreedPage: FC<Props> = (props) => {
	const { 
		isLoading,
		variants,
		startLoadingVariants
	} = props;

	const { breed } = useParams();

	useEffect(() => {
		startLoadingVariants(breed);
	}, [breed]);

	return (
		<>
			<Popup />
			<div className='BreedPage'>
				<Header />
				<div className='content'>
					{
					isLoading ? 
						<h1 className='alert'>LOADING VARIANTS...</h1>
					:
						variants.map( (v) => <Variant name={v.name} imageURL={v.imageURLs[0]} />)
					}
				</div>
			</div>
		</>
	);
};

const mapStateToProps = state => ({
	variants: state.variants,
	isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
	startLoadingVariants: breed => dispatch(loadVariants(breed))
});

const ConnectedBreedPage = connect(mapStateToProps, mapDispatchToProps)(BreedPage) 

export  { ConnectedBreedPage as BreedPage };
