interface Action {
	type: string,
	payload?: {}
}

export const GET_ALL_BREEDS = 'GET_ALL_BREEDS';
export const getAllBreeds = (): Action => ({
	type: GET_ALL_BREEDS
});

export const GET_VARIANTS = 'GET_VARIANTS';
export const getVariants = (breed): Action => ({
	type: GET_VARIANTS,
	payload: { breed }
});

export const GET_VARIANT_IMAGES = 'GET_VARIANT_IMAGES';
export const getVariantImages = (variant): Action => ({
	type: GET_VARIANT_IMAGES,
	payload: { variant }
});

export const SELECT_FAVORITE_VARIANT = 'SELECT_FAVORITE_VARIANT';
export const selectFavoriteVariant = (variant): Action => ({
	type: SELECT_FAVORITE_VARIANT,
	payload: { variant }
});