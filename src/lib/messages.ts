import {
	rightElevation,
	frontElevation,
	rearElevation,
	leftElevation,
	showerRoom,
	bedroom
} from '$paraglide/messages'

export const renderLang: {
	[key: string]: (
		params?: object,
		options?: { languageTag?: 'en' | 'pl' | 'de' | 'fr' | undefined }
	) => string
} = {
	rightElevation: rightElevation,
	frontElevation: frontElevation,
	rearElevation: rearElevation,
	leftElevation: leftElevation,
	showerRoom: showerRoom,
	bedroom: bedroom
	// Add other functions as needed
}


