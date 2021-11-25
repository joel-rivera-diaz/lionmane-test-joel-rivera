import { 
	loadVariantsInProgress,
	loadVariantsSuccess,
	loadVariantsFailure 
} from './actions';

export interface VariantData {
	name: string,
	imageURLs: string[]
}

export const loadVariants = (breed) => (async (dispatch, getState) => {
	try {
		dispatch(loadVariantsInProgress());
		// GET variants
		const response = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
		const variants = (await response.json()).message;
		
		// GET variants' image urls( in parallel )
		const variantsImagesResponses = await Promise.all(
			variants.map( v => (fetch(`https://dog.ceo/api/breed/${breed}/${v}/images`)))
		);
		
		const variantImagesURLs = await Promise.all(
			variantsImagesResponses.map(response => (response as Response).json())
		);

		// merge variants
		const variantsWithImageURLs: VariantData =
			variants.map((v, i) => ({ 
				name: v, 
				imageURLs: variantImagesURLs[i].message
			}));

		dispatch(loadVariantsSuccess(variantsWithImageURLs));

	} catch (e) {
		dispatch(loadVariantsFailure());
		dispatch(displayAlert(e))
	}

});

export const displayAlert = (text) => (() => {
	alert(text);
});