import type { Visualization } from '@/schemas/generated'

export const getVisualization = async (id: string): Promise<Visualization> => {
	const res = await fetch(`/api/visualization/${id}`)
	return res.json()
}

export const visualization: Array<Visualization> = [
	{
		id: '1',
		url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1712678803/n_M_CLARO_elewacja_frontowa_lewa_ebf368c46b.webp',
		hash: 'n_M_CLARO_elewacja_frontowa_lewa_ebf368c46b',
		alt: 'elewacja frontowa lewa',
		caption: null,
		projectId: '1',
		facadeType: 'WOOD_DARK',
		orientation: null,
		variantType: 'DEFAULT',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: '2',
		url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1712678803/n_M_CLARO_elewacja_frontowa_prawa_4ec1a4c970.webp',
		hash: 'n_M_CLARO_elewacja_frontowa_prawa_4ec1a4c970',
		alt: 'elewacja frontowa prawa',
		caption: null,
		projectId: '1',
		facadeType: 'WOOD_DARK',
		orientation: null,
		variantType: 'DEFAULT',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: '3',
		url: 'ttps://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1712678803/n_M_CLARO_elewacja_tylna_lewa_f9b84111fb.webp',
		hash: 'n_M_CLARO_elewacja_tylna_lewa_f9b84111fb',
		alt: 'elewacja tylna lewa',
		caption: null,
		projectId: '1',
		facadeType: 'WOOD_DARK',
		orientation: null,
		variantType: 'DEFAULT',
		createdAt: new Date(),
		updatedAt: new Date()
	},
  {
    id: '4',
    url:'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1712678803/n_M_CLARO_elewacja_tylna_prawa_7790090327.webp',
    hash: 'n_M_CLARO_elewacja_tylna_prawa_7790090327',
    alt: 'elewacja tylna prawa',
    caption: null,
    projectId: '1',
    facadeType: 'WOOD_DARK',
    orientation: null,
    variantType: 'DEFAULT',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:'5',
    url:"https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1712678802/n_M_CLARO_elewacja_prawa_84330413ae.webp",
    hash: 'n_M_CLARO_elewacja_prawa_84330413ae',
    alt: 'elewacja prawa',
    caption: null,
    projectId: '1',
    facadeType: 'WOOD_DARK',
    orientation: null,
    variantType: 'DEFAULT',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    
  }
]
