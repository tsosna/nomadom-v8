import { altJaponico, altBosco, altOptimo } from '$paraglide/messages'

export type Project = {
	id: number
	icon: string
	name: string
	href: string
	img: {
		src: string
		thumbnail: string
	}
	slug: string
	alt: string
	menuId?: number
}

export const projects: Array<Project> = [
	{
		id: 1,
		icon: 'Flower',
		name: 'Japonico 35',
		href: 'projects/japonico-35',
		img: {
			src: '',
			thumbnail:
				'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1666347607/thumbnail_wiz_1_ae5fe18524.webp'
		},
		slug: 'japonico-35',
		alt: altJaponico(),
		menuId: 3
	},
	{
		id: 2,
		icon: 'Leaf',
		name: 'Optimo',
		href: 'projects/optimo',
		img: {
			src: '',
			thumbnail:
				'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1674652743/thumbnail_nomado_M_domy_modulowe_z_duzymi_oknami_typu_HS_to_antracytowa_stolarka_na_jasnej_drewnianej_elewacji_w_projekcie_domu_Optimo_cffa34f8f6.webp'
		},
		slug: 'optimo',
		alt: altOptimo(),
		menuId: 3
	},
	{
		id: 3,
		icon: 'Sprout',
		name: 'Bbosco',
		href: 'projects/bosco',
		img: {
			src: '',
			thumbnail:
				'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1670687133/thumbnail_n_M_BOSCO_Modular_houses_Beautiful_house_project_with_light_coloured_elevations_and_a_gable_roof_in_grey_a85ed63138.webp'
		},
		slug: 'bosco',
		alt: altBosco(),
		menuId: 3
	},
	{
		id: 4,
		icon: 'Shrub',
		name: 'Cubico',
		href: 'projects/cubico',
		img: {
			src: '',
			thumbnail:
				'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1671117294/thumbnail_n_M_domy_modulowe_duze_przeszklenie_i_efektowny_taras_to_projekt_malego_domu_35m2_na_zgloszenie_z_ciemna_elewacja_i_duzym_przeszkleniem_1ce694f995.webp'
		},
		slug: 'cubico',
		alt: 'cubico',
		menuId: 3
	},
	{
		id: 5,
		icon: 'Trees',
		name: 'Techo 35',
		href: 'projects/techo-35',
		img: {
			src: '',
			thumbnail:
				'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1671119739/thumbnail_n_M_TECHO_modular_houses_Modular_house_with_gable_roof_and_large_impressive_glazing_is_an_idea_for_a_year_round_house_up_to_35m2_dec115c912.webp'
		},
		slug: 'techo-35',
		alt: 'techo-35',
		menuId: 3
	}
]
