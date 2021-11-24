import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { SELECT_FAVORITE_VARIANT } from '../actions';

// interface Props {
// 	name: string,
// 	variants: Array<any>
// }

const Breed: FC = () => {
	let { breed } = useParams();

	useEffect(() => {
		
	}, []);

	return (
		<h1>Showing Variant from Breed: {breed}</h1>
	);
};

// const mapStateToProps = state => ({
	
// });

// const mapDispatchToProps = dipatch => ({});

// const ConnectedBreed = connect(mapStateToProps, mapDispatchToProps)(Breed) 


export  { Breed };
