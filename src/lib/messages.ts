import {
	rightElevation,
	frontElevation,
	rearElevation,
	leftElevation,
	showerRoom,
	bedroom,
	CLARO_mainBenefits
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
	bedroom: bedroom,
	CLARO_mainBenefits: CLARO_mainBenefits
	// Add other functions as needed
}


