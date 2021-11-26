interface Action {
	type: string,
	payload?: {}
}

// export const GET_ALL_BREEDS = 'GET_ALL_BREEDS';
// export const getAllBreeds = (): Action => ({
// 	type: GET_ALL_BREEDS
// });

// export const GET_VARIANTS = 'GET_VARIANTS';
// export const getVariants = (breed): Action => ({
// 	type: GET_VARIANTS,
// 	payload: { breed }
// });

// export const GET_VARIANT_IMAGES = 'GET_VARIANT_IMAGES';
// export const getVariantImages = (variant): Action => ({
// 	type: GET_VARIANT_IMAGES,
// 	payload: { variant }
// });

// -----------



export const SELECT_FAVORITE_VARIANT = 'SELECT_FAVORITE_VARIANT';
export const selectFavoriteVariant = (name): Action => ({
	type: SELECT_FAVORITE_VARIANT,
	payload: { name }
});

export const OPEN_POPUP = 'OPEN_POPUP';
export const openPopup = (name): Action => ({
	type: OPEN_POPUP,
	payload: { name }
});

export const CLOSE_POPUP = 'CLOSE_POPUP';
export const closePopup = (): Action => ({
	type: CLOSE_POPUP
});

export const LOAD_VARIANTS_IN_PROGRESS = 'LOAD_VARIANTS_IN_PROGRESS';
export const loadVariantsInProgress = (): Action => ({
	type: LOAD_VARIANTS_IN_PROGRESS
});

export const LOAD_VARIANTS_SUCCESS = 'LOAD_VARIANTS_SUCCESS';
export const loadVariantsSuccess = (variants): Action => ({
	type: LOAD_VARIANTS_SUCCESS,
	payload: { variants }
});

export const LOAD_VARIANTS_FAILURE = 'LOAD_VARIANTS_FAILURE';
export const loadVariantsFailure = (): Action => ({
	type: LOAD_VARIANTS_FAILURE
});

// ---

export const LOAD_BREEDS_IN_PROGRESS = 'LOAD_BREEDS_IN_PROGRESS';
export const loadBreedsInProgress = (): Action => ({
	type: LOAD_BREEDS_IN_PROGRESS
});

export const LOAD_BREEDS_SUCCESS = 'LOAD_BREEDS_SUCCESS';
export const loadBreedsSuccess = (breeds): Action => ({
	type: LOAD_BREEDS_SUCCESS,
	payload: { breeds }
});

export const LOAD_BREEDS_FAILURE = 'LOAD_BREEDS_FAILURE';
export const loadBreedsFailure = (): Action => ({
	type: LOAD_BREEDS_FAILURE
});
