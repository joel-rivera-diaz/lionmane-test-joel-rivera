import {
	SELECT_FAVORITE_VARIANT,
	LOAD_BREEDS_IN_PROGRESS,
	LOAD_BREEDS_SUCCESS,
	LOAD_BREEDS_FAILURE,
	LOAD_VARIANTS_IN_PROGRESS,
	LOAD_VARIANTS_SUCCESS,
	LOAD_VARIANTS_FAILURE,
	OPEN_POPUP,
	CLOSE_POPUP
} from './actions';

export const isLoading = (state = false, action) => {
	const { type } = action;

	switch (type) {
		case LOAD_BREEDS_IN_PROGRESS:
		case LOAD_VARIANTS_IN_PROGRESS:
			return true;
		case LOAD_BREEDS_SUCCESS:
		case LOAD_BREEDS_FAILURE:
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
		case LOAD_BREEDS_SUCCESS:{
			const { breeds } = payload;
			return breeds;
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

export const isVariantPopupOpen = (state = false, action) => {
	const { type } = action;
	
	switch (type) {
		case OPEN_POPUP: {
			return true;
		}
		case CLOSE_POPUP: {
			return false;
		}
		default: {
			return state;
		}
	}
};

export const popupVariantSelected = (state = '', action) => {
	const { type, payload } = action;

	switch(type) {
		case OPEN_POPUP: {
			return payload.name
		}
		default: {
			return state;
		}
	}
};