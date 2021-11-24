import { 
	GET_ALL_BREEDS,
	GET_VARIANTS,
	GET_VARIANT_IMAGES,
	SELECT_FAVORITE_VARIANT
 } from './actions';

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
		case GET_VARIANTS: {
			return state;
		}
		case GET_VARIANT_IMAGES: {
			return state;
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
			return payload.variant;
		}
		default: {
			return state;
		}
	}
};