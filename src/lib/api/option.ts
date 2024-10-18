import type { Option } from '@/schemas/generated'

export const options: Array<Option> = [
	{
		id: 1,
		name: 'tarasy drewniane',
		description: 'tarasy drewniane',
		price: 1000,
		projectId: 1,

		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: 2,
		name: 'wanna (beczka) zewnętrzna wbudowana w taras',
		description: 'wanna (beczka) zewnętrzna wbudowana w taras',
		price: 1000,
		projectId: 1,

		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: 3,
		name: 'sauna jako budynek dodatkowy',
		description: 'sauna jako budynek dodatkowy',
		price: 1000,
		projectId: 1,

		createdAt: new Date(),
		updatedAt: new Date()
	}
]
