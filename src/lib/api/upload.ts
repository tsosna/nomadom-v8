import type { Upload } from '@/schemas/generated'

export const uploads: Array<Upload> = [
	{
		id: 1,
		title: 'investorForm',
		url: 'ttps://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1652361235/2020_12_14_FORMULARZ_A1_wersja_ODT_v3_01_REV_4_85c0707a64.pdf',
		hash: '2020_12_14_FORMULARZ_A1_wersja_ODT_v3_01_REV_4_85c0707a64',
		filename: '2020_12_14_FORMULARZ_A1_wersja_ODT_v3_01_REV_4_85c0707a64.pdf',
		mimetype: 'application/pdf',
		alt: 'form',
		caption: null,
		projectId: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: 2,
		title: 'brochure',
		url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1713000300/CLARO_nomado_M_technologie_modulowe_1_25ef6c8bc7.pdf',
		hash: 'CLARO_nomado_M_technologie_modulowe_1_25ef6c8bc7',
		filename: 'CLARO_nomado_M_technologie_modulowe_1_25ef6c8bc7.pdf',
		mimetype: 'application/pdf',
		alt: 'brochure',
		caption: null,
		projectId: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	}
]
