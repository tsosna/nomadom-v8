import type { RoomSchedule } from '@/schemas/generated'

export const roomSchedule: Array<RoomSchedule> = [
	{
		id: '1',
		floorType: 'GROUND',
		areaType: 'USABLE_FLOOR',
		name: 'showerRoom',
		area: 5.58,
		unit: 'SQUARE_METER',
		projectId: '1',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: '2',
		floorType: 'GROUND',
		areaType: 'USABLE_FLOOR',
		name: 'bedroom',
		area: 14.84,
		unit: 'SQUARE_METER',
		projectId: '1',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: '3',
		floorType: 'GROUND',
		areaType: 'USABLE_FLOOR',
		name: 'livingRoom',
		area: 37.46,
		unit: 'SQUARE_METER',
		projectId: '1',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: '4',
		floorType: 'GROUND',
		areaType: 'USABLE_FLOOR',
		name: 'room',
		area: 10.39,
		unit: 'SQUARE_METER',
		projectId: '1',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: '5',
		floorType: 'GROUND',
		areaType: 'TERRACE',
		name: 'terrace',
		area: 23.2,
		unit: 'SQUARE_METER',
		projectId: '1',
		createdAt: new Date(),
		updatedAt: new Date()
	}
]
