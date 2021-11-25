import { 
	loadVariantsInProgress,
	loadVariantsSuccess,
	loadVariantsFailure 
} from './actions';

export const loadVariants = (breed) => (async (dispatch, getState) => {
	try {
		dispatch(loadVariantsInProgress());
		// GET variants
		const response = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
		const variants = (await response.json()).message;
		
		// GET variants' image urls( in parallel )
		const variantsImagesPromises =
			variants.map( v => (fetch(`https://dog.ceo/api/breed/${breed}/${v}/images`)));
		
		const variantsImagesResponses = await Promise.all(variantsImagesPromises);
		
		const variantsImagesURLsPromises = 
			variantsImagesResponses.map(response => (response as Response).json());

		const variantImagesURLs = await Promise.all(variantsImagesURLsPromises);

		// merge variants
		const variantsWithImageURLs =
			variants.map((v, i) => ({ name: v, imageURLs: variantImagesURLs[i].message }));



		
		console.log({
			response,
			variants,
			variantsImagesPromises,
			variantsImagesResponses,
			variantsImagesURLsPromises,
			variantImagesURLs,
			variantsWithImageURLs
		});
		
		
		dispatch(loadVariantsSuccess(variants));
	} catch (e) {
		dispatch(loadVariantsFailure());
		dispatch(displayAlert(e))
	}

});

export const displayAlert = (text) => (() => {
	alert(text);
});