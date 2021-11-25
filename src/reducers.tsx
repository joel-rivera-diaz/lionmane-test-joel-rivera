import { 
	GET_ALL_BREEDS,
	GET_VARIANTS,
	GET_VARIANT_IMAGES,
	
	SELECT_FAVORITE_VARIANT,
	LOAD_VARIANTS_IN_PROGRESS,
	LOAD_VARIANTS_SUCCESS,
	LOAD_VARIANTS_FAILURE
} from './actions';

export const isLoading = (state = false, action) => {
	const { type } = action;

	switch (type) {
		case LOAD_VARIANTS_IN_PROGRESS:
			return true;
		case LOAD_VARIANTS_SUCCESS:
		case LOAD_VARIANTS_FAILURE:
			return false;
		default:
			return state;
	}
};

export const breeds = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_BREEDS: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export const variants = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case LOAD_VARIANTS_SUCCESS:{
			const { variants } = payload;
			return variants;
		}
		default: {
			return state;
		}
	}
};

export const favoriteVariant = (state = null, action) => {
	const { type, payload } = action;

	switch (type) {
		case SELECT_FAVORITE_VARIANT: {
			return payload.name;	
		}
		default: {
			return state;
		}
	}
};