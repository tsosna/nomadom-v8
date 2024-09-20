type MenuItem = {
	id: number
	icon: string
	label: string
	path: string
}

export const menu: Array<MenuItem> = [
	{
		id: 1,
		icon: 'Logo',
		label: 'Home',
		path: '/'
	},
	{
		id: 2,
		icon: 'home',
		label: 'Projects',
		path: '/projects'
	},
	{
		id: 3,
		icon: 'user',
		label: 'About',
		path: '/about'
	},
	{
		id: 4,
		icon: 'currency',
		label: 'Pricing',
		path: '/pricing'
	},
	{
		id: 5,
		icon: 'mail',
		label: 'Contact',
		path: '/contact'
	}
]
