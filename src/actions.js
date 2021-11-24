export const GET_ALL_BREEDS = 'GET_ALL_BREEDS';
export const getAllBreeds = () => ({
	type: GET_ALL_BREEDS
});

export const GET_VARIANTS = 'GET_VARIANTS';
export const getVariants = breed => ({
	type: GET_VARIANTS,
	payload: { breed }
});

export const GET_VARIANT_IMAGES = 'GET_VARIANT_IMAGES';
export const getVariantImages = variant => ({
	type: GET_VARIANT_IMAGES,
	payload: { variant }
});

export const SELECT_FAVORITE_VARIANT = 'SELECT_FAVORITE_VARIANT';
export const selectFavoriteVariant = variant => ({
	type: SELECT_FAVORITE_VARIANT,
	payload: { variant }
});