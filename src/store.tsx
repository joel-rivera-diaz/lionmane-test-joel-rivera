import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { breeds, variants, favoriteVariant } from './reducers';

const reducers = {
	breeds,
	variants,
	favoriteVariant
};

const rootReducer = combineReducers( reducers );

const configureStore = () => createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware( thunk ))
);

 export const store = configureStore();


// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch