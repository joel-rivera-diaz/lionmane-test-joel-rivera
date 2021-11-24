import { createStore, combineReducers } from 'redux';
import {
	breeds,
	variants,
	favoriteVariant
} from './reducers';

const reducers = {
	breeds,
	variants,
	favoriteVariant
};

const rootReducer = combineReducers( reducers );

export const configureStore = () => createStore(rootReducer);