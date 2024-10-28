import { z } from 'zod'
import type { Prisma } from '@prisma/client'

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
	'ReadUncommitted',
	'ReadCommitted',
	'RepeatableRead',
	'Serializable'
])

export const ProjectScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'slug',
	'icon',
	'label',
	'tags',
	'shortDescription',
	'longDescription',
	'mainBenefits',
	'additionalInfo',
	'technicalInfo',
	'usableArea',
	'numPeople',
	'roofType',
	'houseType',
	'status',
	'index',
	'highlighted',
	'createdAt',
	'updatedAt'
])

export const HomeTypeScalarFieldEnumSchema = z.enum([
	'id',
	'facadeType',
	'variantType',
	'dimensionType',
	'createdAt',
	'updatedAt'
])

export const OptionScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'description',
	'price',
	'projectId',
	'createdAt',
	'updatedAt'
])

export const CurrencyScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'symbol',
	'exchange',
	'projectId',
	'createdAt',
	'updatedAt'
])

export const UploadScalarFieldEnumSchema = z.enum([
	'id',
	'title',
	'filename',
	'mimetype',
	'url',
	'hash',
	'alt',
	'caption',
	'projectId',
	'createdAt',
	'updatedAt'
])

export const ImageScalarFieldEnumSchema = z.enum([
	'id',
	'title',
	'filename',
	'mimetype',
	'url',
	'hash',
	'alt',
	'caption',
	'highlighted',
	'imageType',
	'projectId',
	'homeTypeId',
	'createdAt',
	'updatedAt'
])

export const VideoScalarFieldEnumSchema = z.enum([
	'id',
	'title',
	'filename',
	'mimetype',
	'url',
	'hash',
	'alt',
	'caption',
	'highlighted',
	'projectId',
	'createdAt',
	'updatedAt'
])

export const RoomScheduleScalarFieldEnumSchema = z.enum([
	'id',
	'floorType',
	'areaType',
	'name',
	'area',
	'unit',
	'projectId',
	'createdAt',
	'updatedAt'
])

export const SortOrderSchema = z.enum(['asc', 'desc'])

export const QueryModeSchema = z.enum(['default', 'insensitive'])

export const NullsOrderSchema = z.enum(['first', 'last'])

export const StatusTypeSchema = z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'])

export type StatusTypeType = `${z.infer<typeof StatusTypeSchema>}`

export const HouseTypeSchema = z.enum([
	'SINGLE_FAMILY',
	'MULTI_FAMILY',
	'SEMI_DETACHED',
	'DETACHED',
	'DUPLEX',
	'APARTMENT',
	'STUDIO',
	'LOFT',
	'PENTHOUSE',
	'GARDEN_HOUSE',
	'COTTAGE',
	'BUNGALOW',
	'VILLA',
	'MANSION'
])

export type HouseTypeType = `${z.infer<typeof HouseTypeSchema>}`

export const RoofTypeSchema = z.enum(['FLAT', 'PITCHED'])

export type RoofTypeType = `${z.infer<typeof RoofTypeSchema>}`

export const FacadeTypeSchema = z.enum([
	'SHEET_METAL',
	'PLASTER',
	'BRICK',
	'WOOD_LIGHT',
	'WOOD_DARK'
])

export type FacadeTypeType = `${z.infer<typeof FacadeTypeSchema>}`

export const DimensionTypeSchema = z.enum(['D2', 'D3'])

export type DimensionTypeType = `${z.infer<typeof DimensionTypeSchema>}`

export const VariantTypeSchema = z.enum(['DEFAULT', 'MIRROR'])

export type VariantTypeType = `${z.infer<typeof VariantTypeSchema>}`

export const ImageTypeSchema = z.enum([
	'VISUALIZATION',
	'FLOOR_PLAN',
	'SECTION_PLAN',
	'SITE_PLAN',
	'LOCALIZATION_PLAN',
	'ELEVATION',
	'INTERIOR',
	'SECTION',
	'DETAIL',
	'RENDERING',
	'PHOTO',
	'PROJECT'
])

export type ImageTypeType = `${z.infer<typeof ImageTypeSchema>}`

export const UnitTypeSchema = z.enum(['SQUARE_METER', 'SQUARE_FEET'])

export type UnitTypeType = `${z.infer<typeof UnitTypeSchema>}`

export const FloorTypeSchema = z.enum(['BASEMENT', 'GROUND', 'FIRST', 'SECOND', 'THIRD', 'FOURTH'])

export type FloorTypeType = `${z.infer<typeof FloorTypeSchema>}`

export const AreaTypeSchema = z.enum([
	'USABLE_FLOOR',
	'GROSS_FLOOR',
	'TOTAL_FLOOR',
	'BUILT_UP',
	'AUXILIARY_SPACE',
	'TERRACE',
	'BALCONY',
	'GARDEN',
	'TECHNICAL_SPACE'
])

export type AreaTypeType = `${z.infer<typeof AreaTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
	roofType: RoofTypeSchema,
	houseType: HouseTypeSchema,
	status: StatusTypeSchema,
	id: z.number().int(),
	name: z.string(),
	slug: z.string(),
	icon: z.string(),
	label: z.string().nullable(),
	tags: z.string().array(),
	shortDescription: z.string().nullable(),
	longDescription: z.string().nullable(),
	mainBenefits: z.string().nullable(),
	additionalInfo: z.string().nullable(),
	technicalInfo: z.string().nullable(),
	usableArea: z.number().nullable(),
	numPeople: z.string().nullable(),
	index: z.number().int(),
	highlighted: z.boolean(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
})

export type Project = z.infer<typeof ProjectSchema>

/////////////////////////////////////////
// HOME TYPE SCHEMA
/////////////////////////////////////////

export const HomeTypeSchema = z.object({
	facadeType: FacadeTypeSchema.nullable(),
	variantType: VariantTypeSchema,
	dimensionType: DimensionTypeSchema,
	id: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
})

export type HomeType = z.infer<typeof HomeTypeSchema>

/////////////////////////////////////////
// OPTION SCHEMA
/////////////////////////////////////////

export const OptionSchema = z.object({
	id: z.number().int(),
	name: z.string(),
	description: z.string().nullable(),
	price: z.number().nullable(),
	projectId: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
})

export type Option = z.infer<typeof OptionSchema>

/////////////////////////////////////////
// CURRENCY SCHEMA
/////////////////////////////////////////

export const CurrencySchema = z.object({
	id: z.number().int(),
	name: z.string(),
	symbol: z.string(),
	exchange: z.number().nullable(),
	projectId: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
})

export type Currency = z.infer<typeof CurrencySchema>

/////////////////////////////////////////
// UPLOAD SCHEMA
/////////////////////////////////////////

export const UploadSchema = z.object({
	id: z.number().int(),
	title: z.string().nullable(),
	filename: z.string(),
	mimetype: z.string().nullable(),
	url: z.string(),
	hash: z.string(),
	alt: z.string().nullable(),
	caption: z.string().nullable(),
	projectId: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
})

export type Upload = z.infer<typeof UploadSchema>

/////////////////////////////////////////
// IMAGE SCHEMA
/////////////////////////////////////////

export const ImageSchema = z.object({
	imageType: ImageTypeSchema,
	id: z.number().int(),
	title: z.string().nullable(),
	filename: z.string(),
	mimetype: z.string(),
	url: z.string(),
	hash: z.string(),
	alt: z.string().nullable(),
	caption: z.string().nullable(),
	highlighted: z.boolean(),
	projectId: z.number().int(),
	homeTypeId: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
})

export type Image = z.infer<typeof ImageSchema>

/////////////////////////////////////////
// VIDEO SCHEMA
/////////////////////////////////////////

export const VideoSchema = z.object({
	id: z.number().int(),
	title: z.string().nullable(),
	filename: z.string(),
	mimetype: z.string(),
	url: z.string(),
	hash: z.string(),
	alt: z.string().nullable(),
	caption: z.string().nullable(),
	highlighted: z.boolean(),
	projectId: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
})

export type Video = z.infer<typeof VideoSchema>

/////////////////////////////////////////
// ROOM SCHEDULE SCHEMA
/////////////////////////////////////////

export const RoomScheduleSchema = z.object({
	floorType: FloorTypeSchema,
	areaType: AreaTypeSchema,
	unit: UnitTypeSchema,
	id: z.number().int(),
	name: z.string(),
	area: z.number().nullable(),
	projectId: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
})

export type RoomSchedule = z.infer<typeof RoomScheduleSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PROJECT
//------------------------------------------------------

export const ProjectIncludeSchema: z.ZodType<Prisma.ProjectInclude> = z
	.object({
		options: z.union([z.boolean(), z.lazy(() => OptionFindManyArgsSchema)]).optional(),
		currencies: z.union([z.boolean(), z.lazy(() => CurrencyFindManyArgsSchema)]).optional(),
		uploads: z.union([z.boolean(), z.lazy(() => UploadFindManyArgsSchema)]).optional(),
		images: z.union([z.boolean(), z.lazy(() => ImageFindManyArgsSchema)]).optional(),
		videos: z.union([z.boolean(), z.lazy(() => VideoFindManyArgsSchema)]).optional(),
		roomSchedules: z.union([z.boolean(), z.lazy(() => RoomScheduleFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional()
	})
	.strict()

export const ProjectArgsSchema: z.ZodType<Prisma.ProjectDefaultArgs> = z
	.object({
		select: z.lazy(() => ProjectSelectSchema).optional(),
		include: z.lazy(() => ProjectIncludeSchema).optional()
	})
	.strict()

export const ProjectCountOutputTypeArgsSchema: z.ZodType<Prisma.ProjectCountOutputTypeDefaultArgs> =
	z
		.object({
			select: z.lazy(() => ProjectCountOutputTypeSelectSchema).nullish()
		})
		.strict()

export const ProjectCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = z
	.object({
		options: z.boolean().optional(),
		currencies: z.boolean().optional(),
		uploads: z.boolean().optional(),
		images: z.boolean().optional(),
		videos: z.boolean().optional(),
		roomSchedules: z.boolean().optional()
	})
	.strict()

export const ProjectSelectSchema: z.ZodType<Prisma.ProjectSelect> = z
	.object({
		id: z.boolean().optional(),
		name: z.boolean().optional(),
		slug: z.boolean().optional(),
		icon: z.boolean().optional(),
		label: z.boolean().optional(),
		tags: z.boolean().optional(),
		shortDescription: z.boolean().optional(),
		longDescription: z.boolean().optional(),
		mainBenefits: z.boolean().optional(),
		additionalInfo: z.boolean().optional(),
		technicalInfo: z.boolean().optional(),
		usableArea: z.boolean().optional(),
		numPeople: z.boolean().optional(),
		roofType: z.boolean().optional(),
		houseType: z.boolean().optional(),
		status: z.boolean().optional(),
		index: z.boolean().optional(),
		highlighted: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		options: z.union([z.boolean(), z.lazy(() => OptionFindManyArgsSchema)]).optional(),
		currencies: z.union([z.boolean(), z.lazy(() => CurrencyFindManyArgsSchema)]).optional(),
		uploads: z.union([z.boolean(), z.lazy(() => UploadFindManyArgsSchema)]).optional(),
		images: z.union([z.boolean(), z.lazy(() => ImageFindManyArgsSchema)]).optional(),
		videos: z.union([z.boolean(), z.lazy(() => VideoFindManyArgsSchema)]).optional(),
		roomSchedules: z.union([z.boolean(), z.lazy(() => RoomScheduleFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional()
	})
	.strict()

// HOME TYPE
//------------------------------------------------------

export const HomeTypeIncludeSchema: z.ZodType<Prisma.HomeTypeInclude> = z
	.object({
		images: z.union([z.boolean(), z.lazy(() => ImageFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => HomeTypeCountOutputTypeArgsSchema)]).optional()
	})
	.strict()

export const HomeTypeArgsSchema: z.ZodType<Prisma.HomeTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => HomeTypeSelectSchema).optional(),
		include: z.lazy(() => HomeTypeIncludeSchema).optional()
	})
	.strict()

export const HomeTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.HomeTypeCountOutputTypeDefaultArgs> =
	z
		.object({
			select: z.lazy(() => HomeTypeCountOutputTypeSelectSchema).nullish()
		})
		.strict()

export const HomeTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.HomeTypeCountOutputTypeSelect> =
	z
		.object({
			images: z.boolean().optional()
		})
		.strict()

export const HomeTypeSelectSchema: z.ZodType<Prisma.HomeTypeSelect> = z
	.object({
		id: z.boolean().optional(),
		facadeType: z.boolean().optional(),
		variantType: z.boolean().optional(),
		dimensionType: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		images: z.union([z.boolean(), z.lazy(() => ImageFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => HomeTypeCountOutputTypeArgsSchema)]).optional()
	})
	.strict()

// OPTION
//------------------------------------------------------

export const OptionIncludeSchema: z.ZodType<Prisma.OptionInclude> = z
	.object({
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

export const OptionArgsSchema: z.ZodType<Prisma.OptionDefaultArgs> = z
	.object({
		select: z.lazy(() => OptionSelectSchema).optional(),
		include: z.lazy(() => OptionIncludeSchema).optional()
	})
	.strict()

export const OptionSelectSchema: z.ZodType<Prisma.OptionSelect> = z
	.object({
		id: z.boolean().optional(),
		name: z.boolean().optional(),
		description: z.boolean().optional(),
		price: z.boolean().optional(),
		projectId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

// CURRENCY
//------------------------------------------------------

export const CurrencyIncludeSchema: z.ZodType<Prisma.CurrencyInclude> = z
	.object({
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

export const CurrencyArgsSchema: z.ZodType<Prisma.CurrencyDefaultArgs> = z
	.object({
		select: z.lazy(() => CurrencySelectSchema).optional(),
		include: z.lazy(() => CurrencyIncludeSchema).optional()
	})
	.strict()

export const CurrencySelectSchema: z.ZodType<Prisma.CurrencySelect> = z
	.object({
		id: z.boolean().optional(),
		name: z.boolean().optional(),
		symbol: z.boolean().optional(),
		exchange: z.boolean().optional(),
		projectId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

// UPLOAD
//------------------------------------------------------

export const UploadIncludeSchema: z.ZodType<Prisma.UploadInclude> = z
	.object({
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

export const UploadArgsSchema: z.ZodType<Prisma.UploadDefaultArgs> = z
	.object({
		select: z.lazy(() => UploadSelectSchema).optional(),
		include: z.lazy(() => UploadIncludeSchema).optional()
	})
	.strict()

export const UploadSelectSchema: z.ZodType<Prisma.UploadSelect> = z
	.object({
		id: z.boolean().optional(),
		title: z.boolean().optional(),
		filename: z.boolean().optional(),
		mimetype: z.boolean().optional(),
		url: z.boolean().optional(),
		hash: z.boolean().optional(),
		alt: z.boolean().optional(),
		caption: z.boolean().optional(),
		projectId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

// IMAGE
//------------------------------------------------------

export const ImageIncludeSchema: z.ZodType<Prisma.ImageInclude> = z
	.object({
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
		homeType: z.union([z.boolean(), z.lazy(() => HomeTypeArgsSchema)]).optional()
	})
	.strict()

export const ImageArgsSchema: z.ZodType<Prisma.ImageDefaultArgs> = z
	.object({
		select: z.lazy(() => ImageSelectSchema).optional(),
		include: z.lazy(() => ImageIncludeSchema).optional()
	})
	.strict()

export const ImageSelectSchema: z.ZodType<Prisma.ImageSelect> = z
	.object({
		id: z.boolean().optional(),
		title: z.boolean().optional(),
		filename: z.boolean().optional(),
		mimetype: z.boolean().optional(),
		url: z.boolean().optional(),
		hash: z.boolean().optional(),
		alt: z.boolean().optional(),
		caption: z.boolean().optional(),
		highlighted: z.boolean().optional(),
		imageType: z.boolean().optional(),
		projectId: z.boolean().optional(),
		homeTypeId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
		homeType: z.union([z.boolean(), z.lazy(() => HomeTypeArgsSchema)]).optional()
	})
	.strict()

// VIDEO
//------------------------------------------------------

export const VideoIncludeSchema: z.ZodType<Prisma.VideoInclude> = z
	.object({
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

export const VideoArgsSchema: z.ZodType<Prisma.VideoDefaultArgs> = z
	.object({
		select: z.lazy(() => VideoSelectSchema).optional(),
		include: z.lazy(() => VideoIncludeSchema).optional()
	})
	.strict()

export const VideoSelectSchema: z.ZodType<Prisma.VideoSelect> = z
	.object({
		id: z.boolean().optional(),
		title: z.boolean().optional(),
		filename: z.boolean().optional(),
		mimetype: z.boolean().optional(),
		url: z.boolean().optional(),
		hash: z.boolean().optional(),
		alt: z.boolean().optional(),
		caption: z.boolean().optional(),
		highlighted: z.boolean().optional(),
		projectId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

// ROOM SCHEDULE
//------------------------------------------------------

export const RoomScheduleIncludeSchema: z.ZodType<Prisma.RoomScheduleInclude> = z
	.object({
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

export const RoomScheduleArgsSchema: z.ZodType<Prisma.RoomScheduleDefaultArgs> = z
	.object({
		select: z.lazy(() => RoomScheduleSelectSchema).optional(),
		include: z.lazy(() => RoomScheduleIncludeSchema).optional()
	})
	.strict()

export const RoomScheduleSelectSchema: z.ZodType<Prisma.RoomScheduleSelect> = z
	.object({
		id: z.boolean().optional(),
		floorType: z.boolean().optional(),
		areaType: z.boolean().optional(),
		name: z.boolean().optional(),
		area: z.boolean().optional(),
		unit: z.boolean().optional(),
		projectId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
	})
	.strict()

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ProjectWhereInputSchema: z.ZodType<Prisma.ProjectWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => ProjectWhereInputSchema), z.lazy(() => ProjectWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => ProjectWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => ProjectWhereInputSchema), z.lazy(() => ProjectWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		icon: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		label: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		tags: z.lazy(() => StringNullableListFilterSchema).optional(),
		shortDescription: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		longDescription: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		mainBenefits: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		additionalInfo: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		technicalInfo: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		usableArea: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		numPeople: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		roofType: z
			.union([z.lazy(() => EnumRoofTypeFilterSchema), z.lazy(() => RoofTypeSchema)])
			.optional(),
		houseType: z
			.union([z.lazy(() => EnumHouseTypeFilterSchema), z.lazy(() => HouseTypeSchema)])
			.optional(),
		status: z
			.union([z.lazy(() => EnumStatusTypeFilterSchema), z.lazy(() => StatusTypeSchema)])
			.optional(),
		index: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		highlighted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		options: z.lazy(() => OptionListRelationFilterSchema).optional(),
		currencies: z.lazy(() => CurrencyListRelationFilterSchema).optional(),
		uploads: z.lazy(() => UploadListRelationFilterSchema).optional(),
		images: z.lazy(() => ImageListRelationFilterSchema).optional(),
		videos: z.lazy(() => VideoListRelationFilterSchema).optional(),
		roomSchedules: z.lazy(() => RoomScheduleListRelationFilterSchema).optional()
	})
	.strict()

export const ProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			slug: z.lazy(() => SortOrderSchema).optional(),
			icon: z.lazy(() => SortOrderSchema).optional(),
			label: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			tags: z.lazy(() => SortOrderSchema).optional(),
			shortDescription: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			longDescription: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			mainBenefits: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			additionalInfo: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			technicalInfo: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			usableArea: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			numPeople: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			roofType: z.lazy(() => SortOrderSchema).optional(),
			houseType: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			index: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			options: z.lazy(() => OptionOrderByRelationAggregateInputSchema).optional(),
			currencies: z.lazy(() => CurrencyOrderByRelationAggregateInputSchema).optional(),
			uploads: z.lazy(() => UploadOrderByRelationAggregateInputSchema).optional(),
			images: z.lazy(() => ImageOrderByRelationAggregateInputSchema).optional(),
			videos: z.lazy(() => VideoOrderByRelationAggregateInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleOrderByRelationAggregateInputSchema).optional()
		})
		.strict()

export const ProjectWhereUniqueInputSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> = z
	.union([
		z.object({
			id: z.number().int(),
			slug: z.string()
		}),
		z.object({
			id: z.number().int()
		}),
		z.object({
			slug: z.string()
		})
	])
	.and(
		z
			.object({
				id: z.number().int().optional(),
				slug: z.string().optional(),
				AND: z
					.union([
						z.lazy(() => ProjectWhereInputSchema),
						z.lazy(() => ProjectWhereInputSchema).array()
					])
					.optional(),
				OR: z
					.lazy(() => ProjectWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => ProjectWhereInputSchema),
						z.lazy(() => ProjectWhereInputSchema).array()
					])
					.optional(),
				name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				icon: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				label: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				tags: z.lazy(() => StringNullableListFilterSchema).optional(),
				shortDescription: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				longDescription: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				mainBenefits: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				additionalInfo: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				technicalInfo: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				usableArea: z
					.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
					.optional()
					.nullable(),
				numPeople: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				roofType: z
					.union([z.lazy(() => EnumRoofTypeFilterSchema), z.lazy(() => RoofTypeSchema)])
					.optional(),
				houseType: z
					.union([z.lazy(() => EnumHouseTypeFilterSchema), z.lazy(() => HouseTypeSchema)])
					.optional(),
				status: z
					.union([z.lazy(() => EnumStatusTypeFilterSchema), z.lazy(() => StatusTypeSchema)])
					.optional(),
				index: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				highlighted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				options: z.lazy(() => OptionListRelationFilterSchema).optional(),
				currencies: z.lazy(() => CurrencyListRelationFilterSchema).optional(),
				uploads: z.lazy(() => UploadListRelationFilterSchema).optional(),
				images: z.lazy(() => ImageListRelationFilterSchema).optional(),
				videos: z.lazy(() => VideoListRelationFilterSchema).optional(),
				roomSchedules: z.lazy(() => RoomScheduleListRelationFilterSchema).optional()
			})
			.strict()
	)

export const ProjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			slug: z.lazy(() => SortOrderSchema).optional(),
			icon: z.lazy(() => SortOrderSchema).optional(),
			label: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			tags: z.lazy(() => SortOrderSchema).optional(),
			shortDescription: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			longDescription: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			mainBenefits: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			additionalInfo: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			technicalInfo: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			usableArea: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			numPeople: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			roofType: z.lazy(() => SortOrderSchema).optional(),
			houseType: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			index: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => ProjectCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => ProjectAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => ProjectMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => ProjectMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => ProjectSumOrderByAggregateInputSchema).optional()
		})
		.strict()

export const ProjectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),
					z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			OR: z
				.lazy(() => ProjectScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),
					z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			icon: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			label: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			tags: z.lazy(() => StringNullableListFilterSchema).optional(),
			shortDescription: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			roofType: z
				.union([z.lazy(() => EnumRoofTypeWithAggregatesFilterSchema), z.lazy(() => RoofTypeSchema)])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => EnumHouseTypeWithAggregatesFilterSchema),
					z.lazy(() => HouseTypeSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => EnumStatusTypeWithAggregatesFilterSchema),
					z.lazy(() => StatusTypeSchema)
				])
				.optional(),
			index: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			highlighted: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
		})
		.strict()

export const HomeTypeWhereInputSchema: z.ZodType<Prisma.HomeTypeWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => HomeTypeWhereInputSchema),
				z.lazy(() => HomeTypeWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => HomeTypeWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => HomeTypeWhereInputSchema),
				z.lazy(() => HomeTypeWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		facadeType: z
			.union([z.lazy(() => EnumFacadeTypeNullableFilterSchema), z.lazy(() => FacadeTypeSchema)])
			.optional()
			.nullable(),
		variantType: z
			.union([z.lazy(() => EnumVariantTypeFilterSchema), z.lazy(() => VariantTypeSchema)])
			.optional(),
		dimensionType: z
			.union([z.lazy(() => EnumDimensionTypeFilterSchema), z.lazy(() => DimensionTypeSchema)])
			.optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		images: z.lazy(() => ImageListRelationFilterSchema).optional()
	})
	.strict()

export const HomeTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.HomeTypeOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			facadeType: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			variantType: z.lazy(() => SortOrderSchema).optional(),
			dimensionType: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			images: z.lazy(() => ImageOrderByRelationAggregateInputSchema).optional()
		})
		.strict()

export const HomeTypeWhereUniqueInputSchema: z.ZodType<Prisma.HomeTypeWhereUniqueInput> = z
	.union([
		z.object({
			id: z.number().int(),
			facadeType_variantType_dimensionType: z.lazy(
				() => HomeTypeFacadeTypeVariantTypeDimensionTypeCompoundUniqueInputSchema
			)
		}),
		z.object({
			id: z.number().int()
		}),
		z.object({
			facadeType_variantType_dimensionType: z.lazy(
				() => HomeTypeFacadeTypeVariantTypeDimensionTypeCompoundUniqueInputSchema
			)
		})
	])
	.and(
		z
			.object({
				id: z.number().int().optional(),
				facadeType_variantType_dimensionType: z
					.lazy(() => HomeTypeFacadeTypeVariantTypeDimensionTypeCompoundUniqueInputSchema)
					.optional(),
				AND: z
					.union([
						z.lazy(() => HomeTypeWhereInputSchema),
						z.lazy(() => HomeTypeWhereInputSchema).array()
					])
					.optional(),
				OR: z
					.lazy(() => HomeTypeWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => HomeTypeWhereInputSchema),
						z.lazy(() => HomeTypeWhereInputSchema).array()
					])
					.optional(),
				facadeType: z
					.union([z.lazy(() => EnumFacadeTypeNullableFilterSchema), z.lazy(() => FacadeTypeSchema)])
					.optional()
					.nullable(),
				variantType: z
					.union([z.lazy(() => EnumVariantTypeFilterSchema), z.lazy(() => VariantTypeSchema)])
					.optional(),
				dimensionType: z
					.union([z.lazy(() => EnumDimensionTypeFilterSchema), z.lazy(() => DimensionTypeSchema)])
					.optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				images: z.lazy(() => ImageListRelationFilterSchema).optional()
			})
			.strict()
	)

export const HomeTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.HomeTypeOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			facadeType: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			variantType: z.lazy(() => SortOrderSchema).optional(),
			dimensionType: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => HomeTypeCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => HomeTypeAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => HomeTypeMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => HomeTypeMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => HomeTypeSumOrderByAggregateInputSchema).optional()
		})
		.strict()

export const HomeTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HomeTypeScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => HomeTypeScalarWhereWithAggregatesInputSchema),
					z.lazy(() => HomeTypeScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			OR: z
				.lazy(() => HomeTypeScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => HomeTypeScalarWhereWithAggregatesInputSchema),
					z.lazy(() => HomeTypeScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			facadeType: z
				.union([
					z.lazy(() => EnumFacadeTypeNullableWithAggregatesFilterSchema),
					z.lazy(() => FacadeTypeSchema)
				])
				.optional()
				.nullable(),
			variantType: z
				.union([
					z.lazy(() => EnumVariantTypeWithAggregatesFilterSchema),
					z.lazy(() => VariantTypeSchema)
				])
				.optional(),
			dimensionType: z
				.union([
					z.lazy(() => EnumDimensionTypeWithAggregatesFilterSchema),
					z.lazy(() => DimensionTypeSchema)
				])
				.optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
		})
		.strict()

export const OptionWhereInputSchema: z.ZodType<Prisma.OptionWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => OptionWhereInputSchema), z.lazy(() => OptionWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => OptionWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => OptionWhereInputSchema), z.lazy(() => OptionWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		price: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		project: z
			.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
			.optional()
	})
	.strict()

export const OptionOrderByWithRelationInputSchema: z.ZodType<Prisma.OptionOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			description: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			price: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
		})
		.strict()

export const OptionWhereUniqueInputSchema: z.ZodType<Prisma.OptionWhereUniqueInput> = z
	.object({
		id: z.number().int()
	})
	.and(
		z
			.object({
				id: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => OptionWhereInputSchema),
						z.lazy(() => OptionWhereInputSchema).array()
					])
					.optional(),
				OR: z
					.lazy(() => OptionWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => OptionWhereInputSchema),
						z.lazy(() => OptionWhereInputSchema).array()
					])
					.optional(),
				name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				description: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				price: z
					.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
					.optional()
					.nullable(),
				projectId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				project: z
					.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
					.optional()
			})
			.strict()
	)

export const OptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.OptionOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			description: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			price: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => OptionCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => OptionAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => OptionMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => OptionMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => OptionSumOrderByAggregateInputSchema).optional()
		})
		.strict()

export const OptionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OptionScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => OptionScalarWhereWithAggregatesInputSchema),
					z.lazy(() => OptionScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			OR: z
				.lazy(() => OptionScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => OptionScalarWhereWithAggregatesInputSchema),
					z.lazy(() => OptionScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			description: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			price: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			projectId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
		})
		.strict()

export const CurrencyWhereInputSchema: z.ZodType<Prisma.CurrencyWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => CurrencyWhereInputSchema),
				z.lazy(() => CurrencyWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => CurrencyWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => CurrencyWhereInputSchema),
				z.lazy(() => CurrencyWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		symbol: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		exchange: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		project: z
			.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
			.optional()
	})
	.strict()

export const CurrencyOrderByWithRelationInputSchema: z.ZodType<Prisma.CurrencyOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			symbol: z.lazy(() => SortOrderSchema).optional(),
			exchange: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
		})
		.strict()

export const CurrencyWhereUniqueInputSchema: z.ZodType<Prisma.CurrencyWhereUniqueInput> = z
	.object({
		id: z.number().int()
	})
	.and(
		z
			.object({
				id: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => CurrencyWhereInputSchema),
						z.lazy(() => CurrencyWhereInputSchema).array()
					])
					.optional(),
				OR: z
					.lazy(() => CurrencyWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => CurrencyWhereInputSchema),
						z.lazy(() => CurrencyWhereInputSchema).array()
					])
					.optional(),
				name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				symbol: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				exchange: z
					.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
					.optional()
					.nullable(),
				projectId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				project: z
					.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
					.optional()
			})
			.strict()
	)

export const CurrencyOrderByWithAggregationInputSchema: z.ZodType<Prisma.CurrencyOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			symbol: z.lazy(() => SortOrderSchema).optional(),
			exchange: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => CurrencyCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => CurrencyAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => CurrencyMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => CurrencyMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => CurrencySumOrderByAggregateInputSchema).optional()
		})
		.strict()

export const CurrencyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CurrencyScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema),
					z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			OR: z
				.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema),
					z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			symbol: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			exchange: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			projectId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
		})
		.strict()

export const UploadWhereInputSchema: z.ZodType<Prisma.UploadWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => UploadWhereInputSchema), z.lazy(() => UploadWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => UploadWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => UploadWhereInputSchema), z.lazy(() => UploadWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		title: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		mimetype: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		hash: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		alt: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		caption: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		project: z
			.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
			.optional()
	})
	.strict()

export const UploadOrderByWithRelationInputSchema: z.ZodType<Prisma.UploadOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			caption: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
		})
		.strict()

export const UploadWhereUniqueInputSchema: z.ZodType<Prisma.UploadWhereUniqueInput> = z
	.union([
		z.object({
			id: z.number().int(),
			hash: z.string()
		}),
		z.object({
			id: z.number().int()
		}),
		z.object({
			hash: z.string()
		})
	])
	.and(
		z
			.object({
				id: z.number().int().optional(),
				hash: z.string().optional(),
				AND: z
					.union([
						z.lazy(() => UploadWhereInputSchema),
						z.lazy(() => UploadWhereInputSchema).array()
					])
					.optional(),
				OR: z
					.lazy(() => UploadWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => UploadWhereInputSchema),
						z.lazy(() => UploadWhereInputSchema).array()
					])
					.optional(),
				title: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				mimetype: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				alt: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				caption: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				projectId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				project: z
					.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
					.optional()
			})
			.strict()
	)

export const UploadOrderByWithAggregationInputSchema: z.ZodType<Prisma.UploadOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			caption: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => UploadCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => UploadAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => UploadMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => UploadMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => UploadSumOrderByAggregateInputSchema).optional()
		})
		.strict()

export const UploadScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UploadScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => UploadScalarWhereWithAggregatesInputSchema),
					z.lazy(() => UploadScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			OR: z
				.lazy(() => UploadScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => UploadScalarWhereWithAggregatesInputSchema),
					z.lazy(() => UploadScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			title: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			filename: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			mimetype: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			url: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			hash: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			alt: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			caption: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			projectId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
		})
		.strict()

export const ImageWhereInputSchema: z.ZodType<Prisma.ImageWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => ImageWhereInputSchema), z.lazy(() => ImageWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => ImageWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => ImageWhereInputSchema), z.lazy(() => ImageWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		title: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		mimetype: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		hash: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		alt: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		caption: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		highlighted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		imageType: z
			.union([z.lazy(() => EnumImageTypeFilterSchema), z.lazy(() => ImageTypeSchema)])
			.optional(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		homeTypeId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		project: z
			.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
			.optional(),
		homeType: z
			.union([
				z.lazy(() => HomeTypeNullableRelationFilterSchema),
				z.lazy(() => HomeTypeWhereInputSchema)
			])
			.optional()
			.nullable()
	})
	.strict()

export const ImageOrderByWithRelationInputSchema: z.ZodType<Prisma.ImageOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			caption: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			imageType: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			homeTypeId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
			homeType: z.lazy(() => HomeTypeOrderByWithRelationInputSchema).optional()
		})
		.strict()

export const ImageWhereUniqueInputSchema: z.ZodType<Prisma.ImageWhereUniqueInput> = z
	.union([
		z.object({
			id: z.number().int(),
			filename: z.string(),
			hash: z.string()
		}),
		z.object({
			id: z.number().int(),
			filename: z.string()
		}),
		z.object({
			id: z.number().int(),
			hash: z.string()
		}),
		z.object({
			id: z.number().int()
		}),
		z.object({
			filename: z.string(),
			hash: z.string()
		}),
		z.object({
			filename: z.string()
		}),
		z.object({
			hash: z.string()
		})
	])
	.and(
		z
			.object({
				id: z.number().int().optional(),
				filename: z.string().optional(),
				hash: z.string().optional(),
				AND: z
					.union([z.lazy(() => ImageWhereInputSchema), z.lazy(() => ImageWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => ImageWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => ImageWhereInputSchema), z.lazy(() => ImageWhereInputSchema).array()])
					.optional(),
				title: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				mimetype: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				alt: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				caption: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				highlighted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				imageType: z
					.union([z.lazy(() => EnumImageTypeFilterSchema), z.lazy(() => ImageTypeSchema)])
					.optional(),
				projectId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				homeTypeId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				project: z
					.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
					.optional(),
				homeType: z
					.union([
						z.lazy(() => HomeTypeNullableRelationFilterSchema),
						z.lazy(() => HomeTypeWhereInputSchema)
					])
					.optional()
					.nullable()
			})
			.strict()
	)

export const ImageOrderByWithAggregationInputSchema: z.ZodType<Prisma.ImageOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			caption: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			imageType: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			homeTypeId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => ImageCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => ImageAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => ImageMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => ImageMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => ImageSumOrderByAggregateInputSchema).optional()
		})
		.strict()

export const ImageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ImageScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => ImageScalarWhereWithAggregatesInputSchema),
					z.lazy(() => ImageScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			OR: z
				.lazy(() => ImageScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => ImageScalarWhereWithAggregatesInputSchema),
					z.lazy(() => ImageScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			title: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			filename: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			mimetype: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			url: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			hash: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			alt: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			caption: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			highlighted: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			imageType: z
				.union([
					z.lazy(() => EnumImageTypeWithAggregatesFilterSchema),
					z.lazy(() => ImageTypeSchema)
				])
				.optional(),
			projectId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			homeTypeId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
		})
		.strict()

export const VideoWhereInputSchema: z.ZodType<Prisma.VideoWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => VideoWhereInputSchema), z.lazy(() => VideoWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => VideoWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => VideoWhereInputSchema), z.lazy(() => VideoWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		title: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		mimetype: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		hash: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		alt: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		caption: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		highlighted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		project: z
			.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
			.optional()
	})
	.strict()

export const VideoOrderByWithRelationInputSchema: z.ZodType<Prisma.VideoOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			caption: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
		})
		.strict()

export const VideoWhereUniqueInputSchema: z.ZodType<Prisma.VideoWhereUniqueInput> = z
	.union([
		z.object({
			id: z.number().int(),
			filename: z.string(),
			hash: z.string()
		}),
		z.object({
			id: z.number().int(),
			filename: z.string()
		}),
		z.object({
			id: z.number().int(),
			hash: z.string()
		}),
		z.object({
			id: z.number().int()
		}),
		z.object({
			filename: z.string(),
			hash: z.string()
		}),
		z.object({
			filename: z.string()
		}),
		z.object({
			hash: z.string()
		})
	])
	.and(
		z
			.object({
				id: z.number().int().optional(),
				filename: z.string().optional(),
				hash: z.string().optional(),
				AND: z
					.union([z.lazy(() => VideoWhereInputSchema), z.lazy(() => VideoWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => VideoWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => VideoWhereInputSchema), z.lazy(() => VideoWhereInputSchema).array()])
					.optional(),
				title: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				mimetype: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				alt: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				caption: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				highlighted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				projectId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				project: z
					.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
					.optional()
			})
			.strict()
	)

export const VideoOrderByWithAggregationInputSchema: z.ZodType<Prisma.VideoOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			caption: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => VideoCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => VideoAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => VideoMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => VideoMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => VideoSumOrderByAggregateInputSchema).optional()
		})
		.strict()

export const VideoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VideoScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => VideoScalarWhereWithAggregatesInputSchema),
					z.lazy(() => VideoScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			OR: z
				.lazy(() => VideoScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => VideoScalarWhereWithAggregatesInputSchema),
					z.lazy(() => VideoScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			title: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			filename: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			mimetype: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			url: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			hash: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			alt: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			caption: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			highlighted: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			projectId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
		})
		.strict()

export const RoomScheduleWhereInputSchema: z.ZodType<Prisma.RoomScheduleWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => RoomScheduleWhereInputSchema),
				z.lazy(() => RoomScheduleWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => RoomScheduleWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => RoomScheduleWhereInputSchema),
				z.lazy(() => RoomScheduleWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		floorType: z
			.union([z.lazy(() => EnumFloorTypeFilterSchema), z.lazy(() => FloorTypeSchema)])
			.optional(),
		areaType: z
			.union([z.lazy(() => EnumAreaTypeFilterSchema), z.lazy(() => AreaTypeSchema)])
			.optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		area: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		unit: z
			.union([z.lazy(() => EnumUnitTypeFilterSchema), z.lazy(() => UnitTypeSchema)])
			.optional(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		project: z
			.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
			.optional()
	})
	.strict()

export const RoomScheduleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoomScheduleOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			floorType: z.lazy(() => SortOrderSchema).optional(),
			areaType: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			area: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			unit: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
		})
		.strict()

export const RoomScheduleWhereUniqueInputSchema: z.ZodType<Prisma.RoomScheduleWhereUniqueInput> = z
	.object({
		id: z.number().int()
	})
	.and(
		z
			.object({
				id: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => RoomScheduleWhereInputSchema),
						z.lazy(() => RoomScheduleWhereInputSchema).array()
					])
					.optional(),
				OR: z
					.lazy(() => RoomScheduleWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => RoomScheduleWhereInputSchema),
						z.lazy(() => RoomScheduleWhereInputSchema).array()
					])
					.optional(),
				floorType: z
					.union([z.lazy(() => EnumFloorTypeFilterSchema), z.lazy(() => FloorTypeSchema)])
					.optional(),
				areaType: z
					.union([z.lazy(() => EnumAreaTypeFilterSchema), z.lazy(() => AreaTypeSchema)])
					.optional(),
				name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				area: z
					.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
					.optional()
					.nullable(),
				unit: z
					.union([z.lazy(() => EnumUnitTypeFilterSchema), z.lazy(() => UnitTypeSchema)])
					.optional(),
				projectId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				project: z
					.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
					.optional()
			})
			.strict()
	)

export const RoomScheduleOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoomScheduleOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			floorType: z.lazy(() => SortOrderSchema).optional(),
			areaType: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			area: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			unit: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => RoomScheduleCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => RoomScheduleAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => RoomScheduleMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => RoomScheduleMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => RoomScheduleSumOrderByAggregateInputSchema).optional()
		})
		.strict()

export const RoomScheduleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoomScheduleScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => RoomScheduleScalarWhereWithAggregatesInputSchema),
					z.lazy(() => RoomScheduleScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			OR: z
				.lazy(() => RoomScheduleScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => RoomScheduleScalarWhereWithAggregatesInputSchema),
					z.lazy(() => RoomScheduleScalarWhereWithAggregatesInputSchema).array()
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			floorType: z
				.union([
					z.lazy(() => EnumFloorTypeWithAggregatesFilterSchema),
					z.lazy(() => FloorTypeSchema)
				])
				.optional(),
			areaType: z
				.union([z.lazy(() => EnumAreaTypeWithAggregatesFilterSchema), z.lazy(() => AreaTypeSchema)])
				.optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			area: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			unit: z
				.union([z.lazy(() => EnumUnitTypeWithAggregatesFilterSchema), z.lazy(() => UnitTypeSchema)])
				.optional(),
			projectId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
		})
		.strict()

export const ProjectCreateInputSchema: z.ZodType<Prisma.ProjectCreateInput> = z
	.object({
		name: z.string(),
		slug: z.string(),
		icon: z.string(),
		label: z.string().optional().nullable(),
		tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
		shortDescription: z.string().optional().nullable(),
		longDescription: z.string().optional().nullable(),
		mainBenefits: z.string().optional().nullable(),
		additionalInfo: z.string().optional().nullable(),
		technicalInfo: z.string().optional().nullable(),
		usableArea: z.number().optional().nullable(),
		numPeople: z.string().optional().nullable(),
		roofType: z.lazy(() => RoofTypeSchema),
		houseType: z.lazy(() => HouseTypeSchema),
		status: z.lazy(() => StatusTypeSchema).optional(),
		index: z.number().int().optional(),
		highlighted: z.boolean().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		options: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
		currencies: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional(),
		uploads: z.lazy(() => UploadCreateNestedManyWithoutProjectInputSchema).optional(),
		images: z.lazy(() => ImageCreateNestedManyWithoutProjectInputSchema).optional(),
		videos: z.lazy(() => VideoCreateNestedManyWithoutProjectInputSchema).optional(),
		roomSchedules: z.lazy(() => RoomScheduleCreateNestedManyWithoutProjectInputSchema).optional()
	})
	.strict()

export const ProjectUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		name: z.string(),
		slug: z.string(),
		icon: z.string(),
		label: z.string().optional().nullable(),
		tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
		shortDescription: z.string().optional().nullable(),
		longDescription: z.string().optional().nullable(),
		mainBenefits: z.string().optional().nullable(),
		additionalInfo: z.string().optional().nullable(),
		technicalInfo: z.string().optional().nullable(),
		usableArea: z.number().optional().nullable(),
		numPeople: z.string().optional().nullable(),
		roofType: z.lazy(() => RoofTypeSchema),
		houseType: z.lazy(() => HouseTypeSchema),
		status: z.lazy(() => StatusTypeSchema).optional(),
		index: z.number().int().optional(),
		highlighted: z.boolean().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		options: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
		currencies: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
		uploads: z.lazy(() => UploadUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
		images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
		videos: z.lazy(() => VideoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
		roomSchedules: z
			.lazy(() => RoomScheduleUncheckedCreateNestedManyWithoutProjectInputSchema)
			.optional()
	})
	.strict()

export const ProjectUpdateInputSchema: z.ZodType<Prisma.ProjectUpdateInput> = z
	.object({
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		label: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
		shortDescription: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		longDescription: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		mainBenefits: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		additionalInfo: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		technicalInfo: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		usableArea: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		numPeople: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		roofType: z
			.union([
				z.lazy(() => RoofTypeSchema),
				z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		houseType: z
			.union([
				z.lazy(() => HouseTypeSchema),
				z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		status: z
			.union([
				z.lazy(() => StatusTypeSchema),
				z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		index: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		highlighted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		options: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
		currencies: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional(),
		uploads: z.lazy(() => UploadUpdateManyWithoutProjectNestedInputSchema).optional(),
		images: z.lazy(() => ImageUpdateManyWithoutProjectNestedInputSchema).optional(),
		videos: z.lazy(() => VideoUpdateManyWithoutProjectNestedInputSchema).optional(),
		roomSchedules: z.lazy(() => RoomScheduleUpdateManyWithoutProjectNestedInputSchema).optional()
	})
	.strict()

export const ProjectUncheckedUpdateInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateInput> = z
	.object({
		id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		label: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
		shortDescription: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		longDescription: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		mainBenefits: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		additionalInfo: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		technicalInfo: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		usableArea: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		numPeople: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		roofType: z
			.union([
				z.lazy(() => RoofTypeSchema),
				z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		houseType: z
			.union([
				z.lazy(() => HouseTypeSchema),
				z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		status: z
			.union([
				z.lazy(() => StatusTypeSchema),
				z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		index: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		highlighted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		options: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
		currencies: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
		uploads: z.lazy(() => UploadUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
		images: z.lazy(() => ImageUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
		videos: z.lazy(() => VideoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
		roomSchedules: z
			.lazy(() => RoomScheduleUncheckedUpdateManyWithoutProjectNestedInputSchema)
			.optional()
	})
	.strict()

export const ProjectCreateManyInputSchema: z.ZodType<Prisma.ProjectCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		name: z.string(),
		slug: z.string(),
		icon: z.string(),
		label: z.string().optional().nullable(),
		tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
		shortDescription: z.string().optional().nullable(),
		longDescription: z.string().optional().nullable(),
		mainBenefits: z.string().optional().nullable(),
		additionalInfo: z.string().optional().nullable(),
		technicalInfo: z.string().optional().nullable(),
		usableArea: z.number().optional().nullable(),
		numPeople: z.string().optional().nullable(),
		roofType: z.lazy(() => RoofTypeSchema),
		houseType: z.lazy(() => HouseTypeSchema),
		status: z.lazy(() => StatusTypeSchema).optional(),
		index: z.number().int().optional(),
		highlighted: z.boolean().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const ProjectUpdateManyMutationInputSchema: z.ZodType<Prisma.ProjectUpdateManyMutationInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const ProjectUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const HomeTypeCreateInputSchema: z.ZodType<Prisma.HomeTypeCreateInput> = z
	.object({
		facadeType: z
			.lazy(() => FacadeTypeSchema)
			.optional()
			.nullable(),
		variantType: z.lazy(() => VariantTypeSchema).optional(),
		dimensionType: z.lazy(() => DimensionTypeSchema).optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		images: z.lazy(() => ImageCreateNestedManyWithoutHomeTypeInputSchema).optional()
	})
	.strict()

export const HomeTypeUncheckedCreateInputSchema: z.ZodType<Prisma.HomeTypeUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		facadeType: z
			.lazy(() => FacadeTypeSchema)
			.optional()
			.nullable(),
		variantType: z.lazy(() => VariantTypeSchema).optional(),
		dimensionType: z.lazy(() => DimensionTypeSchema).optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutHomeTypeInputSchema).optional()
	})
	.strict()

export const HomeTypeUpdateInputSchema: z.ZodType<Prisma.HomeTypeUpdateInput> = z
	.object({
		facadeType: z
			.union([
				z.lazy(() => FacadeTypeSchema),
				z.lazy(() => NullableEnumFacadeTypeFieldUpdateOperationsInputSchema)
			])
			.optional()
			.nullable(),
		variantType: z
			.union([
				z.lazy(() => VariantTypeSchema),
				z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		dimensionType: z
			.union([
				z.lazy(() => DimensionTypeSchema),
				z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		images: z.lazy(() => ImageUpdateManyWithoutHomeTypeNestedInputSchema).optional()
	})
	.strict()

export const HomeTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.HomeTypeUncheckedUpdateInput> = z
	.object({
		id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		facadeType: z
			.union([
				z.lazy(() => FacadeTypeSchema),
				z.lazy(() => NullableEnumFacadeTypeFieldUpdateOperationsInputSchema)
			])
			.optional()
			.nullable(),
		variantType: z
			.union([
				z.lazy(() => VariantTypeSchema),
				z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		dimensionType: z
			.union([
				z.lazy(() => DimensionTypeSchema),
				z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		images: z.lazy(() => ImageUncheckedUpdateManyWithoutHomeTypeNestedInputSchema).optional()
	})
	.strict()

export const HomeTypeCreateManyInputSchema: z.ZodType<Prisma.HomeTypeCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		facadeType: z
			.lazy(() => FacadeTypeSchema)
			.optional()
			.nullable(),
		variantType: z.lazy(() => VariantTypeSchema).optional(),
		dimensionType: z.lazy(() => DimensionTypeSchema).optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const HomeTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.HomeTypeUpdateManyMutationInput> =
	z
		.object({
			facadeType: z
				.union([
					z.lazy(() => FacadeTypeSchema),
					z.lazy(() => NullableEnumFacadeTypeFieldUpdateOperationsInputSchema)
				])
				.optional()
				.nullable(),
			variantType: z
				.union([
					z.lazy(() => VariantTypeSchema),
					z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			dimensionType: z
				.union([
					z.lazy(() => DimensionTypeSchema),
					z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const HomeTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HomeTypeUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			facadeType: z
				.union([
					z.lazy(() => FacadeTypeSchema),
					z.lazy(() => NullableEnumFacadeTypeFieldUpdateOperationsInputSchema)
				])
				.optional()
				.nullable(),
			variantType: z
				.union([
					z.lazy(() => VariantTypeSchema),
					z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			dimensionType: z
				.union([
					z.lazy(() => DimensionTypeSchema),
					z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const OptionCreateInputSchema: z.ZodType<Prisma.OptionCreateInput> = z
	.object({
		name: z.string(),
		description: z.string().optional().nullable(),
		price: z.number().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		project: z.lazy(() => ProjectCreateNestedOneWithoutOptionsInputSchema)
	})
	.strict()

export const OptionUncheckedCreateInputSchema: z.ZodType<Prisma.OptionUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		name: z.string(),
		description: z.string().optional().nullable(),
		price: z.number().optional().nullable(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const OptionUpdateInputSchema: z.ZodType<Prisma.OptionUpdateInput> = z
	.object({
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		description: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		price: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		project: z.lazy(() => ProjectUpdateOneRequiredWithoutOptionsNestedInputSchema).optional()
	})
	.strict()

export const OptionUncheckedUpdateInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateInput> = z
	.object({
		id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		description: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		price: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		projectId: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional()
	})
	.strict()

export const OptionCreateManyInputSchema: z.ZodType<Prisma.OptionCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		name: z.string(),
		description: z.string().optional().nullable(),
		price: z.number().optional().nullable(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const OptionUpdateManyMutationInputSchema: z.ZodType<Prisma.OptionUpdateManyMutationInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			description: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			price: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const OptionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			description: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			price: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const CurrencyCreateInputSchema: z.ZodType<Prisma.CurrencyCreateInput> = z
	.object({
		name: z.string(),
		symbol: z.string(),
		exchange: z.number().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		project: z.lazy(() => ProjectCreateNestedOneWithoutCurrenciesInputSchema)
	})
	.strict()

export const CurrencyUncheckedCreateInputSchema: z.ZodType<Prisma.CurrencyUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		name: z.string(),
		symbol: z.string(),
		exchange: z.number().optional().nullable(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const CurrencyUpdateInputSchema: z.ZodType<Prisma.CurrencyUpdateInput> = z
	.object({
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		symbol: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		exchange: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		project: z.lazy(() => ProjectUpdateOneRequiredWithoutCurrenciesNestedInputSchema).optional()
	})
	.strict()

export const CurrencyUncheckedUpdateInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateInput> = z
	.object({
		id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		symbol: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		exchange: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		projectId: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional()
	})
	.strict()

export const CurrencyCreateManyInputSchema: z.ZodType<Prisma.CurrencyCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		name: z.string(),
		symbol: z.string(),
		exchange: z.number().optional().nullable(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const CurrencyUpdateManyMutationInputSchema: z.ZodType<Prisma.CurrencyUpdateManyMutationInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			symbol: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			exchange: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const CurrencyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			symbol: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			exchange: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const UploadCreateInputSchema: z.ZodType<Prisma.UploadCreateInput> = z
	.object({
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string().optional().nullable(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		project: z.lazy(() => ProjectCreateNestedOneWithoutUploadsInputSchema)
	})
	.strict()

export const UploadUncheckedCreateInputSchema: z.ZodType<Prisma.UploadUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string().optional().nullable(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const UploadUpdateInputSchema: z.ZodType<Prisma.UploadUpdateInput> = z
	.object({
		title: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		filename: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		mimetype: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		alt: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		caption: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		project: z.lazy(() => ProjectUpdateOneRequiredWithoutUploadsNestedInputSchema).optional()
	})
	.strict()

export const UploadUncheckedUpdateInputSchema: z.ZodType<Prisma.UploadUncheckedUpdateInput> = z
	.object({
		id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		title: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		filename: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		mimetype: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		alt: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		caption: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		projectId: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional()
	})
	.strict()

export const UploadCreateManyInputSchema: z.ZodType<Prisma.UploadCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string().optional().nullable(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const UploadUpdateManyMutationInputSchema: z.ZodType<Prisma.UploadUpdateManyMutationInput> =
	z
		.object({
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const UploadUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UploadUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const ImageCreateInputSchema: z.ZodType<Prisma.ImageCreateInput> = z
	.object({
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		imageType: z.lazy(() => ImageTypeSchema),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		project: z.lazy(() => ProjectCreateNestedOneWithoutImagesInputSchema),
		homeType: z.lazy(() => HomeTypeCreateNestedOneWithoutImagesInputSchema).optional()
	})
	.strict()

export const ImageUncheckedCreateInputSchema: z.ZodType<Prisma.ImageUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		imageType: z.lazy(() => ImageTypeSchema),
		projectId: z.number().int(),
		homeTypeId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const ImageUpdateInputSchema: z.ZodType<Prisma.ImageUpdateInput> = z
	.object({
		title: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		filename: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		mimetype: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		alt: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		caption: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		highlighted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		imageType: z
			.union([
				z.lazy(() => ImageTypeSchema),
				z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		project: z.lazy(() => ProjectUpdateOneRequiredWithoutImagesNestedInputSchema).optional(),
		homeType: z.lazy(() => HomeTypeUpdateOneWithoutImagesNestedInputSchema).optional()
	})
	.strict()

export const ImageUncheckedUpdateInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateInput> = z
	.object({
		id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		title: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		filename: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		mimetype: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		alt: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		caption: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		highlighted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		imageType: z
			.union([
				z.lazy(() => ImageTypeSchema),
				z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		projectId: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		homeTypeId: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional()
	})
	.strict()

export const ImageCreateManyInputSchema: z.ZodType<Prisma.ImageCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		imageType: z.lazy(() => ImageTypeSchema),
		projectId: z.number().int(),
		homeTypeId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const ImageUpdateManyMutationInputSchema: z.ZodType<Prisma.ImageUpdateManyMutationInput> = z
	.object({
		title: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		filename: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		mimetype: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		alt: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		caption: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		highlighted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		imageType: z
			.union([
				z.lazy(() => ImageTypeSchema),
				z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional()
	})
	.strict()

export const ImageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			imageType: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			homeTypeId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const VideoCreateInputSchema: z.ZodType<Prisma.VideoCreateInput> = z
	.object({
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		project: z.lazy(() => ProjectCreateNestedOneWithoutVideosInputSchema)
	})
	.strict()

export const VideoUncheckedCreateInputSchema: z.ZodType<Prisma.VideoUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const VideoUpdateInputSchema: z.ZodType<Prisma.VideoUpdateInput> = z
	.object({
		title: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		filename: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		mimetype: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		alt: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		caption: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		highlighted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		project: z.lazy(() => ProjectUpdateOneRequiredWithoutVideosNestedInputSchema).optional()
	})
	.strict()

export const VideoUncheckedUpdateInputSchema: z.ZodType<Prisma.VideoUncheckedUpdateInput> = z
	.object({
		id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		title: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		filename: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		mimetype: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		alt: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		caption: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		highlighted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		projectId: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional()
	})
	.strict()

export const VideoCreateManyInputSchema: z.ZodType<Prisma.VideoCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const VideoUpdateManyMutationInputSchema: z.ZodType<Prisma.VideoUpdateManyMutationInput> = z
	.object({
		title: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		filename: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		mimetype: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		alt: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		caption: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		highlighted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional()
	})
	.strict()

export const VideoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VideoUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const RoomScheduleCreateInputSchema: z.ZodType<Prisma.RoomScheduleCreateInput> = z
	.object({
		floorType: z.lazy(() => FloorTypeSchema),
		areaType: z.lazy(() => AreaTypeSchema),
		name: z.string(),
		area: z.number().optional().nullable(),
		unit: z.lazy(() => UnitTypeSchema).optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		project: z.lazy(() => ProjectCreateNestedOneWithoutRoomSchedulesInputSchema)
	})
	.strict()

export const RoomScheduleUncheckedCreateInputSchema: z.ZodType<Prisma.RoomScheduleUncheckedCreateInput> =
	z
		.object({
			id: z.number().int().optional(),
			floorType: z.lazy(() => FloorTypeSchema),
			areaType: z.lazy(() => AreaTypeSchema),
			name: z.string(),
			area: z.number().optional().nullable(),
			unit: z.lazy(() => UnitTypeSchema).optional(),
			projectId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const RoomScheduleUpdateInputSchema: z.ZodType<Prisma.RoomScheduleUpdateInput> = z
	.object({
		floorType: z
			.union([
				z.lazy(() => FloorTypeSchema),
				z.lazy(() => EnumFloorTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		areaType: z
			.union([
				z.lazy(() => AreaTypeSchema),
				z.lazy(() => EnumAreaTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		area: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		unit: z
			.union([
				z.lazy(() => UnitTypeSchema),
				z.lazy(() => EnumUnitTypeFieldUpdateOperationsInputSchema)
			])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		project: z.lazy(() => ProjectUpdateOneRequiredWithoutRoomSchedulesNestedInputSchema).optional()
	})
	.strict()

export const RoomScheduleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoomScheduleUncheckedUpdateInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			floorType: z
				.union([
					z.lazy(() => FloorTypeSchema),
					z.lazy(() => EnumFloorTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			areaType: z
				.union([
					z.lazy(() => AreaTypeSchema),
					z.lazy(() => EnumAreaTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			area: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			unit: z
				.union([
					z.lazy(() => UnitTypeSchema),
					z.lazy(() => EnumUnitTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const RoomScheduleCreateManyInputSchema: z.ZodType<Prisma.RoomScheduleCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		floorType: z.lazy(() => FloorTypeSchema),
		areaType: z.lazy(() => AreaTypeSchema),
		name: z.string(),
		area: z.number().optional().nullable(),
		unit: z.lazy(() => UnitTypeSchema).optional(),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const RoomScheduleUpdateManyMutationInputSchema: z.ZodType<Prisma.RoomScheduleUpdateManyMutationInput> =
	z
		.object({
			floorType: z
				.union([
					z.lazy(() => FloorTypeSchema),
					z.lazy(() => EnumFloorTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			areaType: z
				.union([
					z.lazy(() => AreaTypeSchema),
					z.lazy(() => EnumAreaTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			area: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			unit: z
				.union([
					z.lazy(() => UnitTypeSchema),
					z.lazy(() => EnumUnitTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const RoomScheduleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoomScheduleUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			floorType: z
				.union([
					z.lazy(() => FloorTypeSchema),
					z.lazy(() => EnumFloorTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			areaType: z
				.union([
					z.lazy(() => AreaTypeSchema),
					z.lazy(() => EnumAreaTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			area: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			unit: z
				.union([
					z.lazy(() => UnitTypeSchema),
					z.lazy(() => EnumUnitTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z
	.object({
		equals: z.number().optional(),
		in: z.number().array().optional(),
		notIn: z.number().array().optional(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional()
	})
	.strict()

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
	.object({
		equals: z.string().optional(),
		in: z.string().array().optional(),
		notIn: z.string().array().optional(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		mode: z.lazy(() => QueryModeSchema).optional(),
		not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional()
	})
	.strict()

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z
	.object({
		equals: z.string().optional().nullable(),
		in: z.string().array().optional().nullable(),
		notIn: z.string().array().optional().nullable(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		mode: z.lazy(() => QueryModeSchema).optional(),
		not: z
			.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
			.optional()
			.nullable()
	})
	.strict()

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z
	.object({
		equals: z.string().array().optional().nullable(),
		has: z.string().optional().nullable(),
		hasEvery: z.string().array().optional(),
		hasSome: z.string().array().optional(),
		isEmpty: z.boolean().optional()
	})
	.strict()

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z
	.object({
		equals: z.number().optional().nullable(),
		in: z.number().array().optional().nullable(),
		notIn: z.number().array().optional().nullable(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z
			.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
			.optional()
			.nullable()
	})
	.strict()

export const EnumRoofTypeFilterSchema: z.ZodType<Prisma.EnumRoofTypeFilter> = z
	.object({
		equals: z.lazy(() => RoofTypeSchema).optional(),
		in: z
			.lazy(() => RoofTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => RoofTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => RoofTypeSchema), z.lazy(() => NestedEnumRoofTypeFilterSchema)])
			.optional()
	})
	.strict()

export const EnumHouseTypeFilterSchema: z.ZodType<Prisma.EnumHouseTypeFilter> = z
	.object({
		equals: z.lazy(() => HouseTypeSchema).optional(),
		in: z
			.lazy(() => HouseTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => HouseTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => HouseTypeSchema), z.lazy(() => NestedEnumHouseTypeFilterSchema)])
			.optional()
	})
	.strict()

export const EnumStatusTypeFilterSchema: z.ZodType<Prisma.EnumStatusTypeFilter> = z
	.object({
		equals: z.lazy(() => StatusTypeSchema).optional(),
		in: z
			.lazy(() => StatusTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => StatusTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => StatusTypeSchema), z.lazy(() => NestedEnumStatusTypeFilterSchema)])
			.optional()
	})
	.strict()

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
	.object({
		equals: z.boolean().optional(),
		not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional()
	})
	.strict()

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
	.object({
		equals: z.coerce.date().optional(),
		in: z.coerce.date().array().optional(),
		notIn: z.coerce.date().array().optional(),
		lt: z.coerce.date().optional(),
		lte: z.coerce.date().optional(),
		gt: z.coerce.date().optional(),
		gte: z.coerce.date().optional(),
		not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional()
	})
	.strict()

export const OptionListRelationFilterSchema: z.ZodType<Prisma.OptionListRelationFilter> = z
	.object({
		every: z.lazy(() => OptionWhereInputSchema).optional(),
		some: z.lazy(() => OptionWhereInputSchema).optional(),
		none: z.lazy(() => OptionWhereInputSchema).optional()
	})
	.strict()

export const CurrencyListRelationFilterSchema: z.ZodType<Prisma.CurrencyListRelationFilter> = z
	.object({
		every: z.lazy(() => CurrencyWhereInputSchema).optional(),
		some: z.lazy(() => CurrencyWhereInputSchema).optional(),
		none: z.lazy(() => CurrencyWhereInputSchema).optional()
	})
	.strict()

export const UploadListRelationFilterSchema: z.ZodType<Prisma.UploadListRelationFilter> = z
	.object({
		every: z.lazy(() => UploadWhereInputSchema).optional(),
		some: z.lazy(() => UploadWhereInputSchema).optional(),
		none: z.lazy(() => UploadWhereInputSchema).optional()
	})
	.strict()

export const ImageListRelationFilterSchema: z.ZodType<Prisma.ImageListRelationFilter> = z
	.object({
		every: z.lazy(() => ImageWhereInputSchema).optional(),
		some: z.lazy(() => ImageWhereInputSchema).optional(),
		none: z.lazy(() => ImageWhereInputSchema).optional()
	})
	.strict()

export const VideoListRelationFilterSchema: z.ZodType<Prisma.VideoListRelationFilter> = z
	.object({
		every: z.lazy(() => VideoWhereInputSchema).optional(),
		some: z.lazy(() => VideoWhereInputSchema).optional(),
		none: z.lazy(() => VideoWhereInputSchema).optional()
	})
	.strict()

export const RoomScheduleListRelationFilterSchema: z.ZodType<Prisma.RoomScheduleListRelationFilter> =
	z
		.object({
			every: z.lazy(() => RoomScheduleWhereInputSchema).optional(),
			some: z.lazy(() => RoomScheduleWhereInputSchema).optional(),
			none: z.lazy(() => RoomScheduleWhereInputSchema).optional()
		})
		.strict()

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z
	.object({
		sort: z.lazy(() => SortOrderSchema),
		nulls: z.lazy(() => NullsOrderSchema).optional()
	})
	.strict()

export const OptionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OptionOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const CurrencyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CurrencyOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const UploadOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UploadOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ImageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ImageOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const VideoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VideoOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const RoomScheduleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoomScheduleOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ProjectCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			slug: z.lazy(() => SortOrderSchema).optional(),
			icon: z.lazy(() => SortOrderSchema).optional(),
			label: z.lazy(() => SortOrderSchema).optional(),
			tags: z.lazy(() => SortOrderSchema).optional(),
			shortDescription: z.lazy(() => SortOrderSchema).optional(),
			longDescription: z.lazy(() => SortOrderSchema).optional(),
			mainBenefits: z.lazy(() => SortOrderSchema).optional(),
			additionalInfo: z.lazy(() => SortOrderSchema).optional(),
			technicalInfo: z.lazy(() => SortOrderSchema).optional(),
			usableArea: z.lazy(() => SortOrderSchema).optional(),
			numPeople: z.lazy(() => SortOrderSchema).optional(),
			roofType: z.lazy(() => SortOrderSchema).optional(),
			houseType: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			index: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ProjectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			usableArea: z.lazy(() => SortOrderSchema).optional(),
			index: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ProjectMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			slug: z.lazy(() => SortOrderSchema).optional(),
			icon: z.lazy(() => SortOrderSchema).optional(),
			label: z.lazy(() => SortOrderSchema).optional(),
			shortDescription: z.lazy(() => SortOrderSchema).optional(),
			longDescription: z.lazy(() => SortOrderSchema).optional(),
			mainBenefits: z.lazy(() => SortOrderSchema).optional(),
			additionalInfo: z.lazy(() => SortOrderSchema).optional(),
			technicalInfo: z.lazy(() => SortOrderSchema).optional(),
			usableArea: z.lazy(() => SortOrderSchema).optional(),
			numPeople: z.lazy(() => SortOrderSchema).optional(),
			roofType: z.lazy(() => SortOrderSchema).optional(),
			houseType: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			index: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ProjectMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			slug: z.lazy(() => SortOrderSchema).optional(),
			icon: z.lazy(() => SortOrderSchema).optional(),
			label: z.lazy(() => SortOrderSchema).optional(),
			shortDescription: z.lazy(() => SortOrderSchema).optional(),
			longDescription: z.lazy(() => SortOrderSchema).optional(),
			mainBenefits: z.lazy(() => SortOrderSchema).optional(),
			additionalInfo: z.lazy(() => SortOrderSchema).optional(),
			technicalInfo: z.lazy(() => SortOrderSchema).optional(),
			usableArea: z.lazy(() => SortOrderSchema).optional(),
			numPeople: z.lazy(() => SortOrderSchema).optional(),
			roofType: z.lazy(() => SortOrderSchema).optional(),
			houseType: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			index: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ProjectSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			usableArea: z.lazy(() => SortOrderSchema).optional(),
			index: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z
	.object({
		equals: z.number().optional(),
		in: z.number().array().optional(),
		notIn: z.number().array().optional(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
		_count: z.lazy(() => NestedIntFilterSchema).optional(),
		_avg: z.lazy(() => NestedFloatFilterSchema).optional(),
		_sum: z.lazy(() => NestedIntFilterSchema).optional(),
		_min: z.lazy(() => NestedIntFilterSchema).optional(),
		_max: z.lazy(() => NestedIntFilterSchema).optional()
	})
	.strict()

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z
	.object({
		equals: z.string().optional(),
		in: z.string().array().optional(),
		notIn: z.string().array().optional(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		mode: z.lazy(() => QueryModeSchema).optional(),
		not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
		_count: z.lazy(() => NestedIntFilterSchema).optional(),
		_min: z.lazy(() => NestedStringFilterSchema).optional(),
		_max: z.lazy(() => NestedStringFilterSchema).optional()
	})
	.strict()

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.string().optional().nullable(),
			in: z.string().array().optional().nullable(),
			notIn: z.string().array().optional().nullable(),
			lt: z.string().optional(),
			lte: z.string().optional(),
			gt: z.string().optional(),
			gte: z.string().optional(),
			contains: z.string().optional(),
			startsWith: z.string().optional(),
			endsWith: z.string().optional(),
			mode: z.lazy(() => QueryModeSchema).optional(),
			not: z
				.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedStringNullableFilterSchema).optional()
		})
		.strict()

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.number().optional().nullable(),
			in: z.number().array().optional().nullable(),
			notIn: z.number().array().optional().nullable(),
			lt: z.number().optional(),
			lte: z.number().optional(),
			gt: z.number().optional(),
			gte: z.number().optional(),
			not: z
				.union([z.number(), z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
		})
		.strict()

export const EnumRoofTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoofTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => RoofTypeSchema).optional(),
			in: z
				.lazy(() => RoofTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => RoofTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => NestedEnumRoofTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumRoofTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumRoofTypeFilterSchema).optional()
		})
		.strict()

export const EnumHouseTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumHouseTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => HouseTypeSchema).optional(),
			in: z
				.lazy(() => HouseTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => HouseTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => NestedEnumHouseTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumHouseTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumHouseTypeFilterSchema).optional()
		})
		.strict()

export const EnumStatusTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumStatusTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => StatusTypeSchema).optional(),
			in: z
				.lazy(() => StatusTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => StatusTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => NestedEnumStatusTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumStatusTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumStatusTypeFilterSchema).optional()
		})
		.strict()

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z
	.object({
		equals: z.boolean().optional(),
		not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
		_count: z.lazy(() => NestedIntFilterSchema).optional(),
		_min: z.lazy(() => NestedBoolFilterSchema).optional(),
		_max: z.lazy(() => NestedBoolFilterSchema).optional()
	})
	.strict()

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z
	.object({
		equals: z.coerce.date().optional(),
		in: z.coerce.date().array().optional(),
		notIn: z.coerce.date().array().optional(),
		lt: z.coerce.date().optional(),
		lte: z.coerce.date().optional(),
		gt: z.coerce.date().optional(),
		gte: z.coerce.date().optional(),
		not: z
			.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)])
			.optional(),
		_count: z.lazy(() => NestedIntFilterSchema).optional(),
		_min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
		_max: z.lazy(() => NestedDateTimeFilterSchema).optional()
	})
	.strict()

export const EnumFacadeTypeNullableFilterSchema: z.ZodType<Prisma.EnumFacadeTypeNullableFilter> = z
	.object({
		equals: z
			.lazy(() => FacadeTypeSchema)
			.optional()
			.nullable(),
		in: z
			.lazy(() => FacadeTypeSchema)
			.array()
			.optional()
			.nullable(),
		notIn: z
			.lazy(() => FacadeTypeSchema)
			.array()
			.optional()
			.nullable(),
		not: z
			.union([
				z.lazy(() => FacadeTypeSchema),
				z.lazy(() => NestedEnumFacadeTypeNullableFilterSchema)
			])
			.optional()
			.nullable()
	})
	.strict()

export const EnumVariantTypeFilterSchema: z.ZodType<Prisma.EnumVariantTypeFilter> = z
	.object({
		equals: z.lazy(() => VariantTypeSchema).optional(),
		in: z
			.lazy(() => VariantTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => VariantTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => VariantTypeSchema), z.lazy(() => NestedEnumVariantTypeFilterSchema)])
			.optional()
	})
	.strict()

export const EnumDimensionTypeFilterSchema: z.ZodType<Prisma.EnumDimensionTypeFilter> = z
	.object({
		equals: z.lazy(() => DimensionTypeSchema).optional(),
		in: z
			.lazy(() => DimensionTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => DimensionTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => DimensionTypeSchema), z.lazy(() => NestedEnumDimensionTypeFilterSchema)])
			.optional()
	})
	.strict()

export const HomeTypeFacadeTypeVariantTypeDimensionTypeCompoundUniqueInputSchema: z.ZodType<Prisma.HomeTypeFacadeTypeVariantTypeDimensionTypeCompoundUniqueInput> =
	z
		.object({
			facadeType: z.lazy(() => FacadeTypeSchema),
			variantType: z.lazy(() => VariantTypeSchema),
			dimensionType: z.lazy(() => DimensionTypeSchema)
		})
		.strict()

export const HomeTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.HomeTypeCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			facadeType: z.lazy(() => SortOrderSchema).optional(),
			variantType: z.lazy(() => SortOrderSchema).optional(),
			dimensionType: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const HomeTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.HomeTypeAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const HomeTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HomeTypeMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			facadeType: z.lazy(() => SortOrderSchema).optional(),
			variantType: z.lazy(() => SortOrderSchema).optional(),
			dimensionType: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const HomeTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.HomeTypeMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			facadeType: z.lazy(() => SortOrderSchema).optional(),
			variantType: z.lazy(() => SortOrderSchema).optional(),
			dimensionType: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const HomeTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.HomeTypeSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const EnumFacadeTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFacadeTypeNullableWithAggregatesFilter> =
	z
		.object({
			equals: z
				.lazy(() => FacadeTypeSchema)
				.optional()
				.nullable(),
			in: z
				.lazy(() => FacadeTypeSchema)
				.array()
				.optional()
				.nullable(),
			notIn: z
				.lazy(() => FacadeTypeSchema)
				.array()
				.optional()
				.nullable(),
			not: z
				.union([
					z.lazy(() => FacadeTypeSchema),
					z.lazy(() => NestedEnumFacadeTypeNullableWithAggregatesFilterSchema)
				])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumFacadeTypeNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumFacadeTypeNullableFilterSchema).optional()
		})
		.strict()

export const EnumVariantTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumVariantTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => VariantTypeSchema).optional(),
			in: z
				.lazy(() => VariantTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => VariantTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => VariantTypeSchema),
					z.lazy(() => NestedEnumVariantTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumVariantTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumVariantTypeFilterSchema).optional()
		})
		.strict()

export const EnumDimensionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDimensionTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => DimensionTypeSchema).optional(),
			in: z
				.lazy(() => DimensionTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => DimensionTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => DimensionTypeSchema),
					z.lazy(() => NestedEnumDimensionTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumDimensionTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumDimensionTypeFilterSchema).optional()
		})
		.strict()

export const ProjectRelationFilterSchema: z.ZodType<Prisma.ProjectRelationFilter> = z
	.object({
		is: z.lazy(() => ProjectWhereInputSchema).optional(),
		isNot: z.lazy(() => ProjectWhereInputSchema).optional()
	})
	.strict()

export const OptionCountOrderByAggregateInputSchema: z.ZodType<Prisma.OptionCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const OptionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OptionAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const OptionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OptionMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const OptionMinOrderByAggregateInputSchema: z.ZodType<Prisma.OptionMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const OptionSumOrderByAggregateInputSchema: z.ZodType<Prisma.OptionSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const CurrencyCountOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencyCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			symbol: z.lazy(() => SortOrderSchema).optional(),
			exchange: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const CurrencyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencyAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			exchange: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const CurrencyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencyMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			symbol: z.lazy(() => SortOrderSchema).optional(),
			exchange: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const CurrencyMinOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencyMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			symbol: z.lazy(() => SortOrderSchema).optional(),
			exchange: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const CurrencySumOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencySumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			exchange: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const UploadCountOrderByAggregateInputSchema: z.ZodType<Prisma.UploadCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const UploadAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UploadAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const UploadMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UploadMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const UploadMinOrderByAggregateInputSchema: z.ZodType<Prisma.UploadMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const UploadSumOrderByAggregateInputSchema: z.ZodType<Prisma.UploadSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const EnumImageTypeFilterSchema: z.ZodType<Prisma.EnumImageTypeFilter> = z
	.object({
		equals: z.lazy(() => ImageTypeSchema).optional(),
		in: z
			.lazy(() => ImageTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => ImageTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => ImageTypeSchema), z.lazy(() => NestedEnumImageTypeFilterSchema)])
			.optional()
	})
	.strict()

export const HomeTypeNullableRelationFilterSchema: z.ZodType<Prisma.HomeTypeNullableRelationFilter> =
	z
		.object({
			is: z
				.lazy(() => HomeTypeWhereInputSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => HomeTypeWhereInputSchema)
				.optional()
				.nullable()
		})
		.strict()

export const ImageCountOrderByAggregateInputSchema: z.ZodType<Prisma.ImageCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			imageType: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			homeTypeId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ImageAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ImageAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			homeTypeId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ImageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ImageMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			imageType: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			homeTypeId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ImageMinOrderByAggregateInputSchema: z.ZodType<Prisma.ImageMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			imageType: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			homeTypeId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const ImageSumOrderByAggregateInputSchema: z.ZodType<Prisma.ImageSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			homeTypeId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const EnumImageTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumImageTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => ImageTypeSchema).optional(),
			in: z
				.lazy(() => ImageTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => ImageTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => NestedEnumImageTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumImageTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumImageTypeFilterSchema).optional()
		})
		.strict()

export const VideoCountOrderByAggregateInputSchema: z.ZodType<Prisma.VideoCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const VideoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VideoAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const VideoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VideoMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const VideoMinOrderByAggregateInputSchema: z.ZodType<Prisma.VideoMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			filename: z.lazy(() => SortOrderSchema).optional(),
			mimetype: z.lazy(() => SortOrderSchema).optional(),
			url: z.lazy(() => SortOrderSchema).optional(),
			hash: z.lazy(() => SortOrderSchema).optional(),
			alt: z.lazy(() => SortOrderSchema).optional(),
			caption: z.lazy(() => SortOrderSchema).optional(),
			highlighted: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const VideoSumOrderByAggregateInputSchema: z.ZodType<Prisma.VideoSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const EnumFloorTypeFilterSchema: z.ZodType<Prisma.EnumFloorTypeFilter> = z
	.object({
		equals: z.lazy(() => FloorTypeSchema).optional(),
		in: z
			.lazy(() => FloorTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => FloorTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => FloorTypeSchema), z.lazy(() => NestedEnumFloorTypeFilterSchema)])
			.optional()
	})
	.strict()

export const EnumAreaTypeFilterSchema: z.ZodType<Prisma.EnumAreaTypeFilter> = z
	.object({
		equals: z.lazy(() => AreaTypeSchema).optional(),
		in: z
			.lazy(() => AreaTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => AreaTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => AreaTypeSchema), z.lazy(() => NestedEnumAreaTypeFilterSchema)])
			.optional()
	})
	.strict()

export const EnumUnitTypeFilterSchema: z.ZodType<Prisma.EnumUnitTypeFilter> = z
	.object({
		equals: z.lazy(() => UnitTypeSchema).optional(),
		in: z
			.lazy(() => UnitTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => UnitTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => UnitTypeSchema), z.lazy(() => NestedEnumUnitTypeFilterSchema)])
			.optional()
	})
	.strict()

export const RoomScheduleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoomScheduleCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			floorType: z.lazy(() => SortOrderSchema).optional(),
			areaType: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			area: z.lazy(() => SortOrderSchema).optional(),
			unit: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const RoomScheduleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoomScheduleAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			area: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const RoomScheduleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoomScheduleMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			floorType: z.lazy(() => SortOrderSchema).optional(),
			areaType: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			area: z.lazy(() => SortOrderSchema).optional(),
			unit: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const RoomScheduleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoomScheduleMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			floorType: z.lazy(() => SortOrderSchema).optional(),
			areaType: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			area: z.lazy(() => SortOrderSchema).optional(),
			unit: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const RoomScheduleSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoomScheduleSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			area: z.lazy(() => SortOrderSchema).optional(),
			projectId: z.lazy(() => SortOrderSchema).optional()
		})
		.strict()

export const EnumFloorTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFloorTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => FloorTypeSchema).optional(),
			in: z
				.lazy(() => FloorTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => FloorTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => FloorTypeSchema),
					z.lazy(() => NestedEnumFloorTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumFloorTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumFloorTypeFilterSchema).optional()
		})
		.strict()

export const EnumAreaTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAreaTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => AreaTypeSchema).optional(),
			in: z
				.lazy(() => AreaTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => AreaTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => AreaTypeSchema),
					z.lazy(() => NestedEnumAreaTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumAreaTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumAreaTypeFilterSchema).optional()
		})
		.strict()

export const EnumUnitTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUnitTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => UnitTypeSchema).optional(),
			in: z
				.lazy(() => UnitTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => UnitTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => UnitTypeSchema),
					z.lazy(() => NestedEnumUnitTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumUnitTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumUnitTypeFilterSchema).optional()
		})
		.strict()

export const ProjectCreatetagsInputSchema: z.ZodType<Prisma.ProjectCreatetagsInput> = z
	.object({
		set: z.string().array()
	})
	.strict()

export const OptionCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.OptionCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => OptionCreateWithoutProjectInputSchema),
					z.lazy(() => OptionCreateWithoutProjectInputSchema).array(),
					z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => OptionCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const CurrencyCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => CurrencyCreateWithoutProjectInputSchema),
					z.lazy(() => CurrencyCreateWithoutProjectInputSchema).array(),
					z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => CurrencyCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const UploadCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.UploadCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UploadCreateWithoutProjectInputSchema),
					z.lazy(() => UploadCreateWithoutProjectInputSchema).array(),
					z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UploadCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => UploadCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => UploadCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const ImageCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ImageCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ImageCreateWithoutProjectInputSchema),
					z.lazy(() => ImageCreateWithoutProjectInputSchema).array(),
					z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ImageCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => ImageCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => ImageCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const VideoCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.VideoCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => VideoCreateWithoutProjectInputSchema),
					z.lazy(() => VideoCreateWithoutProjectInputSchema).array(),
					z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => VideoCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => VideoCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => VideoCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const RoomScheduleCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema).array(),
					z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => RoomScheduleCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => RoomScheduleCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const OptionUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.OptionUncheckedCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => OptionCreateWithoutProjectInputSchema),
					z.lazy(() => OptionCreateWithoutProjectInputSchema).array(),
					z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => OptionCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUncheckedCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => CurrencyCreateWithoutProjectInputSchema),
					z.lazy(() => CurrencyCreateWithoutProjectInputSchema).array(),
					z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => CurrencyCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const UploadUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.UploadUncheckedCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UploadCreateWithoutProjectInputSchema),
					z.lazy(() => UploadCreateWithoutProjectInputSchema).array(),
					z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UploadCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => UploadCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => UploadCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const ImageUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ImageCreateWithoutProjectInputSchema),
					z.lazy(() => ImageCreateWithoutProjectInputSchema).array(),
					z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ImageCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => ImageCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => ImageCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const VideoUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.VideoUncheckedCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => VideoCreateWithoutProjectInputSchema),
					z.lazy(() => VideoCreateWithoutProjectInputSchema).array(),
					z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => VideoCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => VideoCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => VideoCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const RoomScheduleUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleUncheckedCreateNestedManyWithoutProjectInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema).array(),
					z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => RoomScheduleCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => RoomScheduleCreateManyProjectInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
	z
		.object({
			set: z.string().optional()
		})
		.strict()

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
	z
		.object({
			set: z.string().optional().nullable()
		})
		.strict()

export const ProjectUpdatetagsInputSchema: z.ZodType<Prisma.ProjectUpdatetagsInput> = z
	.object({
		set: z.string().array().optional(),
		push: z.union([z.string(), z.string().array()]).optional()
	})
	.strict()

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> =
	z
		.object({
			set: z.number().optional().nullable(),
			increment: z.number().optional(),
			decrement: z.number().optional(),
			multiply: z.number().optional(),
			divide: z.number().optional()
		})
		.strict()

export const EnumRoofTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoofTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => RoofTypeSchema).optional()
		})
		.strict()

export const EnumHouseTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumHouseTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => HouseTypeSchema).optional()
		})
		.strict()

export const EnumStatusTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStatusTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => StatusTypeSchema).optional()
		})
		.strict()

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
	z
		.object({
			set: z.number().optional(),
			increment: z.number().optional(),
			decrement: z.number().optional(),
			multiply: z.number().optional(),
			divide: z.number().optional()
		})
		.strict()

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
	z
		.object({
			set: z.boolean().optional()
		})
		.strict()

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.coerce.date().optional()
		})
		.strict()

export const OptionUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.OptionUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => OptionCreateWithoutProjectInputSchema),
					z.lazy(() => OptionCreateWithoutProjectInputSchema).array(),
					z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => OptionUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => OptionUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => OptionCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => OptionUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => OptionUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => OptionUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => OptionUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => OptionScalarWhereInputSchema),
					z.lazy(() => OptionScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const CurrencyUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.CurrencyUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => CurrencyCreateWithoutProjectInputSchema),
					z.lazy(() => CurrencyCreateWithoutProjectInputSchema).array(),
					z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => CurrencyCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => CurrencyUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => CurrencyUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => CurrencyScalarWhereInputSchema),
					z.lazy(() => CurrencyScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const UploadUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.UploadUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UploadCreateWithoutProjectInputSchema),
					z.lazy(() => UploadCreateWithoutProjectInputSchema).array(),
					z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UploadCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => UploadCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => UploadUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => UploadUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => UploadCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => UploadUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => UploadUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => UploadUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => UploadUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => UploadScalarWhereInputSchema),
					z.lazy(() => UploadScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const ImageUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ImageUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ImageCreateWithoutProjectInputSchema),
					z.lazy(() => ImageCreateWithoutProjectInputSchema).array(),
					z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ImageCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => ImageCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => ImageUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => ImageUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => ImageCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => ImageUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => ImageUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => ImageUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => ImageUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => ImageScalarWhereInputSchema),
					z.lazy(() => ImageScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const VideoUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.VideoUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => VideoCreateWithoutProjectInputSchema),
					z.lazy(() => VideoCreateWithoutProjectInputSchema).array(),
					z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => VideoCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => VideoCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => VideoUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => VideoUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => VideoCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => VideoUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => VideoUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => VideoUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => VideoUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => VideoScalarWhereInputSchema),
					z.lazy(() => VideoScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const RoomScheduleUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RoomScheduleUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema).array(),
					z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => RoomScheduleCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => RoomScheduleUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => RoomScheduleCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => RoomScheduleUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => RoomScheduleUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => RoomScheduleScalarWhereInputSchema),
					z.lazy(() => RoomScheduleScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const OptionUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => OptionCreateWithoutProjectInputSchema),
					z.lazy(() => OptionCreateWithoutProjectInputSchema).array(),
					z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => OptionUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => OptionUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => OptionCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => OptionWhereUniqueInputSchema),
					z.lazy(() => OptionWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => OptionUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => OptionUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => OptionUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => OptionUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => OptionScalarWhereInputSchema),
					z.lazy(() => OptionScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => CurrencyCreateWithoutProjectInputSchema),
					z.lazy(() => CurrencyCreateWithoutProjectInputSchema).array(),
					z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => CurrencyCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => CurrencyWhereUniqueInputSchema),
					z.lazy(() => CurrencyWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => CurrencyUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => CurrencyUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => CurrencyScalarWhereInputSchema),
					z.lazy(() => CurrencyScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const UploadUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.UploadUncheckedUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UploadCreateWithoutProjectInputSchema),
					z.lazy(() => UploadCreateWithoutProjectInputSchema).array(),
					z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UploadCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => UploadCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => UploadUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => UploadUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => UploadCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => UploadWhereUniqueInputSchema),
					z.lazy(() => UploadWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => UploadUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => UploadUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => UploadUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => UploadUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => UploadScalarWhereInputSchema),
					z.lazy(() => UploadScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const ImageUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ImageCreateWithoutProjectInputSchema),
					z.lazy(() => ImageCreateWithoutProjectInputSchema).array(),
					z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ImageCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => ImageCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => ImageUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => ImageUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => ImageCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => ImageUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => ImageUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => ImageUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => ImageUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => ImageScalarWhereInputSchema),
					z.lazy(() => ImageScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const VideoUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.VideoUncheckedUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => VideoCreateWithoutProjectInputSchema),
					z.lazy(() => VideoCreateWithoutProjectInputSchema).array(),
					z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => VideoCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => VideoCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => VideoUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => VideoUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => VideoCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => VideoWhereUniqueInputSchema),
					z.lazy(() => VideoWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => VideoUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => VideoUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => VideoUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => VideoUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => VideoScalarWhereInputSchema),
					z.lazy(() => VideoScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const RoomScheduleUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RoomScheduleUncheckedUpdateManyWithoutProjectNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema).array(),
					z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => RoomScheduleCreateOrConnectWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleCreateOrConnectWithoutProjectInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => RoomScheduleUpsertWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUpsertWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => RoomScheduleCreateManyProjectInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => RoomScheduleWhereUniqueInputSchema),
					z.lazy(() => RoomScheduleWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => RoomScheduleUpdateWithWhereUniqueWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUpdateWithWhereUniqueWithoutProjectInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => RoomScheduleUpdateManyWithWhereWithoutProjectInputSchema),
					z.lazy(() => RoomScheduleUpdateManyWithWhereWithoutProjectInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => RoomScheduleScalarWhereInputSchema),
					z.lazy(() => RoomScheduleScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const ImageCreateNestedManyWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageCreateNestedManyWithoutHomeTypeInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ImageCreateWithoutHomeTypeInputSchema),
					z.lazy(() => ImageCreateWithoutHomeTypeInputSchema).array(),
					z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ImageCreateOrConnectWithoutHomeTypeInputSchema),
					z.lazy(() => ImageCreateOrConnectWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => ImageCreateManyHomeTypeInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const ImageUncheckedCreateNestedManyWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutHomeTypeInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ImageCreateWithoutHomeTypeInputSchema),
					z.lazy(() => ImageCreateWithoutHomeTypeInputSchema).array(),
					z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ImageCreateOrConnectWithoutHomeTypeInputSchema),
					z.lazy(() => ImageCreateOrConnectWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => ImageCreateManyHomeTypeInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional()
		})
		.strict()

export const NullableEnumFacadeTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumFacadeTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z
				.lazy(() => FacadeTypeSchema)
				.optional()
				.nullable()
		})
		.strict()

export const EnumVariantTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumVariantTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => VariantTypeSchema).optional()
		})
		.strict()

export const EnumDimensionTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDimensionTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => DimensionTypeSchema).optional()
		})
		.strict()

export const ImageUpdateManyWithoutHomeTypeNestedInputSchema: z.ZodType<Prisma.ImageUpdateManyWithoutHomeTypeNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ImageCreateWithoutHomeTypeInputSchema),
					z.lazy(() => ImageCreateWithoutHomeTypeInputSchema).array(),
					z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ImageCreateOrConnectWithoutHomeTypeInputSchema),
					z.lazy(() => ImageCreateOrConnectWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => ImageUpsertWithWhereUniqueWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUpsertWithWhereUniqueWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => ImageCreateManyHomeTypeInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => ImageUpdateWithWhereUniqueWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUpdateWithWhereUniqueWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => ImageUpdateManyWithWhereWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUpdateManyWithWhereWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => ImageScalarWhereInputSchema),
					z.lazy(() => ImageScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const ImageUncheckedUpdateManyWithoutHomeTypeNestedInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutHomeTypeNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ImageCreateWithoutHomeTypeInputSchema),
					z.lazy(() => ImageCreateWithoutHomeTypeInputSchema).array(),
					z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ImageCreateOrConnectWithoutHomeTypeInputSchema),
					z.lazy(() => ImageCreateOrConnectWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => ImageUpsertWithWhereUniqueWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUpsertWithWhereUniqueWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			createMany: z.lazy(() => ImageCreateManyHomeTypeInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => ImageWhereUniqueInputSchema),
					z.lazy(() => ImageWhereUniqueInputSchema).array()
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => ImageUpdateWithWhereUniqueWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUpdateWithWhereUniqueWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => ImageUpdateManyWithWhereWithoutHomeTypeInputSchema),
					z.lazy(() => ImageUpdateManyWithWhereWithoutHomeTypeInputSchema).array()
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => ImageScalarWhereInputSchema),
					z.lazy(() => ImageScalarWhereInputSchema).array()
				])
				.optional()
		})
		.strict()

export const ProjectCreateNestedOneWithoutOptionsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutOptionsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutOptionsInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutOptionsInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutOptionsInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
		})
		.strict()

export const ProjectUpdateOneRequiredWithoutOptionsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutOptionsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutOptionsInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutOptionsInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutOptionsInputSchema).optional(),
			upsert: z.lazy(() => ProjectUpsertWithoutOptionsInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ProjectUpdateToOneWithWhereWithoutOptionsInputSchema),
					z.lazy(() => ProjectUpdateWithoutOptionsInputSchema),
					z.lazy(() => ProjectUncheckedUpdateWithoutOptionsInputSchema)
				])
				.optional()
		})
		.strict()

export const ProjectCreateNestedOneWithoutCurrenciesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutCurrenciesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutCurrenciesInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutCurrenciesInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutCurrenciesInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
		})
		.strict()

export const ProjectUpdateOneRequiredWithoutCurrenciesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutCurrenciesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutCurrenciesInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutCurrenciesInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutCurrenciesInputSchema).optional(),
			upsert: z.lazy(() => ProjectUpsertWithoutCurrenciesInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ProjectUpdateToOneWithWhereWithoutCurrenciesInputSchema),
					z.lazy(() => ProjectUpdateWithoutCurrenciesInputSchema),
					z.lazy(() => ProjectUncheckedUpdateWithoutCurrenciesInputSchema)
				])
				.optional()
		})
		.strict()

export const ProjectCreateNestedOneWithoutUploadsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutUploadsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutUploadsInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutUploadsInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutUploadsInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
		})
		.strict()

export const ProjectUpdateOneRequiredWithoutUploadsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutUploadsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutUploadsInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutUploadsInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutUploadsInputSchema).optional(),
			upsert: z.lazy(() => ProjectUpsertWithoutUploadsInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ProjectUpdateToOneWithWhereWithoutUploadsInputSchema),
					z.lazy(() => ProjectUpdateWithoutUploadsInputSchema),
					z.lazy(() => ProjectUncheckedUpdateWithoutUploadsInputSchema)
				])
				.optional()
		})
		.strict()

export const ProjectCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutImagesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutImagesInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutImagesInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutImagesInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
		})
		.strict()

export const HomeTypeCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.HomeTypeCreateNestedOneWithoutImagesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => HomeTypeCreateWithoutImagesInputSchema),
					z.lazy(() => HomeTypeUncheckedCreateWithoutImagesInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => HomeTypeCreateOrConnectWithoutImagesInputSchema).optional(),
			connect: z.lazy(() => HomeTypeWhereUniqueInputSchema).optional()
		})
		.strict()

export const EnumImageTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumImageTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => ImageTypeSchema).optional()
		})
		.strict()

export const ProjectUpdateOneRequiredWithoutImagesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutImagesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutImagesInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutImagesInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutImagesInputSchema).optional(),
			upsert: z.lazy(() => ProjectUpsertWithoutImagesInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ProjectUpdateToOneWithWhereWithoutImagesInputSchema),
					z.lazy(() => ProjectUpdateWithoutImagesInputSchema),
					z.lazy(() => ProjectUncheckedUpdateWithoutImagesInputSchema)
				])
				.optional()
		})
		.strict()

export const HomeTypeUpdateOneWithoutImagesNestedInputSchema: z.ZodType<Prisma.HomeTypeUpdateOneWithoutImagesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => HomeTypeCreateWithoutImagesInputSchema),
					z.lazy(() => HomeTypeUncheckedCreateWithoutImagesInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => HomeTypeCreateOrConnectWithoutImagesInputSchema).optional(),
			upsert: z.lazy(() => HomeTypeUpsertWithoutImagesInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => HomeTypeWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => HomeTypeWhereInputSchema)]).optional(),
			connect: z.lazy(() => HomeTypeWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => HomeTypeUpdateToOneWithWhereWithoutImagesInputSchema),
					z.lazy(() => HomeTypeUpdateWithoutImagesInputSchema),
					z.lazy(() => HomeTypeUncheckedUpdateWithoutImagesInputSchema)
				])
				.optional()
		})
		.strict()

export const ProjectCreateNestedOneWithoutVideosInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutVideosInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutVideosInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutVideosInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutVideosInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
		})
		.strict()

export const ProjectUpdateOneRequiredWithoutVideosNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutVideosNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutVideosInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutVideosInputSchema)
				])
				.optional(),
			connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutVideosInputSchema).optional(),
			upsert: z.lazy(() => ProjectUpsertWithoutVideosInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ProjectUpdateToOneWithWhereWithoutVideosInputSchema),
					z.lazy(() => ProjectUpdateWithoutVideosInputSchema),
					z.lazy(() => ProjectUncheckedUpdateWithoutVideosInputSchema)
				])
				.optional()
		})
		.strict()

export const ProjectCreateNestedOneWithoutRoomSchedulesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRoomSchedulesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutRoomSchedulesInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutRoomSchedulesInputSchema)
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ProjectCreateOrConnectWithoutRoomSchedulesInputSchema)
				.optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
		})
		.strict()

export const EnumFloorTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFloorTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => FloorTypeSchema).optional()
		})
		.strict()

export const EnumAreaTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAreaTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => AreaTypeSchema).optional()
		})
		.strict()

export const EnumUnitTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUnitTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => UnitTypeSchema).optional()
		})
		.strict()

export const ProjectUpdateOneRequiredWithoutRoomSchedulesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRoomSchedulesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ProjectCreateWithoutRoomSchedulesInputSchema),
					z.lazy(() => ProjectUncheckedCreateWithoutRoomSchedulesInputSchema)
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ProjectCreateOrConnectWithoutRoomSchedulesInputSchema)
				.optional(),
			upsert: z.lazy(() => ProjectUpsertWithoutRoomSchedulesInputSchema).optional(),
			connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ProjectUpdateToOneWithWhereWithoutRoomSchedulesInputSchema),
					z.lazy(() => ProjectUpdateWithoutRoomSchedulesInputSchema),
					z.lazy(() => ProjectUncheckedUpdateWithoutRoomSchedulesInputSchema)
				])
				.optional()
		})
		.strict()

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
	.object({
		equals: z.number().optional(),
		in: z.number().array().optional(),
		notIn: z.number().array().optional(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional()
	})
	.strict()

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
	.object({
		equals: z.string().optional(),
		in: z.string().array().optional(),
		notIn: z.string().array().optional(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional()
	})
	.strict()

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z
	.object({
		equals: z.string().optional().nullable(),
		in: z.string().array().optional().nullable(),
		notIn: z.string().array().optional().nullable(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		not: z
			.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
			.optional()
			.nullable()
	})
	.strict()

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z
	.object({
		equals: z.number().optional().nullable(),
		in: z.number().array().optional().nullable(),
		notIn: z.number().array().optional().nullable(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z
			.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
			.optional()
			.nullable()
	})
	.strict()

export const NestedEnumRoofTypeFilterSchema: z.ZodType<Prisma.NestedEnumRoofTypeFilter> = z
	.object({
		equals: z.lazy(() => RoofTypeSchema).optional(),
		in: z
			.lazy(() => RoofTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => RoofTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => RoofTypeSchema), z.lazy(() => NestedEnumRoofTypeFilterSchema)])
			.optional()
	})
	.strict()

export const NestedEnumHouseTypeFilterSchema: z.ZodType<Prisma.NestedEnumHouseTypeFilter> = z
	.object({
		equals: z.lazy(() => HouseTypeSchema).optional(),
		in: z
			.lazy(() => HouseTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => HouseTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => HouseTypeSchema), z.lazy(() => NestedEnumHouseTypeFilterSchema)])
			.optional()
	})
	.strict()

export const NestedEnumStatusTypeFilterSchema: z.ZodType<Prisma.NestedEnumStatusTypeFilter> = z
	.object({
		equals: z.lazy(() => StatusTypeSchema).optional(),
		in: z
			.lazy(() => StatusTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => StatusTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => StatusTypeSchema), z.lazy(() => NestedEnumStatusTypeFilterSchema)])
			.optional()
	})
	.strict()

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
	.object({
		equals: z.boolean().optional(),
		not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional()
	})
	.strict()

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z
	.object({
		equals: z.coerce.date().optional(),
		in: z.coerce.date().array().optional(),
		notIn: z.coerce.date().array().optional(),
		lt: z.coerce.date().optional(),
		lte: z.coerce.date().optional(),
		gt: z.coerce.date().optional(),
		gte: z.coerce.date().optional(),
		not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional()
	})
	.strict()

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
	z
		.object({
			equals: z.number().optional(),
			in: z.number().array().optional(),
			notIn: z.number().array().optional(),
			lt: z.number().optional(),
			lte: z.number().optional(),
			gt: z.number().optional(),
			gte: z.number().optional(),
			not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_avg: z.lazy(() => NestedFloatFilterSchema).optional(),
			_sum: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedIntFilterSchema).optional(),
			_max: z.lazy(() => NestedIntFilterSchema).optional()
		})
		.strict()

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
	.object({
		equals: z.number().optional(),
		in: z.number().array().optional(),
		notIn: z.number().array().optional(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional()
	})
	.strict()

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
	z
		.object({
			equals: z.string().optional(),
			in: z.string().array().optional(),
			notIn: z.string().array().optional(),
			lt: z.string().optional(),
			lte: z.string().optional(),
			gt: z.string().optional(),
			gte: z.string().optional(),
			contains: z.string().optional(),
			startsWith: z.string().optional(),
			endsWith: z.string().optional(),
			not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedStringFilterSchema).optional(),
			_max: z.lazy(() => NestedStringFilterSchema).optional()
		})
		.strict()

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.string().optional().nullable(),
			in: z.string().array().optional().nullable(),
			notIn: z.string().array().optional().nullable(),
			lt: z.string().optional(),
			lte: z.string().optional(),
			gt: z.string().optional(),
			gte: z.string().optional(),
			contains: z.string().optional(),
			startsWith: z.string().optional(),
			endsWith: z.string().optional(),
			not: z
				.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedStringNullableFilterSchema).optional()
		})
		.strict()

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z
	.object({
		equals: z.number().optional().nullable(),
		in: z.number().array().optional().nullable(),
		notIn: z.number().array().optional().nullable(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z
			.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
			.optional()
			.nullable()
	})
	.strict()

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.number().optional().nullable(),
			in: z.number().array().optional().nullable(),
			notIn: z.number().array().optional().nullable(),
			lt: z.number().optional(),
			lte: z.number().optional(),
			gt: z.number().optional(),
			gte: z.number().optional(),
			not: z
				.union([z.number(), z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
		})
		.strict()

export const NestedEnumRoofTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoofTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => RoofTypeSchema).optional(),
			in: z
				.lazy(() => RoofTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => RoofTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => NestedEnumRoofTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumRoofTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumRoofTypeFilterSchema).optional()
		})
		.strict()

export const NestedEnumHouseTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumHouseTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => HouseTypeSchema).optional(),
			in: z
				.lazy(() => HouseTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => HouseTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => NestedEnumHouseTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumHouseTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumHouseTypeFilterSchema).optional()
		})
		.strict()

export const NestedEnumStatusTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumStatusTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => StatusTypeSchema).optional(),
			in: z
				.lazy(() => StatusTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => StatusTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => NestedEnumStatusTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumStatusTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumStatusTypeFilterSchema).optional()
		})
		.strict()

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
	z
		.object({
			equals: z.boolean().optional(),
			not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedBoolFilterSchema).optional(),
			_max: z.lazy(() => NestedBoolFilterSchema).optional()
		})
		.strict()

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
	z
		.object({
			equals: z.coerce.date().optional(),
			in: z.coerce.date().array().optional(),
			notIn: z.coerce.date().array().optional(),
			lt: z.coerce.date().optional(),
			lte: z.coerce.date().optional(),
			gt: z.coerce.date().optional(),
			gte: z.coerce.date().optional(),
			not: z
				.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
			_max: z.lazy(() => NestedDateTimeFilterSchema).optional()
		})
		.strict()

export const NestedEnumFacadeTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumFacadeTypeNullableFilter> =
	z
		.object({
			equals: z
				.lazy(() => FacadeTypeSchema)
				.optional()
				.nullable(),
			in: z
				.lazy(() => FacadeTypeSchema)
				.array()
				.optional()
				.nullable(),
			notIn: z
				.lazy(() => FacadeTypeSchema)
				.array()
				.optional()
				.nullable(),
			not: z
				.union([
					z.lazy(() => FacadeTypeSchema),
					z.lazy(() => NestedEnumFacadeTypeNullableFilterSchema)
				])
				.optional()
				.nullable()
		})
		.strict()

export const NestedEnumVariantTypeFilterSchema: z.ZodType<Prisma.NestedEnumVariantTypeFilter> = z
	.object({
		equals: z.lazy(() => VariantTypeSchema).optional(),
		in: z
			.lazy(() => VariantTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => VariantTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => VariantTypeSchema), z.lazy(() => NestedEnumVariantTypeFilterSchema)])
			.optional()
	})
	.strict()

export const NestedEnumDimensionTypeFilterSchema: z.ZodType<Prisma.NestedEnumDimensionTypeFilter> =
	z
		.object({
			equals: z.lazy(() => DimensionTypeSchema).optional(),
			in: z
				.lazy(() => DimensionTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => DimensionTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => DimensionTypeSchema),
					z.lazy(() => NestedEnumDimensionTypeFilterSchema)
				])
				.optional()
		})
		.strict()

export const NestedEnumFacadeTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFacadeTypeNullableWithAggregatesFilter> =
	z
		.object({
			equals: z
				.lazy(() => FacadeTypeSchema)
				.optional()
				.nullable(),
			in: z
				.lazy(() => FacadeTypeSchema)
				.array()
				.optional()
				.nullable(),
			notIn: z
				.lazy(() => FacadeTypeSchema)
				.array()
				.optional()
				.nullable(),
			not: z
				.union([
					z.lazy(() => FacadeTypeSchema),
					z.lazy(() => NestedEnumFacadeTypeNullableWithAggregatesFilterSchema)
				])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumFacadeTypeNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumFacadeTypeNullableFilterSchema).optional()
		})
		.strict()

export const NestedEnumVariantTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumVariantTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => VariantTypeSchema).optional(),
			in: z
				.lazy(() => VariantTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => VariantTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => VariantTypeSchema),
					z.lazy(() => NestedEnumVariantTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumVariantTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumVariantTypeFilterSchema).optional()
		})
		.strict()

export const NestedEnumDimensionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDimensionTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => DimensionTypeSchema).optional(),
			in: z
				.lazy(() => DimensionTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => DimensionTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => DimensionTypeSchema),
					z.lazy(() => NestedEnumDimensionTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumDimensionTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumDimensionTypeFilterSchema).optional()
		})
		.strict()

export const NestedEnumImageTypeFilterSchema: z.ZodType<Prisma.NestedEnumImageTypeFilter> = z
	.object({
		equals: z.lazy(() => ImageTypeSchema).optional(),
		in: z
			.lazy(() => ImageTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => ImageTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => ImageTypeSchema), z.lazy(() => NestedEnumImageTypeFilterSchema)])
			.optional()
	})
	.strict()

export const NestedEnumImageTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumImageTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => ImageTypeSchema).optional(),
			in: z
				.lazy(() => ImageTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => ImageTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => NestedEnumImageTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumImageTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumImageTypeFilterSchema).optional()
		})
		.strict()

export const NestedEnumFloorTypeFilterSchema: z.ZodType<Prisma.NestedEnumFloorTypeFilter> = z
	.object({
		equals: z.lazy(() => FloorTypeSchema).optional(),
		in: z
			.lazy(() => FloorTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => FloorTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => FloorTypeSchema), z.lazy(() => NestedEnumFloorTypeFilterSchema)])
			.optional()
	})
	.strict()

export const NestedEnumAreaTypeFilterSchema: z.ZodType<Prisma.NestedEnumAreaTypeFilter> = z
	.object({
		equals: z.lazy(() => AreaTypeSchema).optional(),
		in: z
			.lazy(() => AreaTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => AreaTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => AreaTypeSchema), z.lazy(() => NestedEnumAreaTypeFilterSchema)])
			.optional()
	})
	.strict()

export const NestedEnumUnitTypeFilterSchema: z.ZodType<Prisma.NestedEnumUnitTypeFilter> = z
	.object({
		equals: z.lazy(() => UnitTypeSchema).optional(),
		in: z
			.lazy(() => UnitTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => UnitTypeSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => UnitTypeSchema), z.lazy(() => NestedEnumUnitTypeFilterSchema)])
			.optional()
	})
	.strict()

export const NestedEnumFloorTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFloorTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => FloorTypeSchema).optional(),
			in: z
				.lazy(() => FloorTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => FloorTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => FloorTypeSchema),
					z.lazy(() => NestedEnumFloorTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumFloorTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumFloorTypeFilterSchema).optional()
		})
		.strict()

export const NestedEnumAreaTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAreaTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => AreaTypeSchema).optional(),
			in: z
				.lazy(() => AreaTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => AreaTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => AreaTypeSchema),
					z.lazy(() => NestedEnumAreaTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumAreaTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumAreaTypeFilterSchema).optional()
		})
		.strict()

export const NestedEnumUnitTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUnitTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => UnitTypeSchema).optional(),
			in: z
				.lazy(() => UnitTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => UnitTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => UnitTypeSchema),
					z.lazy(() => NestedEnumUnitTypeWithAggregatesFilterSchema)
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumUnitTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumUnitTypeFilterSchema).optional()
		})
		.strict()

export const OptionCreateWithoutProjectInputSchema: z.ZodType<Prisma.OptionCreateWithoutProjectInput> =
	z
		.object({
			name: z.string(),
			description: z.string().optional().nullable(),
			price: z.number().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const OptionUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.OptionUncheckedCreateWithoutProjectInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			description: z.string().optional().nullable(),
			price: z.number().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const OptionCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.OptionCreateOrConnectWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => OptionWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => OptionCreateWithoutProjectInputSchema),
				z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const OptionCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.OptionCreateManyProjectInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => OptionCreateManyProjectInputSchema),
				z.lazy(() => OptionCreateManyProjectInputSchema).array()
			]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const CurrencyCreateWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyCreateWithoutProjectInput> =
	z
		.object({
			name: z.string(),
			symbol: z.string(),
			exchange: z.number().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const CurrencyUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUncheckedCreateWithoutProjectInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			symbol: z.string(),
			exchange: z.number().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const CurrencyCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyCreateOrConnectWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => CurrencyWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => CurrencyCreateWithoutProjectInputSchema),
				z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const CurrencyCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.CurrencyCreateManyProjectInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => CurrencyCreateManyProjectInputSchema),
				z.lazy(() => CurrencyCreateManyProjectInputSchema).array()
			]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const UploadCreateWithoutProjectInputSchema: z.ZodType<Prisma.UploadCreateWithoutProjectInput> =
	z
		.object({
			title: z.string().optional().nullable(),
			filename: z.string(),
			mimetype: z.string().optional().nullable(),
			url: z.string(),
			hash: z.string(),
			alt: z.string().optional().nullable(),
			caption: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const UploadUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.UploadUncheckedCreateWithoutProjectInput> =
	z
		.object({
			id: z.number().int().optional(),
			title: z.string().optional().nullable(),
			filename: z.string(),
			mimetype: z.string().optional().nullable(),
			url: z.string(),
			hash: z.string(),
			alt: z.string().optional().nullable(),
			caption: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const UploadCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.UploadCreateOrConnectWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => UploadWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UploadCreateWithoutProjectInputSchema),
				z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const UploadCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.UploadCreateManyProjectInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => UploadCreateManyProjectInputSchema),
				z.lazy(() => UploadCreateManyProjectInputSchema).array()
			]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const ImageCreateWithoutProjectInputSchema: z.ZodType<Prisma.ImageCreateWithoutProjectInput> =
	z
		.object({
			title: z.string().optional().nullable(),
			filename: z.string(),
			mimetype: z.string(),
			url: z.string(),
			hash: z.string(),
			alt: z.string().optional().nullable(),
			caption: z.string().optional().nullable(),
			highlighted: z.boolean().optional(),
			imageType: z.lazy(() => ImageTypeSchema),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			homeType: z.lazy(() => HomeTypeCreateNestedOneWithoutImagesInputSchema).optional()
		})
		.strict()

export const ImageUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ImageUncheckedCreateWithoutProjectInput> =
	z
		.object({
			id: z.number().int().optional(),
			title: z.string().optional().nullable(),
			filename: z.string(),
			mimetype: z.string(),
			url: z.string(),
			hash: z.string(),
			alt: z.string().optional().nullable(),
			caption: z.string().optional().nullable(),
			highlighted: z.boolean().optional(),
			imageType: z.lazy(() => ImageTypeSchema),
			homeTypeId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const ImageCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => ImageWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ImageCreateWithoutProjectInputSchema),
				z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const ImageCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ImageCreateManyProjectInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => ImageCreateManyProjectInputSchema),
				z.lazy(() => ImageCreateManyProjectInputSchema).array()
			]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const VideoCreateWithoutProjectInputSchema: z.ZodType<Prisma.VideoCreateWithoutProjectInput> =
	z
		.object({
			title: z.string().optional().nullable(),
			filename: z.string(),
			mimetype: z.string(),
			url: z.string(),
			hash: z.string(),
			alt: z.string().optional().nullable(),
			caption: z.string().optional().nullable(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const VideoUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.VideoUncheckedCreateWithoutProjectInput> =
	z
		.object({
			id: z.number().int().optional(),
			title: z.string().optional().nullable(),
			filename: z.string(),
			mimetype: z.string(),
			url: z.string(),
			hash: z.string(),
			alt: z.string().optional().nullable(),
			caption: z.string().optional().nullable(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const VideoCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.VideoCreateOrConnectWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => VideoWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => VideoCreateWithoutProjectInputSchema),
				z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const VideoCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.VideoCreateManyProjectInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => VideoCreateManyProjectInputSchema),
				z.lazy(() => VideoCreateManyProjectInputSchema).array()
			]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const RoomScheduleCreateWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleCreateWithoutProjectInput> =
	z
		.object({
			floorType: z.lazy(() => FloorTypeSchema),
			areaType: z.lazy(() => AreaTypeSchema),
			name: z.string(),
			area: z.number().optional().nullable(),
			unit: z.lazy(() => UnitTypeSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const RoomScheduleUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleUncheckedCreateWithoutProjectInput> =
	z
		.object({
			id: z.number().int().optional(),
			floorType: z.lazy(() => FloorTypeSchema),
			areaType: z.lazy(() => AreaTypeSchema),
			name: z.string(),
			area: z.number().optional().nullable(),
			unit: z.lazy(() => UnitTypeSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const RoomScheduleCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleCreateOrConnectWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => RoomScheduleWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema),
				z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const RoomScheduleCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.RoomScheduleCreateManyProjectInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => RoomScheduleCreateManyProjectInputSchema),
				z.lazy(() => RoomScheduleCreateManyProjectInputSchema).array()
			]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const OptionUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.OptionUpsertWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => OptionWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => OptionUpdateWithoutProjectInputSchema),
				z.lazy(() => OptionUncheckedUpdateWithoutProjectInputSchema)
			]),
			create: z.union([
				z.lazy(() => OptionCreateWithoutProjectInputSchema),
				z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const OptionUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.OptionUpdateWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => OptionWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => OptionUpdateWithoutProjectInputSchema),
				z.lazy(() => OptionUncheckedUpdateWithoutProjectInputSchema)
			])
		})
		.strict()

export const OptionUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.OptionUpdateManyWithWhereWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => OptionScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => OptionUpdateManyMutationInputSchema),
				z.lazy(() => OptionUncheckedUpdateManyWithoutProjectInputSchema)
			])
		})
		.strict()

export const OptionScalarWhereInputSchema: z.ZodType<Prisma.OptionScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => OptionScalarWhereInputSchema),
				z.lazy(() => OptionScalarWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => OptionScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => OptionScalarWhereInputSchema),
				z.lazy(() => OptionScalarWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		price: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
	})
	.strict()

export const CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUpsertWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => CurrencyWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => CurrencyUpdateWithoutProjectInputSchema),
				z.lazy(() => CurrencyUncheckedUpdateWithoutProjectInputSchema)
			]),
			create: z.union([
				z.lazy(() => CurrencyCreateWithoutProjectInputSchema),
				z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUpdateWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => CurrencyWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => CurrencyUpdateWithoutProjectInputSchema),
				z.lazy(() => CurrencyUncheckedUpdateWithoutProjectInputSchema)
			])
		})
		.strict()

export const CurrencyUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUpdateManyWithWhereWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => CurrencyScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => CurrencyUpdateManyMutationInputSchema),
				z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectInputSchema)
			])
		})
		.strict()

export const CurrencyScalarWhereInputSchema: z.ZodType<Prisma.CurrencyScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => CurrencyScalarWhereInputSchema),
				z.lazy(() => CurrencyScalarWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => CurrencyScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => CurrencyScalarWhereInputSchema),
				z.lazy(() => CurrencyScalarWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		symbol: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		exchange: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
	})
	.strict()

export const UploadUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.UploadUpsertWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => UploadWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => UploadUpdateWithoutProjectInputSchema),
				z.lazy(() => UploadUncheckedUpdateWithoutProjectInputSchema)
			]),
			create: z.union([
				z.lazy(() => UploadCreateWithoutProjectInputSchema),
				z.lazy(() => UploadUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const UploadUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.UploadUpdateWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => UploadWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => UploadUpdateWithoutProjectInputSchema),
				z.lazy(() => UploadUncheckedUpdateWithoutProjectInputSchema)
			])
		})
		.strict()

export const UploadUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.UploadUpdateManyWithWhereWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => UploadScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => UploadUpdateManyMutationInputSchema),
				z.lazy(() => UploadUncheckedUpdateManyWithoutProjectInputSchema)
			])
		})
		.strict()

export const UploadScalarWhereInputSchema: z.ZodType<Prisma.UploadScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UploadScalarWhereInputSchema),
				z.lazy(() => UploadScalarWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => UploadScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UploadScalarWhereInputSchema),
				z.lazy(() => UploadScalarWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		title: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		mimetype: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		hash: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		alt: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		caption: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
	})
	.strict()

export const ImageUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => ImageWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => ImageUpdateWithoutProjectInputSchema),
				z.lazy(() => ImageUncheckedUpdateWithoutProjectInputSchema)
			]),
			create: z.union([
				z.lazy(() => ImageCreateWithoutProjectInputSchema),
				z.lazy(() => ImageUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const ImageUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => ImageWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => ImageUpdateWithoutProjectInputSchema),
				z.lazy(() => ImageUncheckedUpdateWithoutProjectInputSchema)
			])
		})
		.strict()

export const ImageUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => ImageScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => ImageUpdateManyMutationInputSchema),
				z.lazy(() => ImageUncheckedUpdateManyWithoutProjectInputSchema)
			])
		})
		.strict()

export const ImageScalarWhereInputSchema: z.ZodType<Prisma.ImageScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ImageScalarWhereInputSchema),
				z.lazy(() => ImageScalarWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ImageScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ImageScalarWhereInputSchema),
				z.lazy(() => ImageScalarWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		title: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		mimetype: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		hash: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		alt: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		caption: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		highlighted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		imageType: z
			.union([z.lazy(() => EnumImageTypeFilterSchema), z.lazy(() => ImageTypeSchema)])
			.optional(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		homeTypeId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
	})
	.strict()

export const VideoUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.VideoUpsertWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => VideoWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => VideoUpdateWithoutProjectInputSchema),
				z.lazy(() => VideoUncheckedUpdateWithoutProjectInputSchema)
			]),
			create: z.union([
				z.lazy(() => VideoCreateWithoutProjectInputSchema),
				z.lazy(() => VideoUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const VideoUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.VideoUpdateWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => VideoWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => VideoUpdateWithoutProjectInputSchema),
				z.lazy(() => VideoUncheckedUpdateWithoutProjectInputSchema)
			])
		})
		.strict()

export const VideoUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.VideoUpdateManyWithWhereWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => VideoScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => VideoUpdateManyMutationInputSchema),
				z.lazy(() => VideoUncheckedUpdateManyWithoutProjectInputSchema)
			])
		})
		.strict()

export const VideoScalarWhereInputSchema: z.ZodType<Prisma.VideoScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => VideoScalarWhereInputSchema),
				z.lazy(() => VideoScalarWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => VideoScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => VideoScalarWhereInputSchema),
				z.lazy(() => VideoScalarWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		title: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		mimetype: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		hash: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		alt: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		caption: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		highlighted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
	})
	.strict()

export const RoomScheduleUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleUpsertWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => RoomScheduleWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => RoomScheduleUpdateWithoutProjectInputSchema),
				z.lazy(() => RoomScheduleUncheckedUpdateWithoutProjectInputSchema)
			]),
			create: z.union([
				z.lazy(() => RoomScheduleCreateWithoutProjectInputSchema),
				z.lazy(() => RoomScheduleUncheckedCreateWithoutProjectInputSchema)
			])
		})
		.strict()

export const RoomScheduleUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleUpdateWithWhereUniqueWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => RoomScheduleWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => RoomScheduleUpdateWithoutProjectInputSchema),
				z.lazy(() => RoomScheduleUncheckedUpdateWithoutProjectInputSchema)
			])
		})
		.strict()

export const RoomScheduleUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleUpdateManyWithWhereWithoutProjectInput> =
	z
		.object({
			where: z.lazy(() => RoomScheduleScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => RoomScheduleUpdateManyMutationInputSchema),
				z.lazy(() => RoomScheduleUncheckedUpdateManyWithoutProjectInputSchema)
			])
		})
		.strict()

export const RoomScheduleScalarWhereInputSchema: z.ZodType<Prisma.RoomScheduleScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => RoomScheduleScalarWhereInputSchema),
				z.lazy(() => RoomScheduleScalarWhereInputSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => RoomScheduleScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => RoomScheduleScalarWhereInputSchema),
				z.lazy(() => RoomScheduleScalarWhereInputSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		floorType: z
			.union([z.lazy(() => EnumFloorTypeFilterSchema), z.lazy(() => FloorTypeSchema)])
			.optional(),
		areaType: z
			.union([z.lazy(() => EnumAreaTypeFilterSchema), z.lazy(() => AreaTypeSchema)])
			.optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		area: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		unit: z
			.union([z.lazy(() => EnumUnitTypeFilterSchema), z.lazy(() => UnitTypeSchema)])
			.optional(),
		projectId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
	})
	.strict()

export const ImageCreateWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageCreateWithoutHomeTypeInput> =
	z
		.object({
			title: z.string().optional().nullable(),
			filename: z.string(),
			mimetype: z.string(),
			url: z.string(),
			hash: z.string(),
			alt: z.string().optional().nullable(),
			caption: z.string().optional().nullable(),
			highlighted: z.boolean().optional(),
			imageType: z.lazy(() => ImageTypeSchema),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			project: z.lazy(() => ProjectCreateNestedOneWithoutImagesInputSchema)
		})
		.strict()

export const ImageUncheckedCreateWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageUncheckedCreateWithoutHomeTypeInput> =
	z
		.object({
			id: z.number().int().optional(),
			title: z.string().optional().nullable(),
			filename: z.string(),
			mimetype: z.string(),
			url: z.string(),
			hash: z.string(),
			alt: z.string().optional().nullable(),
			caption: z.string().optional().nullable(),
			highlighted: z.boolean().optional(),
			imageType: z.lazy(() => ImageTypeSchema),
			projectId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const ImageCreateOrConnectWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutHomeTypeInput> =
	z
		.object({
			where: z.lazy(() => ImageWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ImageCreateWithoutHomeTypeInputSchema),
				z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema)
			])
		})
		.strict()

export const ImageCreateManyHomeTypeInputEnvelopeSchema: z.ZodType<Prisma.ImageCreateManyHomeTypeInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => ImageCreateManyHomeTypeInputSchema),
				z.lazy(() => ImageCreateManyHomeTypeInputSchema).array()
			]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const ImageUpsertWithWhereUniqueWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutHomeTypeInput> =
	z
		.object({
			where: z.lazy(() => ImageWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => ImageUpdateWithoutHomeTypeInputSchema),
				z.lazy(() => ImageUncheckedUpdateWithoutHomeTypeInputSchema)
			]),
			create: z.union([
				z.lazy(() => ImageCreateWithoutHomeTypeInputSchema),
				z.lazy(() => ImageUncheckedCreateWithoutHomeTypeInputSchema)
			])
		})
		.strict()

export const ImageUpdateWithWhereUniqueWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutHomeTypeInput> =
	z
		.object({
			where: z.lazy(() => ImageWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => ImageUpdateWithoutHomeTypeInputSchema),
				z.lazy(() => ImageUncheckedUpdateWithoutHomeTypeInputSchema)
			])
		})
		.strict()

export const ImageUpdateManyWithWhereWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutHomeTypeInput> =
	z
		.object({
			where: z.lazy(() => ImageScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => ImageUpdateManyMutationInputSchema),
				z.lazy(() => ImageUncheckedUpdateManyWithoutHomeTypeInputSchema)
			])
		})
		.strict()

export const ProjectCreateWithoutOptionsInputSchema: z.ZodType<Prisma.ProjectCreateWithoutOptionsInput> =
	z
		.object({
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			currencies: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional(),
			uploads: z.lazy(() => UploadCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleCreateNestedManyWithoutProjectInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedCreateWithoutOptionsInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutOptionsInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional(),
			uploads: z.lazy(() => UploadUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateOrConnectWithoutOptionsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutOptionsInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutOptionsInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutOptionsInputSchema)
			])
		})
		.strict()

export const ProjectUpsertWithoutOptionsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutOptionsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ProjectUpdateWithoutOptionsInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutOptionsInputSchema)
			]),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutOptionsInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutOptionsInputSchema)
			]),
			where: z.lazy(() => ProjectWhereInputSchema).optional()
		})
		.strict()

export const ProjectUpdateToOneWithWhereWithoutOptionsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutOptionsInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ProjectUpdateWithoutOptionsInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutOptionsInputSchema)
			])
		})
		.strict()

export const ProjectUpdateWithoutOptionsInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutOptionsInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			currencies: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional(),
			uploads: z.lazy(() => UploadUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleUpdateManyWithoutProjectNestedInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedUpdateWithoutOptionsInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutOptionsInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional(),
			uploads: z.lazy(() => UploadUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateWithoutCurrenciesInputSchema: z.ZodType<Prisma.ProjectCreateWithoutCurrenciesInput> =
	z
		.object({
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
			uploads: z.lazy(() => UploadCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleCreateNestedManyWithoutProjectInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedCreateWithoutCurrenciesInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutCurrenciesInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			uploads: z.lazy(() => UploadUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateOrConnectWithoutCurrenciesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutCurrenciesInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutCurrenciesInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutCurrenciesInputSchema)
			])
		})
		.strict()

export const ProjectUpsertWithoutCurrenciesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutCurrenciesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ProjectUpdateWithoutCurrenciesInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutCurrenciesInputSchema)
			]),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutCurrenciesInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutCurrenciesInputSchema)
			]),
			where: z.lazy(() => ProjectWhereInputSchema).optional()
		})
		.strict()

export const ProjectUpdateToOneWithWhereWithoutCurrenciesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutCurrenciesInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ProjectUpdateWithoutCurrenciesInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutCurrenciesInputSchema)
			])
		})
		.strict()

export const ProjectUpdateWithoutCurrenciesInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutCurrenciesInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
			uploads: z.lazy(() => UploadUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleUpdateManyWithoutProjectNestedInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedUpdateWithoutCurrenciesInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutCurrenciesInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			uploads: z.lazy(() => UploadUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateWithoutUploadsInputSchema: z.ZodType<Prisma.ProjectCreateWithoutUploadsInput> =
	z
		.object({
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
			currencies: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleCreateNestedManyWithoutProjectInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedCreateWithoutUploadsInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutUploadsInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional(),
			images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateOrConnectWithoutUploadsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutUploadsInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutUploadsInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutUploadsInputSchema)
			])
		})
		.strict()

export const ProjectUpsertWithoutUploadsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutUploadsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ProjectUpdateWithoutUploadsInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutUploadsInputSchema)
			]),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutUploadsInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutUploadsInputSchema)
			]),
			where: z.lazy(() => ProjectWhereInputSchema).optional()
		})
		.strict()

export const ProjectUpdateToOneWithWhereWithoutUploadsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutUploadsInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ProjectUpdateWithoutUploadsInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutUploadsInputSchema)
			])
		})
		.strict()

export const ProjectUpdateWithoutUploadsInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutUploadsInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
			currencies: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleUpdateManyWithoutProjectNestedInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedUpdateWithoutUploadsInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutUploadsInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional(),
			images: z.lazy(() => ImageUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateWithoutImagesInputSchema: z.ZodType<Prisma.ProjectCreateWithoutImagesInput> =
	z
		.object({
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
			currencies: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional(),
			uploads: z.lazy(() => UploadCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleCreateNestedManyWithoutProjectInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutImagesInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional(),
			uploads: z.lazy(() => UploadUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutImagesInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutImagesInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutImagesInputSchema)
			])
		})
		.strict()

export const HomeTypeCreateWithoutImagesInputSchema: z.ZodType<Prisma.HomeTypeCreateWithoutImagesInput> =
	z
		.object({
			facadeType: z
				.lazy(() => FacadeTypeSchema)
				.optional()
				.nullable(),
			variantType: z.lazy(() => VariantTypeSchema).optional(),
			dimensionType: z.lazy(() => DimensionTypeSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const HomeTypeUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.HomeTypeUncheckedCreateWithoutImagesInput> =
	z
		.object({
			id: z.number().int().optional(),
			facadeType: z
				.lazy(() => FacadeTypeSchema)
				.optional()
				.nullable(),
			variantType: z.lazy(() => VariantTypeSchema).optional(),
			dimensionType: z.lazy(() => DimensionTypeSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const HomeTypeCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.HomeTypeCreateOrConnectWithoutImagesInput> =
	z
		.object({
			where: z.lazy(() => HomeTypeWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => HomeTypeCreateWithoutImagesInputSchema),
				z.lazy(() => HomeTypeUncheckedCreateWithoutImagesInputSchema)
			])
		})
		.strict()

export const ProjectUpsertWithoutImagesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutImagesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ProjectUpdateWithoutImagesInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutImagesInputSchema)
			]),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutImagesInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutImagesInputSchema)
			]),
			where: z.lazy(() => ProjectWhereInputSchema).optional()
		})
		.strict()

export const ProjectUpdateToOneWithWhereWithoutImagesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutImagesInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ProjectUpdateWithoutImagesInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutImagesInputSchema)
			])
		})
		.strict()

export const ProjectUpdateWithoutImagesInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutImagesInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
			currencies: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional(),
			uploads: z.lazy(() => UploadUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleUpdateManyWithoutProjectNestedInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutImagesInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional(),
			uploads: z.lazy(() => UploadUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional()
		})
		.strict()

export const HomeTypeUpsertWithoutImagesInputSchema: z.ZodType<Prisma.HomeTypeUpsertWithoutImagesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => HomeTypeUpdateWithoutImagesInputSchema),
				z.lazy(() => HomeTypeUncheckedUpdateWithoutImagesInputSchema)
			]),
			create: z.union([
				z.lazy(() => HomeTypeCreateWithoutImagesInputSchema),
				z.lazy(() => HomeTypeUncheckedCreateWithoutImagesInputSchema)
			]),
			where: z.lazy(() => HomeTypeWhereInputSchema).optional()
		})
		.strict()

export const HomeTypeUpdateToOneWithWhereWithoutImagesInputSchema: z.ZodType<Prisma.HomeTypeUpdateToOneWithWhereWithoutImagesInput> =
	z
		.object({
			where: z.lazy(() => HomeTypeWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => HomeTypeUpdateWithoutImagesInputSchema),
				z.lazy(() => HomeTypeUncheckedUpdateWithoutImagesInputSchema)
			])
		})
		.strict()

export const HomeTypeUpdateWithoutImagesInputSchema: z.ZodType<Prisma.HomeTypeUpdateWithoutImagesInput> =
	z
		.object({
			facadeType: z
				.union([
					z.lazy(() => FacadeTypeSchema),
					z.lazy(() => NullableEnumFacadeTypeFieldUpdateOperationsInputSchema)
				])
				.optional()
				.nullable(),
			variantType: z
				.union([
					z.lazy(() => VariantTypeSchema),
					z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			dimensionType: z
				.union([
					z.lazy(() => DimensionTypeSchema),
					z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const HomeTypeUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.HomeTypeUncheckedUpdateWithoutImagesInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			facadeType: z
				.union([
					z.lazy(() => FacadeTypeSchema),
					z.lazy(() => NullableEnumFacadeTypeFieldUpdateOperationsInputSchema)
				])
				.optional()
				.nullable(),
			variantType: z
				.union([
					z.lazy(() => VariantTypeSchema),
					z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			dimensionType: z
				.union([
					z.lazy(() => DimensionTypeSchema),
					z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const ProjectCreateWithoutVideosInputSchema: z.ZodType<Prisma.ProjectCreateWithoutVideosInput> =
	z
		.object({
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
			currencies: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional(),
			uploads: z.lazy(() => UploadCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleCreateNestedManyWithoutProjectInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedCreateWithoutVideosInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutVideosInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional(),
			uploads: z.lazy(() => UploadUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateOrConnectWithoutVideosInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutVideosInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutVideosInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutVideosInputSchema)
			])
		})
		.strict()

export const ProjectUpsertWithoutVideosInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutVideosInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ProjectUpdateWithoutVideosInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutVideosInputSchema)
			]),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutVideosInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutVideosInputSchema)
			]),
			where: z.lazy(() => ProjectWhereInputSchema).optional()
		})
		.strict()

export const ProjectUpdateToOneWithWhereWithoutVideosInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutVideosInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ProjectUpdateWithoutVideosInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutVideosInputSchema)
			])
		})
		.strict()

export const ProjectUpdateWithoutVideosInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutVideosInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
			currencies: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional(),
			uploads: z.lazy(() => UploadUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z.lazy(() => RoomScheduleUpdateManyWithoutProjectNestedInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedUpdateWithoutVideosInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutVideosInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional(),
			uploads: z.lazy(() => UploadUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			roomSchedules: z
				.lazy(() => RoomScheduleUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional()
		})
		.strict()

export const ProjectCreateWithoutRoomSchedulesInputSchema: z.ZodType<Prisma.ProjectCreateWithoutRoomSchedulesInput> =
	z
		.object({
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
			currencies: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional(),
			uploads: z.lazy(() => UploadCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoCreateNestedManyWithoutProjectInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedCreateWithoutRoomSchedulesInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutRoomSchedulesInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			slug: z.string(),
			icon: z.string(),
			label: z.string().optional().nullable(),
			tags: z.union([z.lazy(() => ProjectCreatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z.string().optional().nullable(),
			longDescription: z.string().optional().nullable(),
			mainBenefits: z.string().optional().nullable(),
			additionalInfo: z.string().optional().nullable(),
			technicalInfo: z.string().optional().nullable(),
			usableArea: z.number().optional().nullable(),
			numPeople: z.string().optional().nullable(),
			roofType: z.lazy(() => RoofTypeSchema),
			houseType: z.lazy(() => HouseTypeSchema),
			status: z.lazy(() => StatusTypeSchema).optional(),
			index: z.number().int().optional(),
			highlighted: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			options: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema)
				.optional(),
			uploads: z.lazy(() => UploadUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
		})
		.strict()

export const ProjectCreateOrConnectWithoutRoomSchedulesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRoomSchedulesInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutRoomSchedulesInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutRoomSchedulesInputSchema)
			])
		})
		.strict()

export const ProjectUpsertWithoutRoomSchedulesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutRoomSchedulesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ProjectUpdateWithoutRoomSchedulesInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutRoomSchedulesInputSchema)
			]),
			create: z.union([
				z.lazy(() => ProjectCreateWithoutRoomSchedulesInputSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutRoomSchedulesInputSchema)
			]),
			where: z.lazy(() => ProjectWhereInputSchema).optional()
		})
		.strict()

export const ProjectUpdateToOneWithWhereWithoutRoomSchedulesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRoomSchedulesInput> =
	z
		.object({
			where: z.lazy(() => ProjectWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ProjectUpdateWithoutRoomSchedulesInputSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutRoomSchedulesInputSchema)
			])
		})
		.strict()

export const ProjectUpdateWithoutRoomSchedulesInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutRoomSchedulesInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
			currencies: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional(),
			uploads: z.lazy(() => UploadUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUpdateManyWithoutProjectNestedInputSchema).optional()
		})
		.strict()

export const ProjectUncheckedUpdateWithoutRoomSchedulesInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutRoomSchedulesInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			icon: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			label: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			tags: z.union([z.lazy(() => ProjectUpdatetagsInputSchema), z.string().array()]).optional(),
			shortDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			longDescription: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			mainBenefits: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			additionalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			technicalInfo: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			usableArea: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			numPeople: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			roofType: z
				.union([
					z.lazy(() => RoofTypeSchema),
					z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			houseType: z
				.union([
					z.lazy(() => HouseTypeSchema),
					z.lazy(() => EnumHouseTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => StatusTypeSchema),
					z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			index: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			options: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			currencies: z
				.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema)
				.optional(),
			uploads: z.lazy(() => UploadUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			images: z.lazy(() => ImageUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
			videos: z.lazy(() => VideoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
		})
		.strict()

export const OptionCreateManyProjectInputSchema: z.ZodType<Prisma.OptionCreateManyProjectInput> = z
	.object({
		id: z.number().int().optional(),
		name: z.string(),
		description: z.string().optional().nullable(),
		price: z.number().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const CurrencyCreateManyProjectInputSchema: z.ZodType<Prisma.CurrencyCreateManyProjectInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			symbol: z.string(),
			exchange: z.number().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const UploadCreateManyProjectInputSchema: z.ZodType<Prisma.UploadCreateManyProjectInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string().optional().nullable(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const ImageCreateManyProjectInputSchema: z.ZodType<Prisma.ImageCreateManyProjectInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		imageType: z.lazy(() => ImageTypeSchema),
		homeTypeId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const VideoCreateManyProjectInputSchema: z.ZodType<Prisma.VideoCreateManyProjectInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const RoomScheduleCreateManyProjectInputSchema: z.ZodType<Prisma.RoomScheduleCreateManyProjectInput> =
	z
		.object({
			id: z.number().int().optional(),
			floorType: z.lazy(() => FloorTypeSchema),
			areaType: z.lazy(() => AreaTypeSchema),
			name: z.string(),
			area: z.number().optional().nullable(),
			unit: z.lazy(() => UnitTypeSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional()
		})
		.strict()

export const OptionUpdateWithoutProjectInputSchema: z.ZodType<Prisma.OptionUpdateWithoutProjectInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			description: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			price: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const OptionUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			description: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			price: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const OptionUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateManyWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			description: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			price: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const CurrencyUpdateWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUpdateWithoutProjectInput> =
	z
		.object({
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			symbol: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			exchange: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const CurrencyUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			symbol: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			exchange: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const CurrencyUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateManyWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			symbol: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			exchange: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const UploadUpdateWithoutProjectInputSchema: z.ZodType<Prisma.UploadUpdateWithoutProjectInput> =
	z
		.object({
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const UploadUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.UploadUncheckedUpdateWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const UploadUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.UploadUncheckedUpdateManyWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const ImageUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ImageUpdateWithoutProjectInput> =
	z
		.object({
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			imageType: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			homeType: z.lazy(() => HomeTypeUpdateOneWithoutImagesNestedInputSchema).optional()
		})
		.strict()

export const ImageUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			imageType: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			homeTypeId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const ImageUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			imageType: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			homeTypeId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const VideoUpdateWithoutProjectInputSchema: z.ZodType<Prisma.VideoUpdateWithoutProjectInput> =
	z
		.object({
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const VideoUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.VideoUncheckedUpdateWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const VideoUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.VideoUncheckedUpdateManyWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const RoomScheduleUpdateWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleUpdateWithoutProjectInput> =
	z
		.object({
			floorType: z
				.union([
					z.lazy(() => FloorTypeSchema),
					z.lazy(() => EnumFloorTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			areaType: z
				.union([
					z.lazy(() => AreaTypeSchema),
					z.lazy(() => EnumAreaTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			area: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			unit: z
				.union([
					z.lazy(() => UnitTypeSchema),
					z.lazy(() => EnumUnitTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const RoomScheduleUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleUncheckedUpdateWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			floorType: z
				.union([
					z.lazy(() => FloorTypeSchema),
					z.lazy(() => EnumFloorTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			areaType: z
				.union([
					z.lazy(() => AreaTypeSchema),
					z.lazy(() => EnumAreaTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			area: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			unit: z
				.union([
					z.lazy(() => UnitTypeSchema),
					z.lazy(() => EnumUnitTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const RoomScheduleUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.RoomScheduleUncheckedUpdateManyWithoutProjectInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			floorType: z
				.union([
					z.lazy(() => FloorTypeSchema),
					z.lazy(() => EnumFloorTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			areaType: z
				.union([
					z.lazy(() => AreaTypeSchema),
					z.lazy(() => EnumAreaTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			area: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			unit: z
				.union([
					z.lazy(() => UnitTypeSchema),
					z.lazy(() => EnumUnitTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const ImageCreateManyHomeTypeInputSchema: z.ZodType<Prisma.ImageCreateManyHomeTypeInput> = z
	.object({
		id: z.number().int().optional(),
		title: z.string().optional().nullable(),
		filename: z.string(),
		mimetype: z.string(),
		url: z.string(),
		hash: z.string(),
		alt: z.string().optional().nullable(),
		caption: z.string().optional().nullable(),
		highlighted: z.boolean().optional(),
		imageType: z.lazy(() => ImageTypeSchema),
		projectId: z.number().int(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict()

export const ImageUpdateWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageUpdateWithoutHomeTypeInput> =
	z
		.object({
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			imageType: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			project: z.lazy(() => ProjectUpdateOneRequiredWithoutImagesNestedInputSchema).optional()
		})
		.strict()

export const ImageUncheckedUpdateWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateWithoutHomeTypeInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			imageType: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

export const ImageUncheckedUpdateManyWithoutHomeTypeInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutHomeTypeInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			title: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			filename: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			mimetype: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			alt: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			caption: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			highlighted: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			imageType: z
				.union([
					z.lazy(() => ImageTypeSchema),
					z.lazy(() => EnumImageTypeFieldUpdateOperationsInputSchema)
				])
				.optional(),
			projectId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional()
		})
		.strict()

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ProjectFindFirstArgsSchema: z.ZodType<Prisma.ProjectFindFirstArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		where: ProjectWhereInputSchema.optional(),
		orderBy: z
			.union([ProjectOrderByWithRelationInputSchema.array(), ProjectOrderByWithRelationInputSchema])
			.optional(),
		cursor: ProjectWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const ProjectFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProjectFindFirstOrThrowArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		where: ProjectWhereInputSchema.optional(),
		orderBy: z
			.union([ProjectOrderByWithRelationInputSchema.array(), ProjectOrderByWithRelationInputSchema])
			.optional(),
		cursor: ProjectWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const ProjectFindManyArgsSchema: z.ZodType<Prisma.ProjectFindManyArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		where: ProjectWhereInputSchema.optional(),
		orderBy: z
			.union([ProjectOrderByWithRelationInputSchema.array(), ProjectOrderByWithRelationInputSchema])
			.optional(),
		cursor: ProjectWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const ProjectAggregateArgsSchema: z.ZodType<Prisma.ProjectAggregateArgs> = z
	.object({
		where: ProjectWhereInputSchema.optional(),
		orderBy: z
			.union([ProjectOrderByWithRelationInputSchema.array(), ProjectOrderByWithRelationInputSchema])
			.optional(),
		cursor: ProjectWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const ProjectGroupByArgsSchema: z.ZodType<Prisma.ProjectGroupByArgs> = z
	.object({
		where: ProjectWhereInputSchema.optional(),
		orderBy: z
			.union([
				ProjectOrderByWithAggregationInputSchema.array(),
				ProjectOrderByWithAggregationInputSchema
			])
			.optional(),
		by: ProjectScalarFieldEnumSchema.array(),
		having: ProjectScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const ProjectFindUniqueArgsSchema: z.ZodType<Prisma.ProjectFindUniqueArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		where: ProjectWhereUniqueInputSchema
	})
	.strict()

export const ProjectFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProjectFindUniqueOrThrowArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		where: ProjectWhereUniqueInputSchema
	})
	.strict()

export const HomeTypeFindFirstArgsSchema: z.ZodType<Prisma.HomeTypeFindFirstArgs> = z
	.object({
		select: HomeTypeSelectSchema.optional(),
		include: HomeTypeIncludeSchema.optional(),
		where: HomeTypeWhereInputSchema.optional(),
		orderBy: z
			.union([
				HomeTypeOrderByWithRelationInputSchema.array(),
				HomeTypeOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: HomeTypeWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([HomeTypeScalarFieldEnumSchema, HomeTypeScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const HomeTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HomeTypeFindFirstOrThrowArgs> = z
	.object({
		select: HomeTypeSelectSchema.optional(),
		include: HomeTypeIncludeSchema.optional(),
		where: HomeTypeWhereInputSchema.optional(),
		orderBy: z
			.union([
				HomeTypeOrderByWithRelationInputSchema.array(),
				HomeTypeOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: HomeTypeWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([HomeTypeScalarFieldEnumSchema, HomeTypeScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const HomeTypeFindManyArgsSchema: z.ZodType<Prisma.HomeTypeFindManyArgs> = z
	.object({
		select: HomeTypeSelectSchema.optional(),
		include: HomeTypeIncludeSchema.optional(),
		where: HomeTypeWhereInputSchema.optional(),
		orderBy: z
			.union([
				HomeTypeOrderByWithRelationInputSchema.array(),
				HomeTypeOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: HomeTypeWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([HomeTypeScalarFieldEnumSchema, HomeTypeScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const HomeTypeAggregateArgsSchema: z.ZodType<Prisma.HomeTypeAggregateArgs> = z
	.object({
		where: HomeTypeWhereInputSchema.optional(),
		orderBy: z
			.union([
				HomeTypeOrderByWithRelationInputSchema.array(),
				HomeTypeOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: HomeTypeWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const HomeTypeGroupByArgsSchema: z.ZodType<Prisma.HomeTypeGroupByArgs> = z
	.object({
		where: HomeTypeWhereInputSchema.optional(),
		orderBy: z
			.union([
				HomeTypeOrderByWithAggregationInputSchema.array(),
				HomeTypeOrderByWithAggregationInputSchema
			])
			.optional(),
		by: HomeTypeScalarFieldEnumSchema.array(),
		having: HomeTypeScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const HomeTypeFindUniqueArgsSchema: z.ZodType<Prisma.HomeTypeFindUniqueArgs> = z
	.object({
		select: HomeTypeSelectSchema.optional(),
		include: HomeTypeIncludeSchema.optional(),
		where: HomeTypeWhereUniqueInputSchema
	})
	.strict()

export const HomeTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HomeTypeFindUniqueOrThrowArgs> =
	z
		.object({
			select: HomeTypeSelectSchema.optional(),
			include: HomeTypeIncludeSchema.optional(),
			where: HomeTypeWhereUniqueInputSchema
		})
		.strict()

export const OptionFindFirstArgsSchema: z.ZodType<Prisma.OptionFindFirstArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		where: OptionWhereInputSchema.optional(),
		orderBy: z
			.union([OptionOrderByWithRelationInputSchema.array(), OptionOrderByWithRelationInputSchema])
			.optional(),
		cursor: OptionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([OptionScalarFieldEnumSchema, OptionScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const OptionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OptionFindFirstOrThrowArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		where: OptionWhereInputSchema.optional(),
		orderBy: z
			.union([OptionOrderByWithRelationInputSchema.array(), OptionOrderByWithRelationInputSchema])
			.optional(),
		cursor: OptionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([OptionScalarFieldEnumSchema, OptionScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const OptionFindManyArgsSchema: z.ZodType<Prisma.OptionFindManyArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		where: OptionWhereInputSchema.optional(),
		orderBy: z
			.union([OptionOrderByWithRelationInputSchema.array(), OptionOrderByWithRelationInputSchema])
			.optional(),
		cursor: OptionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([OptionScalarFieldEnumSchema, OptionScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const OptionAggregateArgsSchema: z.ZodType<Prisma.OptionAggregateArgs> = z
	.object({
		where: OptionWhereInputSchema.optional(),
		orderBy: z
			.union([OptionOrderByWithRelationInputSchema.array(), OptionOrderByWithRelationInputSchema])
			.optional(),
		cursor: OptionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const OptionGroupByArgsSchema: z.ZodType<Prisma.OptionGroupByArgs> = z
	.object({
		where: OptionWhereInputSchema.optional(),
		orderBy: z
			.union([
				OptionOrderByWithAggregationInputSchema.array(),
				OptionOrderByWithAggregationInputSchema
			])
			.optional(),
		by: OptionScalarFieldEnumSchema.array(),
		having: OptionScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const OptionFindUniqueArgsSchema: z.ZodType<Prisma.OptionFindUniqueArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		where: OptionWhereUniqueInputSchema
	})
	.strict()

export const OptionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OptionFindUniqueOrThrowArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		where: OptionWhereUniqueInputSchema
	})
	.strict()

export const CurrencyFindFirstArgsSchema: z.ZodType<Prisma.CurrencyFindFirstArgs> = z
	.object({
		select: CurrencySelectSchema.optional(),
		include: CurrencyIncludeSchema.optional(),
		where: CurrencyWhereInputSchema.optional(),
		orderBy: z
			.union([
				CurrencyOrderByWithRelationInputSchema.array(),
				CurrencyOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: CurrencyWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([CurrencyScalarFieldEnumSchema, CurrencyScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const CurrencyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CurrencyFindFirstOrThrowArgs> = z
	.object({
		select: CurrencySelectSchema.optional(),
		include: CurrencyIncludeSchema.optional(),
		where: CurrencyWhereInputSchema.optional(),
		orderBy: z
			.union([
				CurrencyOrderByWithRelationInputSchema.array(),
				CurrencyOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: CurrencyWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([CurrencyScalarFieldEnumSchema, CurrencyScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const CurrencyFindManyArgsSchema: z.ZodType<Prisma.CurrencyFindManyArgs> = z
	.object({
		select: CurrencySelectSchema.optional(),
		include: CurrencyIncludeSchema.optional(),
		where: CurrencyWhereInputSchema.optional(),
		orderBy: z
			.union([
				CurrencyOrderByWithRelationInputSchema.array(),
				CurrencyOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: CurrencyWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([CurrencyScalarFieldEnumSchema, CurrencyScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const CurrencyAggregateArgsSchema: z.ZodType<Prisma.CurrencyAggregateArgs> = z
	.object({
		where: CurrencyWhereInputSchema.optional(),
		orderBy: z
			.union([
				CurrencyOrderByWithRelationInputSchema.array(),
				CurrencyOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: CurrencyWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const CurrencyGroupByArgsSchema: z.ZodType<Prisma.CurrencyGroupByArgs> = z
	.object({
		where: CurrencyWhereInputSchema.optional(),
		orderBy: z
			.union([
				CurrencyOrderByWithAggregationInputSchema.array(),
				CurrencyOrderByWithAggregationInputSchema
			])
			.optional(),
		by: CurrencyScalarFieldEnumSchema.array(),
		having: CurrencyScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const CurrencyFindUniqueArgsSchema: z.ZodType<Prisma.CurrencyFindUniqueArgs> = z
	.object({
		select: CurrencySelectSchema.optional(),
		include: CurrencyIncludeSchema.optional(),
		where: CurrencyWhereUniqueInputSchema
	})
	.strict()

export const CurrencyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CurrencyFindUniqueOrThrowArgs> =
	z
		.object({
			select: CurrencySelectSchema.optional(),
			include: CurrencyIncludeSchema.optional(),
			where: CurrencyWhereUniqueInputSchema
		})
		.strict()

export const UploadFindFirstArgsSchema: z.ZodType<Prisma.UploadFindFirstArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		where: UploadWhereInputSchema.optional(),
		orderBy: z
			.union([UploadOrderByWithRelationInputSchema.array(), UploadOrderByWithRelationInputSchema])
			.optional(),
		cursor: UploadWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([UploadScalarFieldEnumSchema, UploadScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const UploadFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UploadFindFirstOrThrowArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		where: UploadWhereInputSchema.optional(),
		orderBy: z
			.union([UploadOrderByWithRelationInputSchema.array(), UploadOrderByWithRelationInputSchema])
			.optional(),
		cursor: UploadWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([UploadScalarFieldEnumSchema, UploadScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const UploadFindManyArgsSchema: z.ZodType<Prisma.UploadFindManyArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		where: UploadWhereInputSchema.optional(),
		orderBy: z
			.union([UploadOrderByWithRelationInputSchema.array(), UploadOrderByWithRelationInputSchema])
			.optional(),
		cursor: UploadWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([UploadScalarFieldEnumSchema, UploadScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const UploadAggregateArgsSchema: z.ZodType<Prisma.UploadAggregateArgs> = z
	.object({
		where: UploadWhereInputSchema.optional(),
		orderBy: z
			.union([UploadOrderByWithRelationInputSchema.array(), UploadOrderByWithRelationInputSchema])
			.optional(),
		cursor: UploadWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const UploadGroupByArgsSchema: z.ZodType<Prisma.UploadGroupByArgs> = z
	.object({
		where: UploadWhereInputSchema.optional(),
		orderBy: z
			.union([
				UploadOrderByWithAggregationInputSchema.array(),
				UploadOrderByWithAggregationInputSchema
			])
			.optional(),
		by: UploadScalarFieldEnumSchema.array(),
		having: UploadScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const UploadFindUniqueArgsSchema: z.ZodType<Prisma.UploadFindUniqueArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		where: UploadWhereUniqueInputSchema
	})
	.strict()

export const UploadFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UploadFindUniqueOrThrowArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		where: UploadWhereUniqueInputSchema
	})
	.strict()

export const ImageFindFirstArgsSchema: z.ZodType<Prisma.ImageFindFirstArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		where: ImageWhereInputSchema.optional(),
		orderBy: z
			.union([ImageOrderByWithRelationInputSchema.array(), ImageOrderByWithRelationInputSchema])
			.optional(),
		cursor: ImageWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const ImageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ImageFindFirstOrThrowArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		where: ImageWhereInputSchema.optional(),
		orderBy: z
			.union([ImageOrderByWithRelationInputSchema.array(), ImageOrderByWithRelationInputSchema])
			.optional(),
		cursor: ImageWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const ImageFindManyArgsSchema: z.ZodType<Prisma.ImageFindManyArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		where: ImageWhereInputSchema.optional(),
		orderBy: z
			.union([ImageOrderByWithRelationInputSchema.array(), ImageOrderByWithRelationInputSchema])
			.optional(),
		cursor: ImageWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const ImageAggregateArgsSchema: z.ZodType<Prisma.ImageAggregateArgs> = z
	.object({
		where: ImageWhereInputSchema.optional(),
		orderBy: z
			.union([ImageOrderByWithRelationInputSchema.array(), ImageOrderByWithRelationInputSchema])
			.optional(),
		cursor: ImageWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const ImageGroupByArgsSchema: z.ZodType<Prisma.ImageGroupByArgs> = z
	.object({
		where: ImageWhereInputSchema.optional(),
		orderBy: z
			.union([
				ImageOrderByWithAggregationInputSchema.array(),
				ImageOrderByWithAggregationInputSchema
			])
			.optional(),
		by: ImageScalarFieldEnumSchema.array(),
		having: ImageScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const ImageFindUniqueArgsSchema: z.ZodType<Prisma.ImageFindUniqueArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		where: ImageWhereUniqueInputSchema
	})
	.strict()

export const ImageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ImageFindUniqueOrThrowArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		where: ImageWhereUniqueInputSchema
	})
	.strict()

export const VideoFindFirstArgsSchema: z.ZodType<Prisma.VideoFindFirstArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		where: VideoWhereInputSchema.optional(),
		orderBy: z
			.union([VideoOrderByWithRelationInputSchema.array(), VideoOrderByWithRelationInputSchema])
			.optional(),
		cursor: VideoWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([VideoScalarFieldEnumSchema, VideoScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const VideoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VideoFindFirstOrThrowArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		where: VideoWhereInputSchema.optional(),
		orderBy: z
			.union([VideoOrderByWithRelationInputSchema.array(), VideoOrderByWithRelationInputSchema])
			.optional(),
		cursor: VideoWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([VideoScalarFieldEnumSchema, VideoScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const VideoFindManyArgsSchema: z.ZodType<Prisma.VideoFindManyArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		where: VideoWhereInputSchema.optional(),
		orderBy: z
			.union([VideoOrderByWithRelationInputSchema.array(), VideoOrderByWithRelationInputSchema])
			.optional(),
		cursor: VideoWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([VideoScalarFieldEnumSchema, VideoScalarFieldEnumSchema.array()]).optional()
	})
	.strict()

export const VideoAggregateArgsSchema: z.ZodType<Prisma.VideoAggregateArgs> = z
	.object({
		where: VideoWhereInputSchema.optional(),
		orderBy: z
			.union([VideoOrderByWithRelationInputSchema.array(), VideoOrderByWithRelationInputSchema])
			.optional(),
		cursor: VideoWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const VideoGroupByArgsSchema: z.ZodType<Prisma.VideoGroupByArgs> = z
	.object({
		where: VideoWhereInputSchema.optional(),
		orderBy: z
			.union([
				VideoOrderByWithAggregationInputSchema.array(),
				VideoOrderByWithAggregationInputSchema
			])
			.optional(),
		by: VideoScalarFieldEnumSchema.array(),
		having: VideoScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const VideoFindUniqueArgsSchema: z.ZodType<Prisma.VideoFindUniqueArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		where: VideoWhereUniqueInputSchema
	})
	.strict()

export const VideoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VideoFindUniqueOrThrowArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		where: VideoWhereUniqueInputSchema
	})
	.strict()

export const RoomScheduleFindFirstArgsSchema: z.ZodType<Prisma.RoomScheduleFindFirstArgs> = z
	.object({
		select: RoomScheduleSelectSchema.optional(),
		include: RoomScheduleIncludeSchema.optional(),
		where: RoomScheduleWhereInputSchema.optional(),
		orderBy: z
			.union([
				RoomScheduleOrderByWithRelationInputSchema.array(),
				RoomScheduleOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: RoomScheduleWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([RoomScheduleScalarFieldEnumSchema, RoomScheduleScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const RoomScheduleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoomScheduleFindFirstOrThrowArgs> =
	z
		.object({
			select: RoomScheduleSelectSchema.optional(),
			include: RoomScheduleIncludeSchema.optional(),
			where: RoomScheduleWhereInputSchema.optional(),
			orderBy: z
				.union([
					RoomScheduleOrderByWithRelationInputSchema.array(),
					RoomScheduleOrderByWithRelationInputSchema
				])
				.optional(),
			cursor: RoomScheduleWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([RoomScheduleScalarFieldEnumSchema, RoomScheduleScalarFieldEnumSchema.array()])
				.optional()
		})
		.strict()

export const RoomScheduleFindManyArgsSchema: z.ZodType<Prisma.RoomScheduleFindManyArgs> = z
	.object({
		select: RoomScheduleSelectSchema.optional(),
		include: RoomScheduleIncludeSchema.optional(),
		where: RoomScheduleWhereInputSchema.optional(),
		orderBy: z
			.union([
				RoomScheduleOrderByWithRelationInputSchema.array(),
				RoomScheduleOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: RoomScheduleWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([RoomScheduleScalarFieldEnumSchema, RoomScheduleScalarFieldEnumSchema.array()])
			.optional()
	})
	.strict()

export const RoomScheduleAggregateArgsSchema: z.ZodType<Prisma.RoomScheduleAggregateArgs> = z
	.object({
		where: RoomScheduleWhereInputSchema.optional(),
		orderBy: z
			.union([
				RoomScheduleOrderByWithRelationInputSchema.array(),
				RoomScheduleOrderByWithRelationInputSchema
			])
			.optional(),
		cursor: RoomScheduleWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const RoomScheduleGroupByArgsSchema: z.ZodType<Prisma.RoomScheduleGroupByArgs> = z
	.object({
		where: RoomScheduleWhereInputSchema.optional(),
		orderBy: z
			.union([
				RoomScheduleOrderByWithAggregationInputSchema.array(),
				RoomScheduleOrderByWithAggregationInputSchema
			])
			.optional(),
		by: RoomScheduleScalarFieldEnumSchema.array(),
		having: RoomScheduleScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional()
	})
	.strict()

export const RoomScheduleFindUniqueArgsSchema: z.ZodType<Prisma.RoomScheduleFindUniqueArgs> = z
	.object({
		select: RoomScheduleSelectSchema.optional(),
		include: RoomScheduleIncludeSchema.optional(),
		where: RoomScheduleWhereUniqueInputSchema
	})
	.strict()

export const RoomScheduleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoomScheduleFindUniqueOrThrowArgs> =
	z
		.object({
			select: RoomScheduleSelectSchema.optional(),
			include: RoomScheduleIncludeSchema.optional(),
			where: RoomScheduleWhereUniqueInputSchema
		})
		.strict()

export const ProjectCreateArgsSchema: z.ZodType<Prisma.ProjectCreateArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		data: z.union([ProjectCreateInputSchema, ProjectUncheckedCreateInputSchema])
	})
	.strict()

export const ProjectUpsertArgsSchema: z.ZodType<Prisma.ProjectUpsertArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		where: ProjectWhereUniqueInputSchema,
		create: z.union([ProjectCreateInputSchema, ProjectUncheckedCreateInputSchema]),
		update: z.union([ProjectUpdateInputSchema, ProjectUncheckedUpdateInputSchema])
	})
	.strict()

export const ProjectCreateManyArgsSchema: z.ZodType<Prisma.ProjectCreateManyArgs> = z
	.object({
		data: z.union([ProjectCreateManyInputSchema, ProjectCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const ProjectCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([ProjectCreateManyInputSchema, ProjectCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const ProjectDeleteArgsSchema: z.ZodType<Prisma.ProjectDeleteArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		where: ProjectWhereUniqueInputSchema
	})
	.strict()

export const ProjectUpdateArgsSchema: z.ZodType<Prisma.ProjectUpdateArgs> = z
	.object({
		select: ProjectSelectSchema.optional(),
		include: ProjectIncludeSchema.optional(),
		data: z.union([ProjectUpdateInputSchema, ProjectUncheckedUpdateInputSchema]),
		where: ProjectWhereUniqueInputSchema
	})
	.strict()

export const ProjectUpdateManyArgsSchema: z.ZodType<Prisma.ProjectUpdateManyArgs> = z
	.object({
		data: z.union([ProjectUpdateManyMutationInputSchema, ProjectUncheckedUpdateManyInputSchema]),
		where: ProjectWhereInputSchema.optional()
	})
	.strict()

export const ProjectDeleteManyArgsSchema: z.ZodType<Prisma.ProjectDeleteManyArgs> = z
	.object({
		where: ProjectWhereInputSchema.optional()
	})
	.strict()

export const HomeTypeCreateArgsSchema: z.ZodType<Prisma.HomeTypeCreateArgs> = z
	.object({
		select: HomeTypeSelectSchema.optional(),
		include: HomeTypeIncludeSchema.optional(),
		data: z.union([HomeTypeCreateInputSchema, HomeTypeUncheckedCreateInputSchema])
	})
	.strict()

export const HomeTypeUpsertArgsSchema: z.ZodType<Prisma.HomeTypeUpsertArgs> = z
	.object({
		select: HomeTypeSelectSchema.optional(),
		include: HomeTypeIncludeSchema.optional(),
		where: HomeTypeWhereUniqueInputSchema,
		create: z.union([HomeTypeCreateInputSchema, HomeTypeUncheckedCreateInputSchema]),
		update: z.union([HomeTypeUpdateInputSchema, HomeTypeUncheckedUpdateInputSchema])
	})
	.strict()

export const HomeTypeCreateManyArgsSchema: z.ZodType<Prisma.HomeTypeCreateManyArgs> = z
	.object({
		data: z.union([HomeTypeCreateManyInputSchema, HomeTypeCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const HomeTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HomeTypeCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([HomeTypeCreateManyInputSchema, HomeTypeCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const HomeTypeDeleteArgsSchema: z.ZodType<Prisma.HomeTypeDeleteArgs> = z
	.object({
		select: HomeTypeSelectSchema.optional(),
		include: HomeTypeIncludeSchema.optional(),
		where: HomeTypeWhereUniqueInputSchema
	})
	.strict()

export const HomeTypeUpdateArgsSchema: z.ZodType<Prisma.HomeTypeUpdateArgs> = z
	.object({
		select: HomeTypeSelectSchema.optional(),
		include: HomeTypeIncludeSchema.optional(),
		data: z.union([HomeTypeUpdateInputSchema, HomeTypeUncheckedUpdateInputSchema]),
		where: HomeTypeWhereUniqueInputSchema
	})
	.strict()

export const HomeTypeUpdateManyArgsSchema: z.ZodType<Prisma.HomeTypeUpdateManyArgs> = z
	.object({
		data: z.union([HomeTypeUpdateManyMutationInputSchema, HomeTypeUncheckedUpdateManyInputSchema]),
		where: HomeTypeWhereInputSchema.optional()
	})
	.strict()

export const HomeTypeDeleteManyArgsSchema: z.ZodType<Prisma.HomeTypeDeleteManyArgs> = z
	.object({
		where: HomeTypeWhereInputSchema.optional()
	})
	.strict()

export const OptionCreateArgsSchema: z.ZodType<Prisma.OptionCreateArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		data: z.union([OptionCreateInputSchema, OptionUncheckedCreateInputSchema])
	})
	.strict()

export const OptionUpsertArgsSchema: z.ZodType<Prisma.OptionUpsertArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		where: OptionWhereUniqueInputSchema,
		create: z.union([OptionCreateInputSchema, OptionUncheckedCreateInputSchema]),
		update: z.union([OptionUpdateInputSchema, OptionUncheckedUpdateInputSchema])
	})
	.strict()

export const OptionCreateManyArgsSchema: z.ZodType<Prisma.OptionCreateManyArgs> = z
	.object({
		data: z.union([OptionCreateManyInputSchema, OptionCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const OptionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OptionCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([OptionCreateManyInputSchema, OptionCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const OptionDeleteArgsSchema: z.ZodType<Prisma.OptionDeleteArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		where: OptionWhereUniqueInputSchema
	})
	.strict()

export const OptionUpdateArgsSchema: z.ZodType<Prisma.OptionUpdateArgs> = z
	.object({
		select: OptionSelectSchema.optional(),
		include: OptionIncludeSchema.optional(),
		data: z.union([OptionUpdateInputSchema, OptionUncheckedUpdateInputSchema]),
		where: OptionWhereUniqueInputSchema
	})
	.strict()

export const OptionUpdateManyArgsSchema: z.ZodType<Prisma.OptionUpdateManyArgs> = z
	.object({
		data: z.union([OptionUpdateManyMutationInputSchema, OptionUncheckedUpdateManyInputSchema]),
		where: OptionWhereInputSchema.optional()
	})
	.strict()

export const OptionDeleteManyArgsSchema: z.ZodType<Prisma.OptionDeleteManyArgs> = z
	.object({
		where: OptionWhereInputSchema.optional()
	})
	.strict()

export const CurrencyCreateArgsSchema: z.ZodType<Prisma.CurrencyCreateArgs> = z
	.object({
		select: CurrencySelectSchema.optional(),
		include: CurrencyIncludeSchema.optional(),
		data: z.union([CurrencyCreateInputSchema, CurrencyUncheckedCreateInputSchema])
	})
	.strict()

export const CurrencyUpsertArgsSchema: z.ZodType<Prisma.CurrencyUpsertArgs> = z
	.object({
		select: CurrencySelectSchema.optional(),
		include: CurrencyIncludeSchema.optional(),
		where: CurrencyWhereUniqueInputSchema,
		create: z.union([CurrencyCreateInputSchema, CurrencyUncheckedCreateInputSchema]),
		update: z.union([CurrencyUpdateInputSchema, CurrencyUncheckedUpdateInputSchema])
	})
	.strict()

export const CurrencyCreateManyArgsSchema: z.ZodType<Prisma.CurrencyCreateManyArgs> = z
	.object({
		data: z.union([CurrencyCreateManyInputSchema, CurrencyCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const CurrencyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CurrencyCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([CurrencyCreateManyInputSchema, CurrencyCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const CurrencyDeleteArgsSchema: z.ZodType<Prisma.CurrencyDeleteArgs> = z
	.object({
		select: CurrencySelectSchema.optional(),
		include: CurrencyIncludeSchema.optional(),
		where: CurrencyWhereUniqueInputSchema
	})
	.strict()

export const CurrencyUpdateArgsSchema: z.ZodType<Prisma.CurrencyUpdateArgs> = z
	.object({
		select: CurrencySelectSchema.optional(),
		include: CurrencyIncludeSchema.optional(),
		data: z.union([CurrencyUpdateInputSchema, CurrencyUncheckedUpdateInputSchema]),
		where: CurrencyWhereUniqueInputSchema
	})
	.strict()

export const CurrencyUpdateManyArgsSchema: z.ZodType<Prisma.CurrencyUpdateManyArgs> = z
	.object({
		data: z.union([CurrencyUpdateManyMutationInputSchema, CurrencyUncheckedUpdateManyInputSchema]),
		where: CurrencyWhereInputSchema.optional()
	})
	.strict()

export const CurrencyDeleteManyArgsSchema: z.ZodType<Prisma.CurrencyDeleteManyArgs> = z
	.object({
		where: CurrencyWhereInputSchema.optional()
	})
	.strict()

export const UploadCreateArgsSchema: z.ZodType<Prisma.UploadCreateArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		data: z.union([UploadCreateInputSchema, UploadUncheckedCreateInputSchema])
	})
	.strict()

export const UploadUpsertArgsSchema: z.ZodType<Prisma.UploadUpsertArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		where: UploadWhereUniqueInputSchema,
		create: z.union([UploadCreateInputSchema, UploadUncheckedCreateInputSchema]),
		update: z.union([UploadUpdateInputSchema, UploadUncheckedUpdateInputSchema])
	})
	.strict()

export const UploadCreateManyArgsSchema: z.ZodType<Prisma.UploadCreateManyArgs> = z
	.object({
		data: z.union([UploadCreateManyInputSchema, UploadCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const UploadCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UploadCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([UploadCreateManyInputSchema, UploadCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const UploadDeleteArgsSchema: z.ZodType<Prisma.UploadDeleteArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		where: UploadWhereUniqueInputSchema
	})
	.strict()

export const UploadUpdateArgsSchema: z.ZodType<Prisma.UploadUpdateArgs> = z
	.object({
		select: UploadSelectSchema.optional(),
		include: UploadIncludeSchema.optional(),
		data: z.union([UploadUpdateInputSchema, UploadUncheckedUpdateInputSchema]),
		where: UploadWhereUniqueInputSchema
	})
	.strict()

export const UploadUpdateManyArgsSchema: z.ZodType<Prisma.UploadUpdateManyArgs> = z
	.object({
		data: z.union([UploadUpdateManyMutationInputSchema, UploadUncheckedUpdateManyInputSchema]),
		where: UploadWhereInputSchema.optional()
	})
	.strict()

export const UploadDeleteManyArgsSchema: z.ZodType<Prisma.UploadDeleteManyArgs> = z
	.object({
		where: UploadWhereInputSchema.optional()
	})
	.strict()

export const ImageCreateArgsSchema: z.ZodType<Prisma.ImageCreateArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		data: z.union([ImageCreateInputSchema, ImageUncheckedCreateInputSchema])
	})
	.strict()

export const ImageUpsertArgsSchema: z.ZodType<Prisma.ImageUpsertArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		where: ImageWhereUniqueInputSchema,
		create: z.union([ImageCreateInputSchema, ImageUncheckedCreateInputSchema]),
		update: z.union([ImageUpdateInputSchema, ImageUncheckedUpdateInputSchema])
	})
	.strict()

export const ImageCreateManyArgsSchema: z.ZodType<Prisma.ImageCreateManyArgs> = z
	.object({
		data: z.union([ImageCreateManyInputSchema, ImageCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const ImageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ImageCreateManyAndReturnArgs> = z
	.object({
		data: z.union([ImageCreateManyInputSchema, ImageCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const ImageDeleteArgsSchema: z.ZodType<Prisma.ImageDeleteArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		where: ImageWhereUniqueInputSchema
	})
	.strict()

export const ImageUpdateArgsSchema: z.ZodType<Prisma.ImageUpdateArgs> = z
	.object({
		select: ImageSelectSchema.optional(),
		include: ImageIncludeSchema.optional(),
		data: z.union([ImageUpdateInputSchema, ImageUncheckedUpdateInputSchema]),
		where: ImageWhereUniqueInputSchema
	})
	.strict()

export const ImageUpdateManyArgsSchema: z.ZodType<Prisma.ImageUpdateManyArgs> = z
	.object({
		data: z.union([ImageUpdateManyMutationInputSchema, ImageUncheckedUpdateManyInputSchema]),
		where: ImageWhereInputSchema.optional()
	})
	.strict()

export const ImageDeleteManyArgsSchema: z.ZodType<Prisma.ImageDeleteManyArgs> = z
	.object({
		where: ImageWhereInputSchema.optional()
	})
	.strict()

export const VideoCreateArgsSchema: z.ZodType<Prisma.VideoCreateArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		data: z.union([VideoCreateInputSchema, VideoUncheckedCreateInputSchema])
	})
	.strict()

export const VideoUpsertArgsSchema: z.ZodType<Prisma.VideoUpsertArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		where: VideoWhereUniqueInputSchema,
		create: z.union([VideoCreateInputSchema, VideoUncheckedCreateInputSchema]),
		update: z.union([VideoUpdateInputSchema, VideoUncheckedUpdateInputSchema])
	})
	.strict()

export const VideoCreateManyArgsSchema: z.ZodType<Prisma.VideoCreateManyArgs> = z
	.object({
		data: z.union([VideoCreateManyInputSchema, VideoCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const VideoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VideoCreateManyAndReturnArgs> = z
	.object({
		data: z.union([VideoCreateManyInputSchema, VideoCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const VideoDeleteArgsSchema: z.ZodType<Prisma.VideoDeleteArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		where: VideoWhereUniqueInputSchema
	})
	.strict()

export const VideoUpdateArgsSchema: z.ZodType<Prisma.VideoUpdateArgs> = z
	.object({
		select: VideoSelectSchema.optional(),
		include: VideoIncludeSchema.optional(),
		data: z.union([VideoUpdateInputSchema, VideoUncheckedUpdateInputSchema]),
		where: VideoWhereUniqueInputSchema
	})
	.strict()

export const VideoUpdateManyArgsSchema: z.ZodType<Prisma.VideoUpdateManyArgs> = z
	.object({
		data: z.union([VideoUpdateManyMutationInputSchema, VideoUncheckedUpdateManyInputSchema]),
		where: VideoWhereInputSchema.optional()
	})
	.strict()

export const VideoDeleteManyArgsSchema: z.ZodType<Prisma.VideoDeleteManyArgs> = z
	.object({
		where: VideoWhereInputSchema.optional()
	})
	.strict()

export const RoomScheduleCreateArgsSchema: z.ZodType<Prisma.RoomScheduleCreateArgs> = z
	.object({
		select: RoomScheduleSelectSchema.optional(),
		include: RoomScheduleIncludeSchema.optional(),
		data: z.union([RoomScheduleCreateInputSchema, RoomScheduleUncheckedCreateInputSchema])
	})
	.strict()

export const RoomScheduleUpsertArgsSchema: z.ZodType<Prisma.RoomScheduleUpsertArgs> = z
	.object({
		select: RoomScheduleSelectSchema.optional(),
		include: RoomScheduleIncludeSchema.optional(),
		where: RoomScheduleWhereUniqueInputSchema,
		create: z.union([RoomScheduleCreateInputSchema, RoomScheduleUncheckedCreateInputSchema]),
		update: z.union([RoomScheduleUpdateInputSchema, RoomScheduleUncheckedUpdateInputSchema])
	})
	.strict()

export const RoomScheduleCreateManyArgsSchema: z.ZodType<Prisma.RoomScheduleCreateManyArgs> = z
	.object({
		data: z.union([RoomScheduleCreateManyInputSchema, RoomScheduleCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const RoomScheduleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoomScheduleCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([RoomScheduleCreateManyInputSchema, RoomScheduleCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional()
		})
		.strict()

export const RoomScheduleDeleteArgsSchema: z.ZodType<Prisma.RoomScheduleDeleteArgs> = z
	.object({
		select: RoomScheduleSelectSchema.optional(),
		include: RoomScheduleIncludeSchema.optional(),
		where: RoomScheduleWhereUniqueInputSchema
	})
	.strict()

export const RoomScheduleUpdateArgsSchema: z.ZodType<Prisma.RoomScheduleUpdateArgs> = z
	.object({
		select: RoomScheduleSelectSchema.optional(),
		include: RoomScheduleIncludeSchema.optional(),
		data: z.union([RoomScheduleUpdateInputSchema, RoomScheduleUncheckedUpdateInputSchema]),
		where: RoomScheduleWhereUniqueInputSchema
	})
	.strict()

export const RoomScheduleUpdateManyArgsSchema: z.ZodType<Prisma.RoomScheduleUpdateManyArgs> = z
	.object({
		data: z.union([
			RoomScheduleUpdateManyMutationInputSchema,
			RoomScheduleUncheckedUpdateManyInputSchema
		]),
		where: RoomScheduleWhereInputSchema.optional()
	})
	.strict()

export const RoomScheduleDeleteManyArgsSchema: z.ZodType<Prisma.RoomScheduleDeleteManyArgs> = z
	.object({
		where: RoomScheduleWhereInputSchema.optional()
	})
	.strict()
