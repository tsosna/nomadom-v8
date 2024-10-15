import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ProjectScalarFieldEnumSchema = z.enum(['id','name','icon','label','tags','shortDescription','longDescription','mainBenefits','additionalInfo','usableArea','numPeople','roofType','status','createdAt','updatedAt']);

export const TechnicalInfoScalarFieldEnumSchema = z.enum(['id','key','value','projectId','createdAt','updatedAt']);

export const ElevationScalarFieldEnumSchema = z.enum(['id','url','hash','alt','caption','projectId','facadeType','variantType','orientation','createdAt','updatedAt']);

export const VisualizationScalarFieldEnumSchema = z.enum(['id','url','hash','alt','caption','projectId','facadeType','variantType','orientation','createdAt','updatedAt']);

export const PlotLocationScalarFieldEnumSchema = z.enum(['id','url','hash','alt','caption','projectId','variantType','orientation','createdAt','updatedAt']);

export const PlanScalarFieldEnumSchema = z.enum(['id','url','hash','alt','caption','projectId','variantType','orientation','createdAt','updatedAt']);

export const InteriorScalarFieldEnumSchema = z.enum(['id','url','hash','alt','caption','projectId','dimension','createdAt','updatedAt']);

export const OptionScalarFieldEnumSchema = z.enum(['id','name','description','price','projectId','createdAt','updatedAt']);

export const CurrencyScalarFieldEnumSchema = z.enum(['id','name','symbol','exchange','projectId','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const StatusTypeSchema = z.enum(['DRAFT','PUBLISHED','ARCHIVED']);

export type StatusTypeType = `${z.infer<typeof StatusTypeSchema>}`

export const HouseTypeSchema = z.enum(['SINGLE_FAMILY','MULTI_FAMILY','SEMI_DETACHED','DETACHED','DUPLEX','APARTMENT','STUDIO','LOFT','PENTHOUSE','GARDEN_HOUSE','COTTAGE','BUNGALOW','VILLA','MANSION']);

export type HouseTypeType = `${z.infer<typeof HouseTypeSchema>}`

export const RoofTypeSchema = z.enum(['FLAT','PITCHED']);

export type RoofTypeType = `${z.infer<typeof RoofTypeSchema>}`

export const FacadeTypeSchema = z.enum(['SHEET_METAL','PLASTER','BRICK','WOOD_LIGHT','WOOD_DARK']);

export type FacadeTypeType = `${z.infer<typeof FacadeTypeSchema>}`

export const DimensionTypeSchema = z.enum(['D2','D3']);

export type DimensionTypeType = `${z.infer<typeof DimensionTypeSchema>}`

export const VariantTypeSchema = z.enum(['DEFAULT','MIRROR']);

export type VariantTypeType = `${z.infer<typeof VariantTypeSchema>}`

export const OrientationTypeSchema = z.enum(['WEST','EAST','NORTH','SOUTH']);

export type OrientationTypeType = `${z.infer<typeof OrientationTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
  roofType: RoofTypeSchema,
  status: StatusTypeSchema,
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().nullable(),
  tags: z.string().array(),
  shortDescription: z.string().nullable(),
  longDescription: z.string().nullable(),
  mainBenefits: z.string().nullable(),
  additionalInfo: z.string().nullable(),
  usableArea: z.number().nullable(),
  numPeople: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Project = z.infer<typeof ProjectSchema>

/////////////////////////////////////////
// TECHNICAL INFO SCHEMA
/////////////////////////////////////////

export const TechnicalInfoSchema = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TechnicalInfo = z.infer<typeof TechnicalInfoSchema>

/////////////////////////////////////////
// ELEVATION SCHEMA
/////////////////////////////////////////

export const ElevationSchema = z.object({
  facadeType: FacadeTypeSchema,
  variantType: VariantTypeSchema,
  orientation: OrientationTypeSchema.nullable(),
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().nullable(),
  caption: z.string().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Elevation = z.infer<typeof ElevationSchema>

/////////////////////////////////////////
// VISUALIZATION SCHEMA
/////////////////////////////////////////

export const VisualizationSchema = z.object({
  facadeType: FacadeTypeSchema,
  variantType: VariantTypeSchema,
  orientation: OrientationTypeSchema.nullable(),
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().nullable(),
  caption: z.string().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Visualization = z.infer<typeof VisualizationSchema>

/////////////////////////////////////////
// PLOT LOCATION SCHEMA
/////////////////////////////////////////

export const PlotLocationSchema = z.object({
  variantType: VariantTypeSchema,
  orientation: OrientationTypeSchema.nullable(),
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().nullable(),
  caption: z.string().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type PlotLocation = z.infer<typeof PlotLocationSchema>

/////////////////////////////////////////
// PLAN SCHEMA
/////////////////////////////////////////

export const PlanSchema = z.object({
  variantType: VariantTypeSchema,
  orientation: OrientationTypeSchema.nullable(),
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().nullable(),
  caption: z.string().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Plan = z.infer<typeof PlanSchema>

/////////////////////////////////////////
// INTERIOR SCHEMA
/////////////////////////////////////////

export const InteriorSchema = z.object({
  dimension: DimensionTypeSchema,
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().nullable(),
  caption: z.string().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Interior = z.infer<typeof InteriorSchema>

/////////////////////////////////////////
// OPTION SCHEMA
/////////////////////////////////////////

export const OptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Option = z.infer<typeof OptionSchema>

/////////////////////////////////////////
// CURRENCY SCHEMA
/////////////////////////////////////////

export const CurrencySchema = z.object({
  id: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchange: z.number().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Currency = z.infer<typeof CurrencySchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PROJECT
//------------------------------------------------------

export const ProjectIncludeSchema: z.ZodType<Prisma.ProjectInclude> = z.object({
  technicalInfo: z.union([z.boolean(),z.lazy(() => TechnicalInfoFindManyArgsSchema)]).optional(),
  elevation: z.union([z.boolean(),z.lazy(() => ElevationFindManyArgsSchema)]).optional(),
  visualization: z.union([z.boolean(),z.lazy(() => VisualizationFindManyArgsSchema)]).optional(),
  plan: z.union([z.boolean(),z.lazy(() => PlanFindManyArgsSchema)]).optional(),
  interior: z.union([z.boolean(),z.lazy(() => InteriorFindManyArgsSchema)]).optional(),
  plotLocation: z.union([z.boolean(),z.lazy(() => PlotLocationFindManyArgsSchema)]).optional(),
  option: z.union([z.boolean(),z.lazy(() => OptionFindManyArgsSchema)]).optional(),
  currency: z.union([z.boolean(),z.lazy(() => CurrencyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProjectArgsSchema: z.ZodType<Prisma.ProjectDefaultArgs> = z.object({
  select: z.lazy(() => ProjectSelectSchema).optional(),
  include: z.lazy(() => ProjectIncludeSchema).optional(),
}).strict();

export const ProjectCountOutputTypeArgsSchema: z.ZodType<Prisma.ProjectCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProjectCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProjectCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = z.object({
  technicalInfo: z.boolean().optional(),
  elevation: z.boolean().optional(),
  visualization: z.boolean().optional(),
  plan: z.boolean().optional(),
  interior: z.boolean().optional(),
  plotLocation: z.boolean().optional(),
  option: z.boolean().optional(),
  currency: z.boolean().optional(),
}).strict();

export const ProjectSelectSchema: z.ZodType<Prisma.ProjectSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  icon: z.boolean().optional(),
  label: z.boolean().optional(),
  tags: z.boolean().optional(),
  shortDescription: z.boolean().optional(),
  longDescription: z.boolean().optional(),
  mainBenefits: z.boolean().optional(),
  additionalInfo: z.boolean().optional(),
  usableArea: z.boolean().optional(),
  numPeople: z.boolean().optional(),
  roofType: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  technicalInfo: z.union([z.boolean(),z.lazy(() => TechnicalInfoFindManyArgsSchema)]).optional(),
  elevation: z.union([z.boolean(),z.lazy(() => ElevationFindManyArgsSchema)]).optional(),
  visualization: z.union([z.boolean(),z.lazy(() => VisualizationFindManyArgsSchema)]).optional(),
  plan: z.union([z.boolean(),z.lazy(() => PlanFindManyArgsSchema)]).optional(),
  interior: z.union([z.boolean(),z.lazy(() => InteriorFindManyArgsSchema)]).optional(),
  plotLocation: z.union([z.boolean(),z.lazy(() => PlotLocationFindManyArgsSchema)]).optional(),
  option: z.union([z.boolean(),z.lazy(() => OptionFindManyArgsSchema)]).optional(),
  currency: z.union([z.boolean(),z.lazy(() => CurrencyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TECHNICAL INFO
//------------------------------------------------------

export const TechnicalInfoIncludeSchema: z.ZodType<Prisma.TechnicalInfoInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const TechnicalInfoArgsSchema: z.ZodType<Prisma.TechnicalInfoDefaultArgs> = z.object({
  select: z.lazy(() => TechnicalInfoSelectSchema).optional(),
  include: z.lazy(() => TechnicalInfoIncludeSchema).optional(),
}).strict();

export const TechnicalInfoSelectSchema: z.ZodType<Prisma.TechnicalInfoSelect> = z.object({
  id: z.boolean().optional(),
  key: z.boolean().optional(),
  value: z.boolean().optional(),
  projectId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

// ELEVATION
//------------------------------------------------------

export const ElevationIncludeSchema: z.ZodType<Prisma.ElevationInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const ElevationArgsSchema: z.ZodType<Prisma.ElevationDefaultArgs> = z.object({
  select: z.lazy(() => ElevationSelectSchema).optional(),
  include: z.lazy(() => ElevationIncludeSchema).optional(),
}).strict();

export const ElevationSelectSchema: z.ZodType<Prisma.ElevationSelect> = z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  hash: z.boolean().optional(),
  alt: z.boolean().optional(),
  caption: z.boolean().optional(),
  projectId: z.boolean().optional(),
  facadeType: z.boolean().optional(),
  variantType: z.boolean().optional(),
  orientation: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

// VISUALIZATION
//------------------------------------------------------

export const VisualizationIncludeSchema: z.ZodType<Prisma.VisualizationInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const VisualizationArgsSchema: z.ZodType<Prisma.VisualizationDefaultArgs> = z.object({
  select: z.lazy(() => VisualizationSelectSchema).optional(),
  include: z.lazy(() => VisualizationIncludeSchema).optional(),
}).strict();

export const VisualizationSelectSchema: z.ZodType<Prisma.VisualizationSelect> = z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  hash: z.boolean().optional(),
  alt: z.boolean().optional(),
  caption: z.boolean().optional(),
  projectId: z.boolean().optional(),
  facadeType: z.boolean().optional(),
  variantType: z.boolean().optional(),
  orientation: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

// PLOT LOCATION
//------------------------------------------------------

export const PlotLocationIncludeSchema: z.ZodType<Prisma.PlotLocationInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const PlotLocationArgsSchema: z.ZodType<Prisma.PlotLocationDefaultArgs> = z.object({
  select: z.lazy(() => PlotLocationSelectSchema).optional(),
  include: z.lazy(() => PlotLocationIncludeSchema).optional(),
}).strict();

export const PlotLocationSelectSchema: z.ZodType<Prisma.PlotLocationSelect> = z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  hash: z.boolean().optional(),
  alt: z.boolean().optional(),
  caption: z.boolean().optional(),
  projectId: z.boolean().optional(),
  variantType: z.boolean().optional(),
  orientation: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

// PLAN
//------------------------------------------------------

export const PlanIncludeSchema: z.ZodType<Prisma.PlanInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const PlanArgsSchema: z.ZodType<Prisma.PlanDefaultArgs> = z.object({
  select: z.lazy(() => PlanSelectSchema).optional(),
  include: z.lazy(() => PlanIncludeSchema).optional(),
}).strict();

export const PlanSelectSchema: z.ZodType<Prisma.PlanSelect> = z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  hash: z.boolean().optional(),
  alt: z.boolean().optional(),
  caption: z.boolean().optional(),
  projectId: z.boolean().optional(),
  variantType: z.boolean().optional(),
  orientation: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

// INTERIOR
//------------------------------------------------------

export const InteriorIncludeSchema: z.ZodType<Prisma.InteriorInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const InteriorArgsSchema: z.ZodType<Prisma.InteriorDefaultArgs> = z.object({
  select: z.lazy(() => InteriorSelectSchema).optional(),
  include: z.lazy(() => InteriorIncludeSchema).optional(),
}).strict();

export const InteriorSelectSchema: z.ZodType<Prisma.InteriorSelect> = z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  hash: z.boolean().optional(),
  alt: z.boolean().optional(),
  caption: z.boolean().optional(),
  projectId: z.boolean().optional(),
  dimension: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

// OPTION
//------------------------------------------------------

export const OptionIncludeSchema: z.ZodType<Prisma.OptionInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const OptionArgsSchema: z.ZodType<Prisma.OptionDefaultArgs> = z.object({
  select: z.lazy(() => OptionSelectSchema).optional(),
  include: z.lazy(() => OptionIncludeSchema).optional(),
}).strict();

export const OptionSelectSchema: z.ZodType<Prisma.OptionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  projectId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

// CURRENCY
//------------------------------------------------------

export const CurrencyIncludeSchema: z.ZodType<Prisma.CurrencyInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const CurrencyArgsSchema: z.ZodType<Prisma.CurrencyDefaultArgs> = z.object({
  select: z.lazy(() => CurrencySelectSchema).optional(),
  include: z.lazy(() => CurrencyIncludeSchema).optional(),
}).strict();

export const CurrencySelectSchema: z.ZodType<Prisma.CurrencySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  symbol: z.boolean().optional(),
  exchange: z.boolean().optional(),
  projectId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ProjectWhereInputSchema: z.ZodType<Prisma.ProjectWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  shortDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  longDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mainBenefits: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  additionalInfo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  usableArea: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  numPeople: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => EnumRoofTypeFilterSchema),z.lazy(() => RoofTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumStatusTypeFilterSchema),z.lazy(() => StatusTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoListRelationFilterSchema).optional(),
  elevation: z.lazy(() => ElevationListRelationFilterSchema).optional(),
  visualization: z.lazy(() => VisualizationListRelationFilterSchema).optional(),
  plan: z.lazy(() => PlanListRelationFilterSchema).optional(),
  interior: z.lazy(() => InteriorListRelationFilterSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationListRelationFilterSchema).optional(),
  option: z.lazy(() => OptionListRelationFilterSchema).optional(),
  currency: z.lazy(() => CurrencyListRelationFilterSchema).optional()
}).strict();

export const ProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  longDescription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mainBenefits: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  additionalInfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usableArea: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  numPeople: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  roofType: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoOrderByRelationAggregateInputSchema).optional(),
  elevation: z.lazy(() => ElevationOrderByRelationAggregateInputSchema).optional(),
  visualization: z.lazy(() => VisualizationOrderByRelationAggregateInputSchema).optional(),
  plan: z.lazy(() => PlanOrderByRelationAggregateInputSchema).optional(),
  interior: z.lazy(() => InteriorOrderByRelationAggregateInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationOrderByRelationAggregateInputSchema).optional(),
  option: z.lazy(() => OptionOrderByRelationAggregateInputSchema).optional(),
  currency: z.lazy(() => CurrencyOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProjectWhereUniqueInputSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  shortDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  longDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mainBenefits: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  additionalInfo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  usableArea: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  numPeople: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => EnumRoofTypeFilterSchema),z.lazy(() => RoofTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumStatusTypeFilterSchema),z.lazy(() => StatusTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoListRelationFilterSchema).optional(),
  elevation: z.lazy(() => ElevationListRelationFilterSchema).optional(),
  visualization: z.lazy(() => VisualizationListRelationFilterSchema).optional(),
  plan: z.lazy(() => PlanListRelationFilterSchema).optional(),
  interior: z.lazy(() => InteriorListRelationFilterSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationListRelationFilterSchema).optional(),
  option: z.lazy(() => OptionListRelationFilterSchema).optional(),
  currency: z.lazy(() => CurrencyListRelationFilterSchema).optional()
}).strict());

export const ProjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  longDescription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mainBenefits: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  additionalInfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usableArea: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  numPeople: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  roofType: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProjectAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProjectSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProjectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  shortDescription: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  longDescription: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mainBenefits: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  additionalInfo: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  usableArea: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  numPeople: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => EnumRoofTypeWithAggregatesFilterSchema),z.lazy(() => RoofTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumStatusTypeWithAggregatesFilterSchema),z.lazy(() => StatusTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TechnicalInfoWhereInputSchema: z.ZodType<Prisma.TechnicalInfoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TechnicalInfoWhereInputSchema),z.lazy(() => TechnicalInfoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TechnicalInfoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TechnicalInfoWhereInputSchema),z.lazy(() => TechnicalInfoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export const TechnicalInfoOrderByWithRelationInputSchema: z.ZodType<Prisma.TechnicalInfoOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export const TechnicalInfoWhereUniqueInputSchema: z.ZodType<Prisma.TechnicalInfoWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TechnicalInfoWhereInputSchema),z.lazy(() => TechnicalInfoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TechnicalInfoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TechnicalInfoWhereInputSchema),z.lazy(() => TechnicalInfoWhereInputSchema).array() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export const TechnicalInfoOrderByWithAggregationInputSchema: z.ZodType<Prisma.TechnicalInfoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TechnicalInfoCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TechnicalInfoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TechnicalInfoMinOrderByAggregateInputSchema).optional()
}).strict();

export const TechnicalInfoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TechnicalInfoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TechnicalInfoScalarWhereWithAggregatesInputSchema),z.lazy(() => TechnicalInfoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TechnicalInfoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TechnicalInfoScalarWhereWithAggregatesInputSchema),z.lazy(() => TechnicalInfoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  key: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ElevationWhereInputSchema: z.ZodType<Prisma.ElevationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ElevationWhereInputSchema),z.lazy(() => ElevationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ElevationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ElevationWhereInputSchema),z.lazy(() => ElevationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  facadeType: z.union([ z.lazy(() => EnumFacadeTypeFilterSchema),z.lazy(() => FacadeTypeSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export const ElevationOrderByWithRelationInputSchema: z.ZodType<Prisma.ElevationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export const ElevationWhereUniqueInputSchema: z.ZodType<Prisma.ElevationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    hash: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    hash: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  hash: z.string().optional(),
  AND: z.union([ z.lazy(() => ElevationWhereInputSchema),z.lazy(() => ElevationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ElevationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ElevationWhereInputSchema),z.lazy(() => ElevationWhereInputSchema).array() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  facadeType: z.union([ z.lazy(() => EnumFacadeTypeFilterSchema),z.lazy(() => FacadeTypeSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export const ElevationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ElevationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ElevationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ElevationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ElevationMinOrderByAggregateInputSchema).optional()
}).strict();

export const ElevationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ElevationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema),z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema),z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  facadeType: z.union([ z.lazy(() => EnumFacadeTypeWithAggregatesFilterSchema),z.lazy(() => FacadeTypeSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeWithAggregatesFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableWithAggregatesFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VisualizationWhereInputSchema: z.ZodType<Prisma.VisualizationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VisualizationWhereInputSchema),z.lazy(() => VisualizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisualizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisualizationWhereInputSchema),z.lazy(() => VisualizationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  facadeType: z.union([ z.lazy(() => EnumFacadeTypeFilterSchema),z.lazy(() => FacadeTypeSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export const VisualizationOrderByWithRelationInputSchema: z.ZodType<Prisma.VisualizationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export const VisualizationWhereUniqueInputSchema: z.ZodType<Prisma.VisualizationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    hash: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    hash: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  hash: z.string().optional(),
  AND: z.union([ z.lazy(() => VisualizationWhereInputSchema),z.lazy(() => VisualizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisualizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisualizationWhereInputSchema),z.lazy(() => VisualizationWhereInputSchema).array() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  facadeType: z.union([ z.lazy(() => EnumFacadeTypeFilterSchema),z.lazy(() => FacadeTypeSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export const VisualizationOrderByWithAggregationInputSchema: z.ZodType<Prisma.VisualizationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VisualizationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VisualizationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VisualizationMinOrderByAggregateInputSchema).optional()
}).strict();

export const VisualizationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VisualizationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VisualizationScalarWhereWithAggregatesInputSchema),z.lazy(() => VisualizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisualizationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisualizationScalarWhereWithAggregatesInputSchema),z.lazy(() => VisualizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  facadeType: z.union([ z.lazy(() => EnumFacadeTypeWithAggregatesFilterSchema),z.lazy(() => FacadeTypeSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeWithAggregatesFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableWithAggregatesFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PlotLocationWhereInputSchema: z.ZodType<Prisma.PlotLocationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlotLocationWhereInputSchema),z.lazy(() => PlotLocationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlotLocationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlotLocationWhereInputSchema),z.lazy(() => PlotLocationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export const PlotLocationOrderByWithRelationInputSchema: z.ZodType<Prisma.PlotLocationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export const PlotLocationWhereUniqueInputSchema: z.ZodType<Prisma.PlotLocationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    hash: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    hash: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  hash: z.string().optional(),
  AND: z.union([ z.lazy(() => PlotLocationWhereInputSchema),z.lazy(() => PlotLocationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlotLocationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlotLocationWhereInputSchema),z.lazy(() => PlotLocationWhereInputSchema).array() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export const PlotLocationOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlotLocationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PlotLocationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PlotLocationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PlotLocationMinOrderByAggregateInputSchema).optional()
}).strict();

export const PlotLocationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlotLocationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PlotLocationScalarWhereWithAggregatesInputSchema),z.lazy(() => PlotLocationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlotLocationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlotLocationScalarWhereWithAggregatesInputSchema),z.lazy(() => PlotLocationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeWithAggregatesFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableWithAggregatesFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PlanWhereInputSchema: z.ZodType<Prisma.PlanWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlanWhereInputSchema),z.lazy(() => PlanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlanWhereInputSchema),z.lazy(() => PlanWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export const PlanOrderByWithRelationInputSchema: z.ZodType<Prisma.PlanOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export const PlanWhereUniqueInputSchema: z.ZodType<Prisma.PlanWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    hash: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    hash: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  hash: z.string().optional(),
  AND: z.union([ z.lazy(() => PlanWhereInputSchema),z.lazy(() => PlanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlanWhereInputSchema),z.lazy(() => PlanWhereInputSchema).array() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export const PlanOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlanOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PlanCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PlanMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PlanMinOrderByAggregateInputSchema).optional()
}).strict();

export const PlanScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlanScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PlanScalarWhereWithAggregatesInputSchema),z.lazy(() => PlanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlanScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlanScalarWhereWithAggregatesInputSchema),z.lazy(() => PlanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeWithAggregatesFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableWithAggregatesFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InteriorWhereInputSchema: z.ZodType<Prisma.InteriorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InteriorWhereInputSchema),z.lazy(() => InteriorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InteriorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InteriorWhereInputSchema),z.lazy(() => InteriorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dimension: z.union([ z.lazy(() => EnumDimensionTypeFilterSchema),z.lazy(() => DimensionTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export const InteriorOrderByWithRelationInputSchema: z.ZodType<Prisma.InteriorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  dimension: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export const InteriorWhereUniqueInputSchema: z.ZodType<Prisma.InteriorWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    hash: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    hash: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  hash: z.string().optional(),
  AND: z.union([ z.lazy(() => InteriorWhereInputSchema),z.lazy(() => InteriorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InteriorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InteriorWhereInputSchema),z.lazy(() => InteriorWhereInputSchema).array() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dimension: z.union([ z.lazy(() => EnumDimensionTypeFilterSchema),z.lazy(() => DimensionTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export const InteriorOrderByWithAggregationInputSchema: z.ZodType<Prisma.InteriorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  dimension: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InteriorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InteriorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InteriorMinOrderByAggregateInputSchema).optional()
}).strict();

export const InteriorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InteriorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InteriorScalarWhereWithAggregatesInputSchema),z.lazy(() => InteriorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InteriorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InteriorScalarWhereWithAggregatesInputSchema),z.lazy(() => InteriorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dimension: z.union([ z.lazy(() => EnumDimensionTypeWithAggregatesFilterSchema),z.lazy(() => DimensionTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OptionWhereInputSchema: z.ZodType<Prisma.OptionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OptionWhereInputSchema),z.lazy(() => OptionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OptionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OptionWhereInputSchema),z.lazy(() => OptionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export const OptionOrderByWithRelationInputSchema: z.ZodType<Prisma.OptionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export const OptionWhereUniqueInputSchema: z.ZodType<Prisma.OptionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => OptionWhereInputSchema),z.lazy(() => OptionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OptionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OptionWhereInputSchema),z.lazy(() => OptionWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export const OptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.OptionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OptionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OptionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OptionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OptionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OptionSumOrderByAggregateInputSchema).optional()
}).strict();

export const OptionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OptionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OptionScalarWhereWithAggregatesInputSchema),z.lazy(() => OptionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OptionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OptionScalarWhereWithAggregatesInputSchema),z.lazy(() => OptionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CurrencyWhereInputSchema: z.ZodType<Prisma.CurrencyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CurrencyWhereInputSchema),z.lazy(() => CurrencyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CurrencyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CurrencyWhereInputSchema),z.lazy(() => CurrencyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  exchange: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export const CurrencyOrderByWithRelationInputSchema: z.ZodType<Prisma.CurrencyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  exchange: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export const CurrencyWhereUniqueInputSchema: z.ZodType<Prisma.CurrencyWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CurrencyWhereInputSchema),z.lazy(() => CurrencyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CurrencyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CurrencyWhereInputSchema),z.lazy(() => CurrencyWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  exchange: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export const CurrencyOrderByWithAggregationInputSchema: z.ZodType<Prisma.CurrencyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  exchange: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CurrencyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CurrencyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CurrencyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CurrencyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CurrencySumOrderByAggregateInputSchema).optional()
}).strict();

export const CurrencyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CurrencyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema),z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema),z.lazy(() => CurrencyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  exchange: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProjectCreateInputSchema: z.ZodType<Prisma.ProjectCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUpdateInputSchema: z.ZodType<Prisma.ProjectUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectCreateManyInputSchema: z.ZodType<Prisma.ProjectCreateManyInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ProjectUpdateManyMutationInputSchema: z.ZodType<Prisma.ProjectUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProjectUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TechnicalInfoCreateInputSchema: z.ZodType<Prisma.TechnicalInfoCreateInput> = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutTechnicalInfoInputSchema)
}).strict();

export const TechnicalInfoUncheckedCreateInputSchema: z.ZodType<Prisma.TechnicalInfoUncheckedCreateInput> = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TechnicalInfoUpdateInputSchema: z.ZodType<Prisma.TechnicalInfoUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutTechnicalInfoNestedInputSchema).optional()
}).strict();

export const TechnicalInfoUncheckedUpdateInputSchema: z.ZodType<Prisma.TechnicalInfoUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TechnicalInfoCreateManyInputSchema: z.ZodType<Prisma.TechnicalInfoCreateManyInput> = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TechnicalInfoUpdateManyMutationInputSchema: z.ZodType<Prisma.TechnicalInfoUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TechnicalInfoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TechnicalInfoUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationCreateInputSchema: z.ZodType<Prisma.ElevationCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutElevationInputSchema)
}).strict();

export const ElevationUncheckedCreateInputSchema: z.ZodType<Prisma.ElevationUncheckedCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ElevationUpdateInputSchema: z.ZodType<Prisma.ElevationUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutElevationNestedInputSchema).optional()
}).strict();

export const ElevationUncheckedUpdateInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationCreateManyInputSchema: z.ZodType<Prisma.ElevationCreateManyInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ElevationUpdateManyMutationInputSchema: z.ZodType<Prisma.ElevationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VisualizationCreateInputSchema: z.ZodType<Prisma.VisualizationCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutVisualizationInputSchema)
}).strict();

export const VisualizationUncheckedCreateInputSchema: z.ZodType<Prisma.VisualizationUncheckedCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VisualizationUpdateInputSchema: z.ZodType<Prisma.VisualizationUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutVisualizationNestedInputSchema).optional()
}).strict();

export const VisualizationUncheckedUpdateInputSchema: z.ZodType<Prisma.VisualizationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VisualizationCreateManyInputSchema: z.ZodType<Prisma.VisualizationCreateManyInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VisualizationUpdateManyMutationInputSchema: z.ZodType<Prisma.VisualizationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VisualizationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VisualizationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlotLocationCreateInputSchema: z.ZodType<Prisma.PlotLocationCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutPlotLocationInputSchema)
}).strict();

export const PlotLocationUncheckedCreateInputSchema: z.ZodType<Prisma.PlotLocationUncheckedCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlotLocationUpdateInputSchema: z.ZodType<Prisma.PlotLocationUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutPlotLocationNestedInputSchema).optional()
}).strict();

export const PlotLocationUncheckedUpdateInputSchema: z.ZodType<Prisma.PlotLocationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlotLocationCreateManyInputSchema: z.ZodType<Prisma.PlotLocationCreateManyInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlotLocationUpdateManyMutationInputSchema: z.ZodType<Prisma.PlotLocationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlotLocationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlotLocationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanCreateInputSchema: z.ZodType<Prisma.PlanCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutPlanInputSchema)
}).strict();

export const PlanUncheckedCreateInputSchema: z.ZodType<Prisma.PlanUncheckedCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlanUpdateInputSchema: z.ZodType<Prisma.PlanUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutPlanNestedInputSchema).optional()
}).strict();

export const PlanUncheckedUpdateInputSchema: z.ZodType<Prisma.PlanUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanCreateManyInputSchema: z.ZodType<Prisma.PlanCreateManyInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlanUpdateManyMutationInputSchema: z.ZodType<Prisma.PlanUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlanUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InteriorCreateInputSchema: z.ZodType<Prisma.InteriorCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  dimension: z.lazy(() => DimensionTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutInteriorInputSchema)
}).strict();

export const InteriorUncheckedCreateInputSchema: z.ZodType<Prisma.InteriorUncheckedCreateInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  dimension: z.lazy(() => DimensionTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const InteriorUpdateInputSchema: z.ZodType<Prisma.InteriorUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dimension: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutInteriorNestedInputSchema).optional()
}).strict();

export const InteriorUncheckedUpdateInputSchema: z.ZodType<Prisma.InteriorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dimension: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InteriorCreateManyInputSchema: z.ZodType<Prisma.InteriorCreateManyInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  projectId: z.string(),
  dimension: z.lazy(() => DimensionTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const InteriorUpdateManyMutationInputSchema: z.ZodType<Prisma.InteriorUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dimension: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InteriorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InteriorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dimension: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OptionCreateInputSchema: z.ZodType<Prisma.OptionCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutOptionInputSchema)
}).strict();

export const OptionUncheckedCreateInputSchema: z.ZodType<Prisma.OptionUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OptionUpdateInputSchema: z.ZodType<Prisma.OptionUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutOptionNestedInputSchema).optional()
}).strict();

export const OptionUncheckedUpdateInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OptionCreateManyInputSchema: z.ZodType<Prisma.OptionCreateManyInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OptionUpdateManyMutationInputSchema: z.ZodType<Prisma.OptionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OptionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CurrencyCreateInputSchema: z.ZodType<Prisma.CurrencyCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchange: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutCurrencyInputSchema)
}).strict();

export const CurrencyUncheckedCreateInputSchema: z.ZodType<Prisma.CurrencyUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchange: z.number().optional().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CurrencyUpdateInputSchema: z.ZodType<Prisma.CurrencyUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  exchange: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutCurrencyNestedInputSchema).optional()
}).strict();

export const CurrencyUncheckedUpdateInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  exchange: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CurrencyCreateManyInputSchema: z.ZodType<Prisma.CurrencyCreateManyInput> = z.object({
  id: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchange: z.number().optional().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CurrencyUpdateManyMutationInputSchema: z.ZodType<Prisma.CurrencyUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  exchange: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CurrencyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  exchange: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumRoofTypeFilterSchema: z.ZodType<Prisma.EnumRoofTypeFilter> = z.object({
  equals: z.lazy(() => RoofTypeSchema).optional(),
  in: z.lazy(() => RoofTypeSchema).array().optional(),
  notIn: z.lazy(() => RoofTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => NestedEnumRoofTypeFilterSchema) ]).optional(),
}).strict();

export const EnumStatusTypeFilterSchema: z.ZodType<Prisma.EnumStatusTypeFilter> = z.object({
  equals: z.lazy(() => StatusTypeSchema).optional(),
  in: z.lazy(() => StatusTypeSchema).array().optional(),
  notIn: z.lazy(() => StatusTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => NestedEnumStatusTypeFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const TechnicalInfoListRelationFilterSchema: z.ZodType<Prisma.TechnicalInfoListRelationFilter> = z.object({
  every: z.lazy(() => TechnicalInfoWhereInputSchema).optional(),
  some: z.lazy(() => TechnicalInfoWhereInputSchema).optional(),
  none: z.lazy(() => TechnicalInfoWhereInputSchema).optional()
}).strict();

export const ElevationListRelationFilterSchema: z.ZodType<Prisma.ElevationListRelationFilter> = z.object({
  every: z.lazy(() => ElevationWhereInputSchema).optional(),
  some: z.lazy(() => ElevationWhereInputSchema).optional(),
  none: z.lazy(() => ElevationWhereInputSchema).optional()
}).strict();

export const VisualizationListRelationFilterSchema: z.ZodType<Prisma.VisualizationListRelationFilter> = z.object({
  every: z.lazy(() => VisualizationWhereInputSchema).optional(),
  some: z.lazy(() => VisualizationWhereInputSchema).optional(),
  none: z.lazy(() => VisualizationWhereInputSchema).optional()
}).strict();

export const PlanListRelationFilterSchema: z.ZodType<Prisma.PlanListRelationFilter> = z.object({
  every: z.lazy(() => PlanWhereInputSchema).optional(),
  some: z.lazy(() => PlanWhereInputSchema).optional(),
  none: z.lazy(() => PlanWhereInputSchema).optional()
}).strict();

export const InteriorListRelationFilterSchema: z.ZodType<Prisma.InteriorListRelationFilter> = z.object({
  every: z.lazy(() => InteriorWhereInputSchema).optional(),
  some: z.lazy(() => InteriorWhereInputSchema).optional(),
  none: z.lazy(() => InteriorWhereInputSchema).optional()
}).strict();

export const PlotLocationListRelationFilterSchema: z.ZodType<Prisma.PlotLocationListRelationFilter> = z.object({
  every: z.lazy(() => PlotLocationWhereInputSchema).optional(),
  some: z.lazy(() => PlotLocationWhereInputSchema).optional(),
  none: z.lazy(() => PlotLocationWhereInputSchema).optional()
}).strict();

export const OptionListRelationFilterSchema: z.ZodType<Prisma.OptionListRelationFilter> = z.object({
  every: z.lazy(() => OptionWhereInputSchema).optional(),
  some: z.lazy(() => OptionWhereInputSchema).optional(),
  none: z.lazy(() => OptionWhereInputSchema).optional()
}).strict();

export const CurrencyListRelationFilterSchema: z.ZodType<Prisma.CurrencyListRelationFilter> = z.object({
  every: z.lazy(() => CurrencyWhereInputSchema).optional(),
  some: z.lazy(() => CurrencyWhereInputSchema).optional(),
  none: z.lazy(() => CurrencyWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const TechnicalInfoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TechnicalInfoOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ElevationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ElevationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VisualizationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VisualizationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlanOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PlanOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InteriorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InteriorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlotLocationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PlotLocationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OptionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OptionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CurrencyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CurrencyOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.lazy(() => SortOrderSchema).optional(),
  longDescription: z.lazy(() => SortOrderSchema).optional(),
  mainBenefits: z.lazy(() => SortOrderSchema).optional(),
  additionalInfo: z.lazy(() => SortOrderSchema).optional(),
  usableArea: z.lazy(() => SortOrderSchema).optional(),
  numPeople: z.lazy(() => SortOrderSchema).optional(),
  roofType: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectAvgOrderByAggregateInput> = z.object({
  usableArea: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.lazy(() => SortOrderSchema).optional(),
  longDescription: z.lazy(() => SortOrderSchema).optional(),
  mainBenefits: z.lazy(() => SortOrderSchema).optional(),
  additionalInfo: z.lazy(() => SortOrderSchema).optional(),
  usableArea: z.lazy(() => SortOrderSchema).optional(),
  numPeople: z.lazy(() => SortOrderSchema).optional(),
  roofType: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.lazy(() => SortOrderSchema).optional(),
  longDescription: z.lazy(() => SortOrderSchema).optional(),
  mainBenefits: z.lazy(() => SortOrderSchema).optional(),
  additionalInfo: z.lazy(() => SortOrderSchema).optional(),
  usableArea: z.lazy(() => SortOrderSchema).optional(),
  numPeople: z.lazy(() => SortOrderSchema).optional(),
  roofType: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectSumOrderByAggregateInput> = z.object({
  usableArea: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const EnumRoofTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoofTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoofTypeSchema).optional(),
  in: z.lazy(() => RoofTypeSchema).array().optional(),
  notIn: z.lazy(() => RoofTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => NestedEnumRoofTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoofTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoofTypeFilterSchema).optional()
}).strict();

export const EnumStatusTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumStatusTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => StatusTypeSchema).optional(),
  in: z.lazy(() => StatusTypeSchema).array().optional(),
  notIn: z.lazy(() => StatusTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => NestedEnumStatusTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumStatusTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumStatusTypeFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ProjectRelationFilterSchema: z.ZodType<Prisma.ProjectRelationFilter> = z.object({
  is: z.lazy(() => ProjectWhereInputSchema).optional(),
  isNot: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const TechnicalInfoCountOrderByAggregateInputSchema: z.ZodType<Prisma.TechnicalInfoCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TechnicalInfoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TechnicalInfoMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TechnicalInfoMinOrderByAggregateInputSchema: z.ZodType<Prisma.TechnicalInfoMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumFacadeTypeFilterSchema: z.ZodType<Prisma.EnumFacadeTypeFilter> = z.object({
  equals: z.lazy(() => FacadeTypeSchema).optional(),
  in: z.lazy(() => FacadeTypeSchema).array().optional(),
  notIn: z.lazy(() => FacadeTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => NestedEnumFacadeTypeFilterSchema) ]).optional(),
}).strict();

export const EnumVariantTypeFilterSchema: z.ZodType<Prisma.EnumVariantTypeFilter> = z.object({
  equals: z.lazy(() => VariantTypeSchema).optional(),
  in: z.lazy(() => VariantTypeSchema).array().optional(),
  notIn: z.lazy(() => VariantTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => NestedEnumVariantTypeFilterSchema) ]).optional(),
}).strict();

export const EnumOrientationTypeNullableFilterSchema: z.ZodType<Prisma.EnumOrientationTypeNullableFilter> = z.object({
  equals: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  in: z.lazy(() => OrientationTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => OrientationTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NestedEnumOrientationTypeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ElevationCountOrderByAggregateInputSchema: z.ZodType<Prisma.ElevationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ElevationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ElevationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ElevationMinOrderByAggregateInputSchema: z.ZodType<Prisma.ElevationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumFacadeTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFacadeTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FacadeTypeSchema).optional(),
  in: z.lazy(() => FacadeTypeSchema).array().optional(),
  notIn: z.lazy(() => FacadeTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => NestedEnumFacadeTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFacadeTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFacadeTypeFilterSchema).optional()
}).strict();

export const EnumVariantTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumVariantTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => VariantTypeSchema).optional(),
  in: z.lazy(() => VariantTypeSchema).array().optional(),
  notIn: z.lazy(() => VariantTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => NestedEnumVariantTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumVariantTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumVariantTypeFilterSchema).optional()
}).strict();

export const EnumOrientationTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumOrientationTypeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  in: z.lazy(() => OrientationTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => OrientationTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NestedEnumOrientationTypeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrientationTypeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrientationTypeNullableFilterSchema).optional()
}).strict();

export const VisualizationCountOrderByAggregateInputSchema: z.ZodType<Prisma.VisualizationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VisualizationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VisualizationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VisualizationMinOrderByAggregateInputSchema: z.ZodType<Prisma.VisualizationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  facadeType: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlotLocationCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlotLocationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlotLocationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlotLocationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlotLocationMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlotLocationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlanCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlanCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlanMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlanMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlanMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlanMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  variantType: z.lazy(() => SortOrderSchema).optional(),
  orientation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumDimensionTypeFilterSchema: z.ZodType<Prisma.EnumDimensionTypeFilter> = z.object({
  equals: z.lazy(() => DimensionTypeSchema).optional(),
  in: z.lazy(() => DimensionTypeSchema).array().optional(),
  notIn: z.lazy(() => DimensionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => NestedEnumDimensionTypeFilterSchema) ]).optional(),
}).strict();

export const InteriorCountOrderByAggregateInputSchema: z.ZodType<Prisma.InteriorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  dimension: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InteriorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InteriorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  dimension: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InteriorMinOrderByAggregateInputSchema: z.ZodType<Prisma.InteriorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  dimension: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumDimensionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDimensionTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => DimensionTypeSchema).optional(),
  in: z.lazy(() => DimensionTypeSchema).array().optional(),
  notIn: z.lazy(() => DimensionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => NestedEnumDimensionTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDimensionTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDimensionTypeFilterSchema).optional()
}).strict();

export const OptionCountOrderByAggregateInputSchema: z.ZodType<Prisma.OptionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OptionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OptionAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OptionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OptionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OptionMinOrderByAggregateInputSchema: z.ZodType<Prisma.OptionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OptionSumOrderByAggregateInputSchema: z.ZodType<Prisma.OptionSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CurrencyCountOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  exchange: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CurrencyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencyAvgOrderByAggregateInput> = z.object({
  exchange: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CurrencyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  exchange: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CurrencyMinOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  exchange: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CurrencySumOrderByAggregateInputSchema: z.ZodType<Prisma.CurrencySumOrderByAggregateInput> = z.object({
  exchange: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectCreatetagsInputSchema: z.ZodType<Prisma.ProjectCreatetagsInput> = z.object({
  set: z.string().array()
}).strict();

export const TechnicalInfoCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema).array(),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TechnicalInfoCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TechnicalInfoCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TechnicalInfoCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ElevationCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ElevationCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => ElevationCreateWithoutProjectInputSchema),z.lazy(() => ElevationCreateWithoutProjectInputSchema).array(),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ElevationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ElevationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ElevationCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VisualizationCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => VisualizationCreateWithoutProjectInputSchema),z.lazy(() => VisualizationCreateWithoutProjectInputSchema).array(),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisualizationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => VisualizationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisualizationCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PlanCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PlanCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PlanCreateWithoutProjectInputSchema),z.lazy(() => PlanCreateWithoutProjectInputSchema).array(),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlanCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PlanCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlanCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InteriorCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.InteriorCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => InteriorCreateWithoutProjectInputSchema),z.lazy(() => InteriorCreateWithoutProjectInputSchema).array(),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InteriorCreateOrConnectWithoutProjectInputSchema),z.lazy(() => InteriorCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InteriorCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PlotLocationCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PlotLocationCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationCreateWithoutProjectInputSchema).array(),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlotLocationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PlotLocationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlotLocationCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OptionCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.OptionCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => OptionCreateWithoutProjectInputSchema),z.lazy(() => OptionCreateWithoutProjectInputSchema).array(),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema),z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OptionCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CurrencyCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => CurrencyCreateWithoutProjectInputSchema),z.lazy(() => CurrencyCreateWithoutProjectInputSchema).array(),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema),z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CurrencyCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema).array(),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TechnicalInfoCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TechnicalInfoCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TechnicalInfoCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ElevationUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ElevationUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => ElevationCreateWithoutProjectInputSchema),z.lazy(() => ElevationCreateWithoutProjectInputSchema).array(),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ElevationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ElevationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ElevationCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => VisualizationCreateWithoutProjectInputSchema),z.lazy(() => VisualizationCreateWithoutProjectInputSchema).array(),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisualizationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => VisualizationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisualizationCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PlanUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PlanUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PlanCreateWithoutProjectInputSchema),z.lazy(() => PlanCreateWithoutProjectInputSchema).array(),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlanCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PlanCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlanCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InteriorUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.InteriorUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => InteriorCreateWithoutProjectInputSchema),z.lazy(() => InteriorCreateWithoutProjectInputSchema).array(),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InteriorCreateOrConnectWithoutProjectInputSchema),z.lazy(() => InteriorCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InteriorCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PlotLocationCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationCreateWithoutProjectInputSchema).array(),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlotLocationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PlotLocationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlotLocationCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OptionUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.OptionUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => OptionCreateWithoutProjectInputSchema),z.lazy(() => OptionCreateWithoutProjectInputSchema).array(),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema),z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OptionCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => CurrencyCreateWithoutProjectInputSchema),z.lazy(() => CurrencyCreateWithoutProjectInputSchema).array(),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema),z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CurrencyCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const ProjectUpdatetagsInputSchema: z.ZodType<Prisma.ProjectUpdatetagsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const EnumRoofTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoofTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoofTypeSchema).optional()
}).strict();

export const EnumStatusTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStatusTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => StatusTypeSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const TechnicalInfoUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.TechnicalInfoUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema).array(),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TechnicalInfoCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TechnicalInfoCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TechnicalInfoUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TechnicalInfoCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TechnicalInfoUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TechnicalInfoUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TechnicalInfoScalarWhereInputSchema),z.lazy(() => TechnicalInfoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ElevationUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ElevationUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ElevationCreateWithoutProjectInputSchema),z.lazy(() => ElevationCreateWithoutProjectInputSchema).array(),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ElevationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ElevationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ElevationUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ElevationUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ElevationCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ElevationUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ElevationUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ElevationUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => ElevationUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ElevationScalarWhereInputSchema),z.lazy(() => ElevationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VisualizationUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.VisualizationUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => VisualizationCreateWithoutProjectInputSchema),z.lazy(() => VisualizationCreateWithoutProjectInputSchema).array(),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisualizationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => VisualizationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VisualizationUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => VisualizationUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisualizationCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VisualizationUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => VisualizationUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VisualizationUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => VisualizationUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VisualizationScalarWhereInputSchema),z.lazy(() => VisualizationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PlanUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PlanUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlanCreateWithoutProjectInputSchema),z.lazy(() => PlanCreateWithoutProjectInputSchema).array(),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlanCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PlanCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlanUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PlanUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlanCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlanUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PlanUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlanUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PlanUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlanScalarWhereInputSchema),z.lazy(() => PlanScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InteriorUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.InteriorUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => InteriorCreateWithoutProjectInputSchema),z.lazy(() => InteriorCreateWithoutProjectInputSchema).array(),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InteriorCreateOrConnectWithoutProjectInputSchema),z.lazy(() => InteriorCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InteriorUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => InteriorUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InteriorCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InteriorUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => InteriorUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InteriorUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => InteriorUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InteriorScalarWhereInputSchema),z.lazy(() => InteriorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PlotLocationUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PlotLocationUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlotLocationCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationCreateWithoutProjectInputSchema).array(),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlotLocationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PlotLocationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlotLocationUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PlotLocationUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlotLocationCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlotLocationUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PlotLocationUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlotLocationUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PlotLocationUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlotLocationScalarWhereInputSchema),z.lazy(() => PlotLocationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OptionUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.OptionUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => OptionCreateWithoutProjectInputSchema),z.lazy(() => OptionCreateWithoutProjectInputSchema).array(),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema),z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OptionUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => OptionUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OptionCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OptionUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => OptionUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OptionUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => OptionUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OptionScalarWhereInputSchema),z.lazy(() => OptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CurrencyUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.CurrencyUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => CurrencyCreateWithoutProjectInputSchema),z.lazy(() => CurrencyCreateWithoutProjectInputSchema).array(),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema),z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CurrencyCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CurrencyUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => CurrencyUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CurrencyScalarWhereInputSchema),z.lazy(() => CurrencyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema).array(),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TechnicalInfoCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TechnicalInfoCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TechnicalInfoUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TechnicalInfoCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TechnicalInfoWhereUniqueInputSchema),z.lazy(() => TechnicalInfoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TechnicalInfoUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TechnicalInfoUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TechnicalInfoScalarWhereInputSchema),z.lazy(() => TechnicalInfoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ElevationCreateWithoutProjectInputSchema),z.lazy(() => ElevationCreateWithoutProjectInputSchema).array(),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ElevationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ElevationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ElevationUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ElevationUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ElevationCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ElevationWhereUniqueInputSchema),z.lazy(() => ElevationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ElevationUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ElevationUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ElevationUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => ElevationUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ElevationScalarWhereInputSchema),z.lazy(() => ElevationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.VisualizationUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => VisualizationCreateWithoutProjectInputSchema),z.lazy(() => VisualizationCreateWithoutProjectInputSchema).array(),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisualizationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => VisualizationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VisualizationUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => VisualizationUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisualizationCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VisualizationWhereUniqueInputSchema),z.lazy(() => VisualizationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VisualizationUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => VisualizationUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VisualizationUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => VisualizationUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VisualizationScalarWhereInputSchema),z.lazy(() => VisualizationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PlanUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PlanUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlanCreateWithoutProjectInputSchema),z.lazy(() => PlanCreateWithoutProjectInputSchema).array(),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlanCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PlanCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlanUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PlanUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlanCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlanWhereUniqueInputSchema),z.lazy(() => PlanWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlanUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PlanUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlanUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PlanUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlanScalarWhereInputSchema),z.lazy(() => PlanScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.InteriorUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => InteriorCreateWithoutProjectInputSchema),z.lazy(() => InteriorCreateWithoutProjectInputSchema).array(),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InteriorCreateOrConnectWithoutProjectInputSchema),z.lazy(() => InteriorCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InteriorUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => InteriorUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InteriorCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InteriorWhereUniqueInputSchema),z.lazy(() => InteriorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InteriorUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => InteriorUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InteriorUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => InteriorUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InteriorScalarWhereInputSchema),z.lazy(() => InteriorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PlotLocationUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlotLocationCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationCreateWithoutProjectInputSchema).array(),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlotLocationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PlotLocationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlotLocationUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PlotLocationUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlotLocationCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlotLocationWhereUniqueInputSchema),z.lazy(() => PlotLocationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlotLocationUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PlotLocationUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlotLocationUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PlotLocationUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlotLocationScalarWhereInputSchema),z.lazy(() => PlotLocationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OptionUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => OptionCreateWithoutProjectInputSchema),z.lazy(() => OptionCreateWithoutProjectInputSchema).array(),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema),z.lazy(() => OptionCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OptionUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => OptionUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OptionCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OptionWhereUniqueInputSchema),z.lazy(() => OptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OptionUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => OptionUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OptionUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => OptionUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OptionScalarWhereInputSchema),z.lazy(() => OptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => CurrencyCreateWithoutProjectInputSchema),z.lazy(() => CurrencyCreateWithoutProjectInputSchema).array(),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema),z.lazy(() => CurrencyCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CurrencyCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CurrencyWhereUniqueInputSchema),z.lazy(() => CurrencyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CurrencyUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => CurrencyUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CurrencyScalarWhereInputSchema),z.lazy(() => CurrencyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProjectCreateNestedOneWithoutTechnicalInfoInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutTechnicalInfoInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTechnicalInfoInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTechnicalInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTechnicalInfoInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const ProjectUpdateOneRequiredWithoutTechnicalInfoNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTechnicalInfoNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTechnicalInfoInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTechnicalInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTechnicalInfoInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutTechnicalInfoInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutTechnicalInfoInputSchema),z.lazy(() => ProjectUpdateWithoutTechnicalInfoInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTechnicalInfoInputSchema) ]).optional(),
}).strict();

export const ProjectCreateNestedOneWithoutElevationInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutElevationInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutElevationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutElevationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutElevationInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const EnumFacadeTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFacadeTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => FacadeTypeSchema).optional()
}).strict();

export const EnumVariantTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumVariantTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => VariantTypeSchema).optional()
}).strict();

export const NullableEnumOrientationTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumOrientationTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => OrientationTypeSchema).optional().nullable()
}).strict();

export const ProjectUpdateOneRequiredWithoutElevationNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutElevationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutElevationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutElevationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutElevationInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutElevationInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutElevationInputSchema),z.lazy(() => ProjectUpdateWithoutElevationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutElevationInputSchema) ]).optional(),
}).strict();

export const ProjectCreateNestedOneWithoutVisualizationInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutVisualizationInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutVisualizationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutVisualizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutVisualizationInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const ProjectUpdateOneRequiredWithoutVisualizationNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutVisualizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutVisualizationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutVisualizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutVisualizationInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutVisualizationInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutVisualizationInputSchema),z.lazy(() => ProjectUpdateWithoutVisualizationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutVisualizationInputSchema) ]).optional(),
}).strict();

export const ProjectCreateNestedOneWithoutPlotLocationInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutPlotLocationInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPlotLocationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPlotLocationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPlotLocationInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const ProjectUpdateOneRequiredWithoutPlotLocationNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutPlotLocationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPlotLocationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPlotLocationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPlotLocationInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutPlotLocationInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutPlotLocationInputSchema),z.lazy(() => ProjectUpdateWithoutPlotLocationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPlotLocationInputSchema) ]).optional(),
}).strict();

export const ProjectCreateNestedOneWithoutPlanInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutPlanInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPlanInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPlanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPlanInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const ProjectUpdateOneRequiredWithoutPlanNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutPlanNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPlanInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPlanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPlanInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutPlanInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutPlanInputSchema),z.lazy(() => ProjectUpdateWithoutPlanInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPlanInputSchema) ]).optional(),
}).strict();

export const ProjectCreateNestedOneWithoutInteriorInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutInteriorInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutInteriorInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInteriorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInteriorInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const EnumDimensionTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDimensionTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => DimensionTypeSchema).optional()
}).strict();

export const ProjectUpdateOneRequiredWithoutInteriorNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutInteriorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutInteriorInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInteriorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInteriorInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutInteriorInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutInteriorInputSchema),z.lazy(() => ProjectUpdateWithoutInteriorInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInteriorInputSchema) ]).optional(),
}).strict();

export const ProjectCreateNestedOneWithoutOptionInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutOptionInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutOptionInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutOptionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutOptionInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const ProjectUpdateOneRequiredWithoutOptionNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutOptionNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutOptionInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutOptionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutOptionInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutOptionInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutOptionInputSchema),z.lazy(() => ProjectUpdateWithoutOptionInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutOptionInputSchema) ]).optional(),
}).strict();

export const ProjectCreateNestedOneWithoutCurrencyInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutCurrencyInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutCurrencyInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCurrencyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutCurrencyInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const ProjectUpdateOneRequiredWithoutCurrencyNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutCurrencyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutCurrencyInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCurrencyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutCurrencyInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutCurrencyInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutCurrencyInputSchema),z.lazy(() => ProjectUpdateWithoutCurrencyInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutCurrencyInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumRoofTypeFilterSchema: z.ZodType<Prisma.NestedEnumRoofTypeFilter> = z.object({
  equals: z.lazy(() => RoofTypeSchema).optional(),
  in: z.lazy(() => RoofTypeSchema).array().optional(),
  notIn: z.lazy(() => RoofTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => NestedEnumRoofTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumStatusTypeFilterSchema: z.ZodType<Prisma.NestedEnumStatusTypeFilter> = z.object({
  equals: z.lazy(() => StatusTypeSchema).optional(),
  in: z.lazy(() => StatusTypeSchema).array().optional(),
  notIn: z.lazy(() => StatusTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => NestedEnumStatusTypeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const NestedEnumRoofTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoofTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoofTypeSchema).optional(),
  in: z.lazy(() => RoofTypeSchema).array().optional(),
  notIn: z.lazy(() => RoofTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => NestedEnumRoofTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoofTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoofTypeFilterSchema).optional()
}).strict();

export const NestedEnumStatusTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumStatusTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => StatusTypeSchema).optional(),
  in: z.lazy(() => StatusTypeSchema).array().optional(),
  notIn: z.lazy(() => StatusTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => NestedEnumStatusTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumStatusTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumStatusTypeFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedEnumFacadeTypeFilterSchema: z.ZodType<Prisma.NestedEnumFacadeTypeFilter> = z.object({
  equals: z.lazy(() => FacadeTypeSchema).optional(),
  in: z.lazy(() => FacadeTypeSchema).array().optional(),
  notIn: z.lazy(() => FacadeTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => NestedEnumFacadeTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumVariantTypeFilterSchema: z.ZodType<Prisma.NestedEnumVariantTypeFilter> = z.object({
  equals: z.lazy(() => VariantTypeSchema).optional(),
  in: z.lazy(() => VariantTypeSchema).array().optional(),
  notIn: z.lazy(() => VariantTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => NestedEnumVariantTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumOrientationTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumOrientationTypeNullableFilter> = z.object({
  equals: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  in: z.lazy(() => OrientationTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => OrientationTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NestedEnumOrientationTypeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumFacadeTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFacadeTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FacadeTypeSchema).optional(),
  in: z.lazy(() => FacadeTypeSchema).array().optional(),
  notIn: z.lazy(() => FacadeTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => NestedEnumFacadeTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFacadeTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFacadeTypeFilterSchema).optional()
}).strict();

export const NestedEnumVariantTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumVariantTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => VariantTypeSchema).optional(),
  in: z.lazy(() => VariantTypeSchema).array().optional(),
  notIn: z.lazy(() => VariantTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => NestedEnumVariantTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumVariantTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumVariantTypeFilterSchema).optional()
}).strict();

export const NestedEnumOrientationTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumOrientationTypeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  in: z.lazy(() => OrientationTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => OrientationTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NestedEnumOrientationTypeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrientationTypeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrientationTypeNullableFilterSchema).optional()
}).strict();

export const NestedEnumDimensionTypeFilterSchema: z.ZodType<Prisma.NestedEnumDimensionTypeFilter> = z.object({
  equals: z.lazy(() => DimensionTypeSchema).optional(),
  in: z.lazy(() => DimensionTypeSchema).array().optional(),
  notIn: z.lazy(() => DimensionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => NestedEnumDimensionTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumDimensionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDimensionTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => DimensionTypeSchema).optional(),
  in: z.lazy(() => DimensionTypeSchema).array().optional(),
  notIn: z.lazy(() => DimensionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => NestedEnumDimensionTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDimensionTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDimensionTypeFilterSchema).optional()
}).strict();

export const TechnicalInfoCreateWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoCreateWithoutProjectInput> = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TechnicalInfoUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TechnicalInfoCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => TechnicalInfoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const TechnicalInfoCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.TechnicalInfoCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TechnicalInfoCreateManyProjectInputSchema),z.lazy(() => TechnicalInfoCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ElevationCreateWithoutProjectInputSchema: z.ZodType<Prisma.ElevationCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ElevationUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ElevationUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ElevationCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ElevationCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => ElevationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ElevationCreateWithoutProjectInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const ElevationCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ElevationCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ElevationCreateManyProjectInputSchema),z.lazy(() => ElevationCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const VisualizationCreateWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VisualizationUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VisualizationCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => VisualizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VisualizationCreateWithoutProjectInputSchema),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const VisualizationCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.VisualizationCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VisualizationCreateManyProjectInputSchema),z.lazy(() => VisualizationCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PlanCreateWithoutProjectInputSchema: z.ZodType<Prisma.PlanCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlanUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PlanUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlanCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PlanCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PlanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlanCreateWithoutProjectInputSchema),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const PlanCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PlanCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PlanCreateManyProjectInputSchema),z.lazy(() => PlanCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InteriorCreateWithoutProjectInputSchema: z.ZodType<Prisma.InteriorCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  dimension: z.lazy(() => DimensionTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const InteriorUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.InteriorUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  dimension: z.lazy(() => DimensionTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const InteriorCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.InteriorCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => InteriorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InteriorCreateWithoutProjectInputSchema),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const InteriorCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.InteriorCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InteriorCreateManyProjectInputSchema),z.lazy(() => InteriorCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PlotLocationCreateWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlotLocationUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlotLocationCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PlotLocationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlotLocationCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const PlotLocationCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PlotLocationCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PlotLocationCreateManyProjectInputSchema),z.lazy(() => PlotLocationCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const OptionCreateWithoutProjectInputSchema: z.ZodType<Prisma.OptionCreateWithoutProjectInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OptionUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.OptionUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OptionCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.OptionCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => OptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OptionCreateWithoutProjectInputSchema),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const OptionCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.OptionCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OptionCreateManyProjectInputSchema),z.lazy(() => OptionCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CurrencyCreateWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyCreateWithoutProjectInput> = z.object({
  id: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchange: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CurrencyUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchange: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CurrencyCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => CurrencyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CurrencyCreateWithoutProjectInputSchema),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const CurrencyCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.CurrencyCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CurrencyCreateManyProjectInputSchema),z.lazy(() => CurrencyCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TechnicalInfoUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => TechnicalInfoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TechnicalInfoUpdateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => TechnicalInfoCreateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const TechnicalInfoUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => TechnicalInfoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TechnicalInfoUpdateWithoutProjectInputSchema),z.lazy(() => TechnicalInfoUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const TechnicalInfoUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => TechnicalInfoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TechnicalInfoUpdateManyMutationInputSchema),z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export const TechnicalInfoScalarWhereInputSchema: z.ZodType<Prisma.TechnicalInfoScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TechnicalInfoScalarWhereInputSchema),z.lazy(() => TechnicalInfoScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TechnicalInfoScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TechnicalInfoScalarWhereInputSchema),z.lazy(() => TechnicalInfoScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ElevationUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ElevationUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ElevationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ElevationUpdateWithoutProjectInputSchema),z.lazy(() => ElevationUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ElevationCreateWithoutProjectInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const ElevationUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ElevationUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ElevationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ElevationUpdateWithoutProjectInputSchema),z.lazy(() => ElevationUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const ElevationUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ElevationUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => ElevationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ElevationUpdateManyMutationInputSchema),z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export const ElevationScalarWhereInputSchema: z.ZodType<Prisma.ElevationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ElevationScalarWhereInputSchema),z.lazy(() => ElevationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ElevationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ElevationScalarWhereInputSchema),z.lazy(() => ElevationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  facadeType: z.union([ z.lazy(() => EnumFacadeTypeFilterSchema),z.lazy(() => FacadeTypeSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VisualizationUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => VisualizationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VisualizationUpdateWithoutProjectInputSchema),z.lazy(() => VisualizationUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => VisualizationCreateWithoutProjectInputSchema),z.lazy(() => VisualizationUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const VisualizationUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => VisualizationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VisualizationUpdateWithoutProjectInputSchema),z.lazy(() => VisualizationUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const VisualizationUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => VisualizationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VisualizationUpdateManyMutationInputSchema),z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export const VisualizationScalarWhereInputSchema: z.ZodType<Prisma.VisualizationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VisualizationScalarWhereInputSchema),z.lazy(() => VisualizationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisualizationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisualizationScalarWhereInputSchema),z.lazy(() => VisualizationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  facadeType: z.union([ z.lazy(() => EnumFacadeTypeFilterSchema),z.lazy(() => FacadeTypeSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PlanUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PlanUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PlanWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PlanUpdateWithoutProjectInputSchema),z.lazy(() => PlanUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PlanCreateWithoutProjectInputSchema),z.lazy(() => PlanUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const PlanUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PlanUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PlanWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PlanUpdateWithoutProjectInputSchema),z.lazy(() => PlanUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const PlanUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PlanUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PlanScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PlanUpdateManyMutationInputSchema),z.lazy(() => PlanUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export const PlanScalarWhereInputSchema: z.ZodType<Prisma.PlanScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlanScalarWhereInputSchema),z.lazy(() => PlanScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlanScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlanScalarWhereInputSchema),z.lazy(() => PlanScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InteriorUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InteriorUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => InteriorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InteriorUpdateWithoutProjectInputSchema),z.lazy(() => InteriorUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => InteriorCreateWithoutProjectInputSchema),z.lazy(() => InteriorUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const InteriorUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InteriorUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => InteriorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InteriorUpdateWithoutProjectInputSchema),z.lazy(() => InteriorUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const InteriorUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.InteriorUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => InteriorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InteriorUpdateManyMutationInputSchema),z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export const InteriorScalarWhereInputSchema: z.ZodType<Prisma.InteriorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InteriorScalarWhereInputSchema),z.lazy(() => InteriorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InteriorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InteriorScalarWhereInputSchema),z.lazy(() => InteriorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dimension: z.union([ z.lazy(() => EnumDimensionTypeFilterSchema),z.lazy(() => DimensionTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PlotLocationUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PlotLocationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PlotLocationUpdateWithoutProjectInputSchema),z.lazy(() => PlotLocationUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PlotLocationCreateWithoutProjectInputSchema),z.lazy(() => PlotLocationUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const PlotLocationUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PlotLocationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PlotLocationUpdateWithoutProjectInputSchema),z.lazy(() => PlotLocationUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const PlotLocationUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PlotLocationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PlotLocationUpdateManyMutationInputSchema),z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export const PlotLocationScalarWhereInputSchema: z.ZodType<Prisma.PlotLocationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlotLocationScalarWhereInputSchema),z.lazy(() => PlotLocationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlotLocationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlotLocationScalarWhereInputSchema),z.lazy(() => PlotLocationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  variantType: z.union([ z.lazy(() => EnumVariantTypeFilterSchema),z.lazy(() => VariantTypeSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => EnumOrientationTypeNullableFilterSchema),z.lazy(() => OrientationTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OptionUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.OptionUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => OptionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OptionUpdateWithoutProjectInputSchema),z.lazy(() => OptionUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => OptionCreateWithoutProjectInputSchema),z.lazy(() => OptionUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const OptionUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.OptionUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => OptionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OptionUpdateWithoutProjectInputSchema),z.lazy(() => OptionUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const OptionUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.OptionUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => OptionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OptionUpdateManyMutationInputSchema),z.lazy(() => OptionUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export const OptionScalarWhereInputSchema: z.ZodType<Prisma.OptionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OptionScalarWhereInputSchema),z.lazy(() => OptionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OptionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OptionScalarWhereInputSchema),z.lazy(() => OptionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CurrencyUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => CurrencyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CurrencyUpdateWithoutProjectInputSchema),z.lazy(() => CurrencyUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => CurrencyCreateWithoutProjectInputSchema),z.lazy(() => CurrencyUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const CurrencyUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => CurrencyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CurrencyUpdateWithoutProjectInputSchema),z.lazy(() => CurrencyUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const CurrencyUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => CurrencyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CurrencyUpdateManyMutationInputSchema),z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export const CurrencyScalarWhereInputSchema: z.ZodType<Prisma.CurrencyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CurrencyScalarWhereInputSchema),z.lazy(() => CurrencyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CurrencyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CurrencyScalarWhereInputSchema),z.lazy(() => CurrencyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  exchange: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProjectCreateWithoutTechnicalInfoInputSchema: z.ZodType<Prisma.ProjectCreateWithoutTechnicalInfoInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  elevation: z.lazy(() => ElevationCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateWithoutTechnicalInfoInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutTechnicalInfoInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectCreateOrConnectWithoutTechnicalInfoInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTechnicalInfoInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTechnicalInfoInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTechnicalInfoInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutTechnicalInfoInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutTechnicalInfoInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutTechnicalInfoInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTechnicalInfoInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTechnicalInfoInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTechnicalInfoInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutTechnicalInfoInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTechnicalInfoInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutTechnicalInfoInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTechnicalInfoInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutTechnicalInfoInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutTechnicalInfoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  elevation: z.lazy(() => ElevationUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateWithoutTechnicalInfoInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutTechnicalInfoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectCreateWithoutElevationInputSchema: z.ZodType<Prisma.ProjectCreateWithoutElevationInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateWithoutElevationInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutElevationInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectCreateOrConnectWithoutElevationInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutElevationInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutElevationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutElevationInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutElevationInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutElevationInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutElevationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutElevationInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutElevationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutElevationInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutElevationInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutElevationInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutElevationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutElevationInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutElevationInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutElevationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateWithoutElevationInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutElevationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectCreateWithoutVisualizationInputSchema: z.ZodType<Prisma.ProjectCreateWithoutVisualizationInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateWithoutVisualizationInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutVisualizationInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectCreateOrConnectWithoutVisualizationInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutVisualizationInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutVisualizationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutVisualizationInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutVisualizationInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutVisualizationInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutVisualizationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutVisualizationInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutVisualizationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutVisualizationInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutVisualizationInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutVisualizationInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutVisualizationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutVisualizationInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutVisualizationInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutVisualizationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateWithoutVisualizationInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutVisualizationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectCreateWithoutPlotLocationInputSchema: z.ZodType<Prisma.ProjectCreateWithoutPlotLocationInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateWithoutPlotLocationInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutPlotLocationInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectCreateOrConnectWithoutPlotLocationInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutPlotLocationInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPlotLocationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPlotLocationInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutPlotLocationInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutPlotLocationInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutPlotLocationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPlotLocationInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPlotLocationInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPlotLocationInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutPlotLocationInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutPlotLocationInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutPlotLocationInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPlotLocationInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutPlotLocationInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutPlotLocationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateWithoutPlotLocationInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutPlotLocationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectCreateWithoutPlanInputSchema: z.ZodType<Prisma.ProjectCreateWithoutPlanInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateWithoutPlanInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutPlanInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectCreateOrConnectWithoutPlanInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutPlanInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPlanInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPlanInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutPlanInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutPlanInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutPlanInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPlanInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPlanInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPlanInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutPlanInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutPlanInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutPlanInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPlanInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutPlanInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutPlanInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateWithoutPlanInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutPlanInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectCreateWithoutInteriorInputSchema: z.ZodType<Prisma.ProjectCreateWithoutInteriorInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateWithoutInteriorInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutInteriorInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectCreateOrConnectWithoutInteriorInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutInteriorInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutInteriorInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInteriorInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutInteriorInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutInteriorInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutInteriorInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInteriorInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutInteriorInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInteriorInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutInteriorInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutInteriorInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutInteriorInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInteriorInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutInteriorInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutInteriorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateWithoutInteriorInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutInteriorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectCreateWithoutOptionInputSchema: z.ZodType<Prisma.ProjectCreateWithoutOptionInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateWithoutOptionInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutOptionInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectCreateOrConnectWithoutOptionInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutOptionInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutOptionInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutOptionInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutOptionInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutOptionInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutOptionInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutOptionInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutOptionInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutOptionInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutOptionInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutOptionInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutOptionInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutOptionInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutOptionInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutOptionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateWithoutOptionInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutOptionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  currency: z.lazy(() => CurrencyUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectCreateWithoutCurrencyInputSchema: z.ZodType<Prisma.ProjectCreateWithoutCurrencyInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateWithoutCurrencyInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutCurrencyInput> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  label: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectCreatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  mainBenefits: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
  usableArea: z.number().optional().nullable(),
  numPeople: z.string().optional().nullable(),
  roofType: z.lazy(() => RoofTypeSchema),
  status: z.lazy(() => StatusTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export const ProjectCreateOrConnectWithoutCurrencyInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutCurrencyInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutCurrencyInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCurrencyInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutCurrencyInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutCurrencyInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutCurrencyInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutCurrencyInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutCurrencyInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCurrencyInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutCurrencyInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutCurrencyInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutCurrencyInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutCurrencyInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutCurrencyInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutCurrencyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateWithoutCurrencyInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutCurrencyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.union([ z.lazy(() => ProjectUpdatetagsInputSchema),z.string().array() ]).optional(),
  shortDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainBenefits: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usableArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  numPeople: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roofType: z.union([ z.lazy(() => RoofTypeSchema),z.lazy(() => EnumRoofTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusTypeSchema),z.lazy(() => EnumStatusTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  technicalInfo: z.lazy(() => TechnicalInfoUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  visualization: z.lazy(() => VisualizationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plan: z.lazy(() => PlanUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  interior: z.lazy(() => InteriorUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  plotLocation: z.lazy(() => PlotLocationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  option: z.lazy(() => OptionUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export const TechnicalInfoCreateManyProjectInputSchema: z.ZodType<Prisma.TechnicalInfoCreateManyProjectInput> = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ElevationCreateManyProjectInputSchema: z.ZodType<Prisma.ElevationCreateManyProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VisualizationCreateManyProjectInputSchema: z.ZodType<Prisma.VisualizationCreateManyProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  facadeType: z.lazy(() => FacadeTypeSchema),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlanCreateManyProjectInputSchema: z.ZodType<Prisma.PlanCreateManyProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const InteriorCreateManyProjectInputSchema: z.ZodType<Prisma.InteriorCreateManyProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  dimension: z.lazy(() => DimensionTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlotLocationCreateManyProjectInputSchema: z.ZodType<Prisma.PlotLocationCreateManyProjectInput> = z.object({
  id: z.string(),
  url: z.string(),
  hash: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  variantType: z.lazy(() => VariantTypeSchema).optional(),
  orientation: z.lazy(() => OrientationTypeSchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OptionCreateManyProjectInputSchema: z.ZodType<Prisma.OptionCreateManyProjectInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CurrencyCreateManyProjectInputSchema: z.ZodType<Prisma.CurrencyCreateManyProjectInput> = z.object({
  id: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchange: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TechnicalInfoUpdateWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TechnicalInfoUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TechnicalInfoUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.TechnicalInfoUncheckedUpdateManyWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ElevationUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateManyWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VisualizationUpdateWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VisualizationUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VisualizationUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.VisualizationUncheckedUpdateManyWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facadeType: z.union([ z.lazy(() => FacadeTypeSchema),z.lazy(() => EnumFacadeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PlanUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PlanUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.PlanUncheckedUpdateManyWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InteriorUpdateWithoutProjectInputSchema: z.ZodType<Prisma.InteriorUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dimension: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InteriorUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.InteriorUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dimension: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InteriorUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.InteriorUncheckedUpdateManyWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dimension: z.union([ z.lazy(() => DimensionTypeSchema),z.lazy(() => EnumDimensionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlotLocationUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlotLocationUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlotLocationUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.PlotLocationUncheckedUpdateManyWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variantType: z.union([ z.lazy(() => VariantTypeSchema),z.lazy(() => EnumVariantTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orientation: z.union([ z.lazy(() => OrientationTypeSchema),z.lazy(() => NullableEnumOrientationTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OptionUpdateWithoutProjectInputSchema: z.ZodType<Prisma.OptionUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OptionUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OptionUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.OptionUncheckedUpdateManyWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CurrencyUpdateWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  exchange: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CurrencyUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  exchange: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CurrencyUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.CurrencyUncheckedUpdateManyWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  exchange: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ProjectFindFirstArgsSchema: z.ZodType<Prisma.ProjectFindFirstArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectScalarFieldEnumSchema,ProjectScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProjectFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProjectFindFirstOrThrowArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectScalarFieldEnumSchema,ProjectScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProjectFindManyArgsSchema: z.ZodType<Prisma.ProjectFindManyArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectScalarFieldEnumSchema,ProjectScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProjectAggregateArgsSchema: z.ZodType<Prisma.ProjectAggregateArgs> = z.object({
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProjectGroupByArgsSchema: z.ZodType<Prisma.ProjectGroupByArgs> = z.object({
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithAggregationInputSchema.array(),ProjectOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectScalarFieldEnumSchema.array(),
  having: ProjectScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProjectFindUniqueArgsSchema: z.ZodType<Prisma.ProjectFindUniqueArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
}).strict() ;

export const ProjectFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProjectFindUniqueOrThrowArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
}).strict() ;

export const TechnicalInfoFindFirstArgsSchema: z.ZodType<Prisma.TechnicalInfoFindFirstArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  where: TechnicalInfoWhereInputSchema.optional(),
  orderBy: z.union([ TechnicalInfoOrderByWithRelationInputSchema.array(),TechnicalInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: TechnicalInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TechnicalInfoScalarFieldEnumSchema,TechnicalInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TechnicalInfoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TechnicalInfoFindFirstOrThrowArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  where: TechnicalInfoWhereInputSchema.optional(),
  orderBy: z.union([ TechnicalInfoOrderByWithRelationInputSchema.array(),TechnicalInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: TechnicalInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TechnicalInfoScalarFieldEnumSchema,TechnicalInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TechnicalInfoFindManyArgsSchema: z.ZodType<Prisma.TechnicalInfoFindManyArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  where: TechnicalInfoWhereInputSchema.optional(),
  orderBy: z.union([ TechnicalInfoOrderByWithRelationInputSchema.array(),TechnicalInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: TechnicalInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TechnicalInfoScalarFieldEnumSchema,TechnicalInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TechnicalInfoAggregateArgsSchema: z.ZodType<Prisma.TechnicalInfoAggregateArgs> = z.object({
  where: TechnicalInfoWhereInputSchema.optional(),
  orderBy: z.union([ TechnicalInfoOrderByWithRelationInputSchema.array(),TechnicalInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: TechnicalInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TechnicalInfoGroupByArgsSchema: z.ZodType<Prisma.TechnicalInfoGroupByArgs> = z.object({
  where: TechnicalInfoWhereInputSchema.optional(),
  orderBy: z.union([ TechnicalInfoOrderByWithAggregationInputSchema.array(),TechnicalInfoOrderByWithAggregationInputSchema ]).optional(),
  by: TechnicalInfoScalarFieldEnumSchema.array(),
  having: TechnicalInfoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TechnicalInfoFindUniqueArgsSchema: z.ZodType<Prisma.TechnicalInfoFindUniqueArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  where: TechnicalInfoWhereUniqueInputSchema,
}).strict() ;

export const TechnicalInfoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TechnicalInfoFindUniqueOrThrowArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  where: TechnicalInfoWhereUniqueInputSchema,
}).strict() ;

export const ElevationFindFirstArgsSchema: z.ZodType<Prisma.ElevationFindFirstArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithRelationInputSchema.array(),ElevationOrderByWithRelationInputSchema ]).optional(),
  cursor: ElevationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ElevationScalarFieldEnumSchema,ElevationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ElevationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ElevationFindFirstOrThrowArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithRelationInputSchema.array(),ElevationOrderByWithRelationInputSchema ]).optional(),
  cursor: ElevationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ElevationScalarFieldEnumSchema,ElevationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ElevationFindManyArgsSchema: z.ZodType<Prisma.ElevationFindManyArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithRelationInputSchema.array(),ElevationOrderByWithRelationInputSchema ]).optional(),
  cursor: ElevationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ElevationScalarFieldEnumSchema,ElevationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ElevationAggregateArgsSchema: z.ZodType<Prisma.ElevationAggregateArgs> = z.object({
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithRelationInputSchema.array(),ElevationOrderByWithRelationInputSchema ]).optional(),
  cursor: ElevationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ElevationGroupByArgsSchema: z.ZodType<Prisma.ElevationGroupByArgs> = z.object({
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithAggregationInputSchema.array(),ElevationOrderByWithAggregationInputSchema ]).optional(),
  by: ElevationScalarFieldEnumSchema.array(),
  having: ElevationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ElevationFindUniqueArgsSchema: z.ZodType<Prisma.ElevationFindUniqueArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereUniqueInputSchema,
}).strict() ;

export const ElevationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ElevationFindUniqueOrThrowArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereUniqueInputSchema,
}).strict() ;

export const VisualizationFindFirstArgsSchema: z.ZodType<Prisma.VisualizationFindFirstArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  where: VisualizationWhereInputSchema.optional(),
  orderBy: z.union([ VisualizationOrderByWithRelationInputSchema.array(),VisualizationOrderByWithRelationInputSchema ]).optional(),
  cursor: VisualizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisualizationScalarFieldEnumSchema,VisualizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VisualizationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VisualizationFindFirstOrThrowArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  where: VisualizationWhereInputSchema.optional(),
  orderBy: z.union([ VisualizationOrderByWithRelationInputSchema.array(),VisualizationOrderByWithRelationInputSchema ]).optional(),
  cursor: VisualizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisualizationScalarFieldEnumSchema,VisualizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VisualizationFindManyArgsSchema: z.ZodType<Prisma.VisualizationFindManyArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  where: VisualizationWhereInputSchema.optional(),
  orderBy: z.union([ VisualizationOrderByWithRelationInputSchema.array(),VisualizationOrderByWithRelationInputSchema ]).optional(),
  cursor: VisualizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisualizationScalarFieldEnumSchema,VisualizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VisualizationAggregateArgsSchema: z.ZodType<Prisma.VisualizationAggregateArgs> = z.object({
  where: VisualizationWhereInputSchema.optional(),
  orderBy: z.union([ VisualizationOrderByWithRelationInputSchema.array(),VisualizationOrderByWithRelationInputSchema ]).optional(),
  cursor: VisualizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VisualizationGroupByArgsSchema: z.ZodType<Prisma.VisualizationGroupByArgs> = z.object({
  where: VisualizationWhereInputSchema.optional(),
  orderBy: z.union([ VisualizationOrderByWithAggregationInputSchema.array(),VisualizationOrderByWithAggregationInputSchema ]).optional(),
  by: VisualizationScalarFieldEnumSchema.array(),
  having: VisualizationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VisualizationFindUniqueArgsSchema: z.ZodType<Prisma.VisualizationFindUniqueArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  where: VisualizationWhereUniqueInputSchema,
}).strict() ;

export const VisualizationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VisualizationFindUniqueOrThrowArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  where: VisualizationWhereUniqueInputSchema,
}).strict() ;

export const PlotLocationFindFirstArgsSchema: z.ZodType<Prisma.PlotLocationFindFirstArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  where: PlotLocationWhereInputSchema.optional(),
  orderBy: z.union([ PlotLocationOrderByWithRelationInputSchema.array(),PlotLocationOrderByWithRelationInputSchema ]).optional(),
  cursor: PlotLocationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlotLocationScalarFieldEnumSchema,PlotLocationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlotLocationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlotLocationFindFirstOrThrowArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  where: PlotLocationWhereInputSchema.optional(),
  orderBy: z.union([ PlotLocationOrderByWithRelationInputSchema.array(),PlotLocationOrderByWithRelationInputSchema ]).optional(),
  cursor: PlotLocationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlotLocationScalarFieldEnumSchema,PlotLocationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlotLocationFindManyArgsSchema: z.ZodType<Prisma.PlotLocationFindManyArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  where: PlotLocationWhereInputSchema.optional(),
  orderBy: z.union([ PlotLocationOrderByWithRelationInputSchema.array(),PlotLocationOrderByWithRelationInputSchema ]).optional(),
  cursor: PlotLocationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlotLocationScalarFieldEnumSchema,PlotLocationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlotLocationAggregateArgsSchema: z.ZodType<Prisma.PlotLocationAggregateArgs> = z.object({
  where: PlotLocationWhereInputSchema.optional(),
  orderBy: z.union([ PlotLocationOrderByWithRelationInputSchema.array(),PlotLocationOrderByWithRelationInputSchema ]).optional(),
  cursor: PlotLocationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlotLocationGroupByArgsSchema: z.ZodType<Prisma.PlotLocationGroupByArgs> = z.object({
  where: PlotLocationWhereInputSchema.optional(),
  orderBy: z.union([ PlotLocationOrderByWithAggregationInputSchema.array(),PlotLocationOrderByWithAggregationInputSchema ]).optional(),
  by: PlotLocationScalarFieldEnumSchema.array(),
  having: PlotLocationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlotLocationFindUniqueArgsSchema: z.ZodType<Prisma.PlotLocationFindUniqueArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  where: PlotLocationWhereUniqueInputSchema,
}).strict() ;

export const PlotLocationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlotLocationFindUniqueOrThrowArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  where: PlotLocationWhereUniqueInputSchema,
}).strict() ;

export const PlanFindFirstArgsSchema: z.ZodType<Prisma.PlanFindFirstArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  where: PlanWhereInputSchema.optional(),
  orderBy: z.union([ PlanOrderByWithRelationInputSchema.array(),PlanOrderByWithRelationInputSchema ]).optional(),
  cursor: PlanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlanScalarFieldEnumSchema,PlanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlanFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlanFindFirstOrThrowArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  where: PlanWhereInputSchema.optional(),
  orderBy: z.union([ PlanOrderByWithRelationInputSchema.array(),PlanOrderByWithRelationInputSchema ]).optional(),
  cursor: PlanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlanScalarFieldEnumSchema,PlanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlanFindManyArgsSchema: z.ZodType<Prisma.PlanFindManyArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  where: PlanWhereInputSchema.optional(),
  orderBy: z.union([ PlanOrderByWithRelationInputSchema.array(),PlanOrderByWithRelationInputSchema ]).optional(),
  cursor: PlanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlanScalarFieldEnumSchema,PlanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlanAggregateArgsSchema: z.ZodType<Prisma.PlanAggregateArgs> = z.object({
  where: PlanWhereInputSchema.optional(),
  orderBy: z.union([ PlanOrderByWithRelationInputSchema.array(),PlanOrderByWithRelationInputSchema ]).optional(),
  cursor: PlanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlanGroupByArgsSchema: z.ZodType<Prisma.PlanGroupByArgs> = z.object({
  where: PlanWhereInputSchema.optional(),
  orderBy: z.union([ PlanOrderByWithAggregationInputSchema.array(),PlanOrderByWithAggregationInputSchema ]).optional(),
  by: PlanScalarFieldEnumSchema.array(),
  having: PlanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlanFindUniqueArgsSchema: z.ZodType<Prisma.PlanFindUniqueArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  where: PlanWhereUniqueInputSchema,
}).strict() ;

export const PlanFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlanFindUniqueOrThrowArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  where: PlanWhereUniqueInputSchema,
}).strict() ;

export const InteriorFindFirstArgsSchema: z.ZodType<Prisma.InteriorFindFirstArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  where: InteriorWhereInputSchema.optional(),
  orderBy: z.union([ InteriorOrderByWithRelationInputSchema.array(),InteriorOrderByWithRelationInputSchema ]).optional(),
  cursor: InteriorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InteriorScalarFieldEnumSchema,InteriorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InteriorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InteriorFindFirstOrThrowArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  where: InteriorWhereInputSchema.optional(),
  orderBy: z.union([ InteriorOrderByWithRelationInputSchema.array(),InteriorOrderByWithRelationInputSchema ]).optional(),
  cursor: InteriorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InteriorScalarFieldEnumSchema,InteriorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InteriorFindManyArgsSchema: z.ZodType<Prisma.InteriorFindManyArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  where: InteriorWhereInputSchema.optional(),
  orderBy: z.union([ InteriorOrderByWithRelationInputSchema.array(),InteriorOrderByWithRelationInputSchema ]).optional(),
  cursor: InteriorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InteriorScalarFieldEnumSchema,InteriorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InteriorAggregateArgsSchema: z.ZodType<Prisma.InteriorAggregateArgs> = z.object({
  where: InteriorWhereInputSchema.optional(),
  orderBy: z.union([ InteriorOrderByWithRelationInputSchema.array(),InteriorOrderByWithRelationInputSchema ]).optional(),
  cursor: InteriorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InteriorGroupByArgsSchema: z.ZodType<Prisma.InteriorGroupByArgs> = z.object({
  where: InteriorWhereInputSchema.optional(),
  orderBy: z.union([ InteriorOrderByWithAggregationInputSchema.array(),InteriorOrderByWithAggregationInputSchema ]).optional(),
  by: InteriorScalarFieldEnumSchema.array(),
  having: InteriorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InteriorFindUniqueArgsSchema: z.ZodType<Prisma.InteriorFindUniqueArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  where: InteriorWhereUniqueInputSchema,
}).strict() ;

export const InteriorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InteriorFindUniqueOrThrowArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  where: InteriorWhereUniqueInputSchema,
}).strict() ;

export const OptionFindFirstArgsSchema: z.ZodType<Prisma.OptionFindFirstArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  where: OptionWhereInputSchema.optional(),
  orderBy: z.union([ OptionOrderByWithRelationInputSchema.array(),OptionOrderByWithRelationInputSchema ]).optional(),
  cursor: OptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OptionScalarFieldEnumSchema,OptionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OptionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OptionFindFirstOrThrowArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  where: OptionWhereInputSchema.optional(),
  orderBy: z.union([ OptionOrderByWithRelationInputSchema.array(),OptionOrderByWithRelationInputSchema ]).optional(),
  cursor: OptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OptionScalarFieldEnumSchema,OptionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OptionFindManyArgsSchema: z.ZodType<Prisma.OptionFindManyArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  where: OptionWhereInputSchema.optional(),
  orderBy: z.union([ OptionOrderByWithRelationInputSchema.array(),OptionOrderByWithRelationInputSchema ]).optional(),
  cursor: OptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OptionScalarFieldEnumSchema,OptionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OptionAggregateArgsSchema: z.ZodType<Prisma.OptionAggregateArgs> = z.object({
  where: OptionWhereInputSchema.optional(),
  orderBy: z.union([ OptionOrderByWithRelationInputSchema.array(),OptionOrderByWithRelationInputSchema ]).optional(),
  cursor: OptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OptionGroupByArgsSchema: z.ZodType<Prisma.OptionGroupByArgs> = z.object({
  where: OptionWhereInputSchema.optional(),
  orderBy: z.union([ OptionOrderByWithAggregationInputSchema.array(),OptionOrderByWithAggregationInputSchema ]).optional(),
  by: OptionScalarFieldEnumSchema.array(),
  having: OptionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OptionFindUniqueArgsSchema: z.ZodType<Prisma.OptionFindUniqueArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  where: OptionWhereUniqueInputSchema,
}).strict() ;

export const OptionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OptionFindUniqueOrThrowArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  where: OptionWhereUniqueInputSchema,
}).strict() ;

export const CurrencyFindFirstArgsSchema: z.ZodType<Prisma.CurrencyFindFirstArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  where: CurrencyWhereInputSchema.optional(),
  orderBy: z.union([ CurrencyOrderByWithRelationInputSchema.array(),CurrencyOrderByWithRelationInputSchema ]).optional(),
  cursor: CurrencyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CurrencyScalarFieldEnumSchema,CurrencyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CurrencyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CurrencyFindFirstOrThrowArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  where: CurrencyWhereInputSchema.optional(),
  orderBy: z.union([ CurrencyOrderByWithRelationInputSchema.array(),CurrencyOrderByWithRelationInputSchema ]).optional(),
  cursor: CurrencyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CurrencyScalarFieldEnumSchema,CurrencyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CurrencyFindManyArgsSchema: z.ZodType<Prisma.CurrencyFindManyArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  where: CurrencyWhereInputSchema.optional(),
  orderBy: z.union([ CurrencyOrderByWithRelationInputSchema.array(),CurrencyOrderByWithRelationInputSchema ]).optional(),
  cursor: CurrencyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CurrencyScalarFieldEnumSchema,CurrencyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CurrencyAggregateArgsSchema: z.ZodType<Prisma.CurrencyAggregateArgs> = z.object({
  where: CurrencyWhereInputSchema.optional(),
  orderBy: z.union([ CurrencyOrderByWithRelationInputSchema.array(),CurrencyOrderByWithRelationInputSchema ]).optional(),
  cursor: CurrencyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CurrencyGroupByArgsSchema: z.ZodType<Prisma.CurrencyGroupByArgs> = z.object({
  where: CurrencyWhereInputSchema.optional(),
  orderBy: z.union([ CurrencyOrderByWithAggregationInputSchema.array(),CurrencyOrderByWithAggregationInputSchema ]).optional(),
  by: CurrencyScalarFieldEnumSchema.array(),
  having: CurrencyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CurrencyFindUniqueArgsSchema: z.ZodType<Prisma.CurrencyFindUniqueArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  where: CurrencyWhereUniqueInputSchema,
}).strict() ;

export const CurrencyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CurrencyFindUniqueOrThrowArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  where: CurrencyWhereUniqueInputSchema,
}).strict() ;

export const ProjectCreateArgsSchema: z.ZodType<Prisma.ProjectCreateArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  data: z.union([ ProjectCreateInputSchema,ProjectUncheckedCreateInputSchema ]),
}).strict() ;

export const ProjectUpsertArgsSchema: z.ZodType<Prisma.ProjectUpsertArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
  create: z.union([ ProjectCreateInputSchema,ProjectUncheckedCreateInputSchema ]),
  update: z.union([ ProjectUpdateInputSchema,ProjectUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProjectCreateManyArgsSchema: z.ZodType<Prisma.ProjectCreateManyArgs> = z.object({
  data: z.union([ ProjectCreateManyInputSchema,ProjectCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProjectCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProjectCreateManyInputSchema,ProjectCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProjectDeleteArgsSchema: z.ZodType<Prisma.ProjectDeleteArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
}).strict() ;

export const ProjectUpdateArgsSchema: z.ZodType<Prisma.ProjectUpdateArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  data: z.union([ ProjectUpdateInputSchema,ProjectUncheckedUpdateInputSchema ]),
  where: ProjectWhereUniqueInputSchema,
}).strict() ;

export const ProjectUpdateManyArgsSchema: z.ZodType<Prisma.ProjectUpdateManyArgs> = z.object({
  data: z.union([ ProjectUpdateManyMutationInputSchema,ProjectUncheckedUpdateManyInputSchema ]),
  where: ProjectWhereInputSchema.optional(),
}).strict() ;

export const ProjectDeleteManyArgsSchema: z.ZodType<Prisma.ProjectDeleteManyArgs> = z.object({
  where: ProjectWhereInputSchema.optional(),
}).strict() ;

export const TechnicalInfoCreateArgsSchema: z.ZodType<Prisma.TechnicalInfoCreateArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  data: z.union([ TechnicalInfoCreateInputSchema,TechnicalInfoUncheckedCreateInputSchema ]),
}).strict() ;

export const TechnicalInfoUpsertArgsSchema: z.ZodType<Prisma.TechnicalInfoUpsertArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  where: TechnicalInfoWhereUniqueInputSchema,
  create: z.union([ TechnicalInfoCreateInputSchema,TechnicalInfoUncheckedCreateInputSchema ]),
  update: z.union([ TechnicalInfoUpdateInputSchema,TechnicalInfoUncheckedUpdateInputSchema ]),
}).strict() ;

export const TechnicalInfoCreateManyArgsSchema: z.ZodType<Prisma.TechnicalInfoCreateManyArgs> = z.object({
  data: z.union([ TechnicalInfoCreateManyInputSchema,TechnicalInfoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TechnicalInfoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TechnicalInfoCreateManyAndReturnArgs> = z.object({
  data: z.union([ TechnicalInfoCreateManyInputSchema,TechnicalInfoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TechnicalInfoDeleteArgsSchema: z.ZodType<Prisma.TechnicalInfoDeleteArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  where: TechnicalInfoWhereUniqueInputSchema,
}).strict() ;

export const TechnicalInfoUpdateArgsSchema: z.ZodType<Prisma.TechnicalInfoUpdateArgs> = z.object({
  select: TechnicalInfoSelectSchema.optional(),
  include: TechnicalInfoIncludeSchema.optional(),
  data: z.union([ TechnicalInfoUpdateInputSchema,TechnicalInfoUncheckedUpdateInputSchema ]),
  where: TechnicalInfoWhereUniqueInputSchema,
}).strict() ;

export const TechnicalInfoUpdateManyArgsSchema: z.ZodType<Prisma.TechnicalInfoUpdateManyArgs> = z.object({
  data: z.union([ TechnicalInfoUpdateManyMutationInputSchema,TechnicalInfoUncheckedUpdateManyInputSchema ]),
  where: TechnicalInfoWhereInputSchema.optional(),
}).strict() ;

export const TechnicalInfoDeleteManyArgsSchema: z.ZodType<Prisma.TechnicalInfoDeleteManyArgs> = z.object({
  where: TechnicalInfoWhereInputSchema.optional(),
}).strict() ;

export const ElevationCreateArgsSchema: z.ZodType<Prisma.ElevationCreateArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  data: z.union([ ElevationCreateInputSchema,ElevationUncheckedCreateInputSchema ]),
}).strict() ;

export const ElevationUpsertArgsSchema: z.ZodType<Prisma.ElevationUpsertArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereUniqueInputSchema,
  create: z.union([ ElevationCreateInputSchema,ElevationUncheckedCreateInputSchema ]),
  update: z.union([ ElevationUpdateInputSchema,ElevationUncheckedUpdateInputSchema ]),
}).strict() ;

export const ElevationCreateManyArgsSchema: z.ZodType<Prisma.ElevationCreateManyArgs> = z.object({
  data: z.union([ ElevationCreateManyInputSchema,ElevationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ElevationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ElevationCreateManyAndReturnArgs> = z.object({
  data: z.union([ ElevationCreateManyInputSchema,ElevationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ElevationDeleteArgsSchema: z.ZodType<Prisma.ElevationDeleteArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereUniqueInputSchema,
}).strict() ;

export const ElevationUpdateArgsSchema: z.ZodType<Prisma.ElevationUpdateArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  data: z.union([ ElevationUpdateInputSchema,ElevationUncheckedUpdateInputSchema ]),
  where: ElevationWhereUniqueInputSchema,
}).strict() ;

export const ElevationUpdateManyArgsSchema: z.ZodType<Prisma.ElevationUpdateManyArgs> = z.object({
  data: z.union([ ElevationUpdateManyMutationInputSchema,ElevationUncheckedUpdateManyInputSchema ]),
  where: ElevationWhereInputSchema.optional(),
}).strict() ;

export const ElevationDeleteManyArgsSchema: z.ZodType<Prisma.ElevationDeleteManyArgs> = z.object({
  where: ElevationWhereInputSchema.optional(),
}).strict() ;

export const VisualizationCreateArgsSchema: z.ZodType<Prisma.VisualizationCreateArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  data: z.union([ VisualizationCreateInputSchema,VisualizationUncheckedCreateInputSchema ]),
}).strict() ;

export const VisualizationUpsertArgsSchema: z.ZodType<Prisma.VisualizationUpsertArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  where: VisualizationWhereUniqueInputSchema,
  create: z.union([ VisualizationCreateInputSchema,VisualizationUncheckedCreateInputSchema ]),
  update: z.union([ VisualizationUpdateInputSchema,VisualizationUncheckedUpdateInputSchema ]),
}).strict() ;

export const VisualizationCreateManyArgsSchema: z.ZodType<Prisma.VisualizationCreateManyArgs> = z.object({
  data: z.union([ VisualizationCreateManyInputSchema,VisualizationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VisualizationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VisualizationCreateManyAndReturnArgs> = z.object({
  data: z.union([ VisualizationCreateManyInputSchema,VisualizationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VisualizationDeleteArgsSchema: z.ZodType<Prisma.VisualizationDeleteArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  where: VisualizationWhereUniqueInputSchema,
}).strict() ;

export const VisualizationUpdateArgsSchema: z.ZodType<Prisma.VisualizationUpdateArgs> = z.object({
  select: VisualizationSelectSchema.optional(),
  include: VisualizationIncludeSchema.optional(),
  data: z.union([ VisualizationUpdateInputSchema,VisualizationUncheckedUpdateInputSchema ]),
  where: VisualizationWhereUniqueInputSchema,
}).strict() ;

export const VisualizationUpdateManyArgsSchema: z.ZodType<Prisma.VisualizationUpdateManyArgs> = z.object({
  data: z.union([ VisualizationUpdateManyMutationInputSchema,VisualizationUncheckedUpdateManyInputSchema ]),
  where: VisualizationWhereInputSchema.optional(),
}).strict() ;

export const VisualizationDeleteManyArgsSchema: z.ZodType<Prisma.VisualizationDeleteManyArgs> = z.object({
  where: VisualizationWhereInputSchema.optional(),
}).strict() ;

export const PlotLocationCreateArgsSchema: z.ZodType<Prisma.PlotLocationCreateArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  data: z.union([ PlotLocationCreateInputSchema,PlotLocationUncheckedCreateInputSchema ]),
}).strict() ;

export const PlotLocationUpsertArgsSchema: z.ZodType<Prisma.PlotLocationUpsertArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  where: PlotLocationWhereUniqueInputSchema,
  create: z.union([ PlotLocationCreateInputSchema,PlotLocationUncheckedCreateInputSchema ]),
  update: z.union([ PlotLocationUpdateInputSchema,PlotLocationUncheckedUpdateInputSchema ]),
}).strict() ;

export const PlotLocationCreateManyArgsSchema: z.ZodType<Prisma.PlotLocationCreateManyArgs> = z.object({
  data: z.union([ PlotLocationCreateManyInputSchema,PlotLocationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PlotLocationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PlotLocationCreateManyAndReturnArgs> = z.object({
  data: z.union([ PlotLocationCreateManyInputSchema,PlotLocationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PlotLocationDeleteArgsSchema: z.ZodType<Prisma.PlotLocationDeleteArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  where: PlotLocationWhereUniqueInputSchema,
}).strict() ;

export const PlotLocationUpdateArgsSchema: z.ZodType<Prisma.PlotLocationUpdateArgs> = z.object({
  select: PlotLocationSelectSchema.optional(),
  include: PlotLocationIncludeSchema.optional(),
  data: z.union([ PlotLocationUpdateInputSchema,PlotLocationUncheckedUpdateInputSchema ]),
  where: PlotLocationWhereUniqueInputSchema,
}).strict() ;

export const PlotLocationUpdateManyArgsSchema: z.ZodType<Prisma.PlotLocationUpdateManyArgs> = z.object({
  data: z.union([ PlotLocationUpdateManyMutationInputSchema,PlotLocationUncheckedUpdateManyInputSchema ]),
  where: PlotLocationWhereInputSchema.optional(),
}).strict() ;

export const PlotLocationDeleteManyArgsSchema: z.ZodType<Prisma.PlotLocationDeleteManyArgs> = z.object({
  where: PlotLocationWhereInputSchema.optional(),
}).strict() ;

export const PlanCreateArgsSchema: z.ZodType<Prisma.PlanCreateArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  data: z.union([ PlanCreateInputSchema,PlanUncheckedCreateInputSchema ]),
}).strict() ;

export const PlanUpsertArgsSchema: z.ZodType<Prisma.PlanUpsertArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  where: PlanWhereUniqueInputSchema,
  create: z.union([ PlanCreateInputSchema,PlanUncheckedCreateInputSchema ]),
  update: z.union([ PlanUpdateInputSchema,PlanUncheckedUpdateInputSchema ]),
}).strict() ;

export const PlanCreateManyArgsSchema: z.ZodType<Prisma.PlanCreateManyArgs> = z.object({
  data: z.union([ PlanCreateManyInputSchema,PlanCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PlanCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PlanCreateManyAndReturnArgs> = z.object({
  data: z.union([ PlanCreateManyInputSchema,PlanCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PlanDeleteArgsSchema: z.ZodType<Prisma.PlanDeleteArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  where: PlanWhereUniqueInputSchema,
}).strict() ;

export const PlanUpdateArgsSchema: z.ZodType<Prisma.PlanUpdateArgs> = z.object({
  select: PlanSelectSchema.optional(),
  include: PlanIncludeSchema.optional(),
  data: z.union([ PlanUpdateInputSchema,PlanUncheckedUpdateInputSchema ]),
  where: PlanWhereUniqueInputSchema,
}).strict() ;

export const PlanUpdateManyArgsSchema: z.ZodType<Prisma.PlanUpdateManyArgs> = z.object({
  data: z.union([ PlanUpdateManyMutationInputSchema,PlanUncheckedUpdateManyInputSchema ]),
  where: PlanWhereInputSchema.optional(),
}).strict() ;

export const PlanDeleteManyArgsSchema: z.ZodType<Prisma.PlanDeleteManyArgs> = z.object({
  where: PlanWhereInputSchema.optional(),
}).strict() ;

export const InteriorCreateArgsSchema: z.ZodType<Prisma.InteriorCreateArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  data: z.union([ InteriorCreateInputSchema,InteriorUncheckedCreateInputSchema ]),
}).strict() ;

export const InteriorUpsertArgsSchema: z.ZodType<Prisma.InteriorUpsertArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  where: InteriorWhereUniqueInputSchema,
  create: z.union([ InteriorCreateInputSchema,InteriorUncheckedCreateInputSchema ]),
  update: z.union([ InteriorUpdateInputSchema,InteriorUncheckedUpdateInputSchema ]),
}).strict() ;

export const InteriorCreateManyArgsSchema: z.ZodType<Prisma.InteriorCreateManyArgs> = z.object({
  data: z.union([ InteriorCreateManyInputSchema,InteriorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InteriorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.InteriorCreateManyAndReturnArgs> = z.object({
  data: z.union([ InteriorCreateManyInputSchema,InteriorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InteriorDeleteArgsSchema: z.ZodType<Prisma.InteriorDeleteArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  where: InteriorWhereUniqueInputSchema,
}).strict() ;

export const InteriorUpdateArgsSchema: z.ZodType<Prisma.InteriorUpdateArgs> = z.object({
  select: InteriorSelectSchema.optional(),
  include: InteriorIncludeSchema.optional(),
  data: z.union([ InteriorUpdateInputSchema,InteriorUncheckedUpdateInputSchema ]),
  where: InteriorWhereUniqueInputSchema,
}).strict() ;

export const InteriorUpdateManyArgsSchema: z.ZodType<Prisma.InteriorUpdateManyArgs> = z.object({
  data: z.union([ InteriorUpdateManyMutationInputSchema,InteriorUncheckedUpdateManyInputSchema ]),
  where: InteriorWhereInputSchema.optional(),
}).strict() ;

export const InteriorDeleteManyArgsSchema: z.ZodType<Prisma.InteriorDeleteManyArgs> = z.object({
  where: InteriorWhereInputSchema.optional(),
}).strict() ;

export const OptionCreateArgsSchema: z.ZodType<Prisma.OptionCreateArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  data: z.union([ OptionCreateInputSchema,OptionUncheckedCreateInputSchema ]),
}).strict() ;

export const OptionUpsertArgsSchema: z.ZodType<Prisma.OptionUpsertArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  where: OptionWhereUniqueInputSchema,
  create: z.union([ OptionCreateInputSchema,OptionUncheckedCreateInputSchema ]),
  update: z.union([ OptionUpdateInputSchema,OptionUncheckedUpdateInputSchema ]),
}).strict() ;

export const OptionCreateManyArgsSchema: z.ZodType<Prisma.OptionCreateManyArgs> = z.object({
  data: z.union([ OptionCreateManyInputSchema,OptionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const OptionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OptionCreateManyAndReturnArgs> = z.object({
  data: z.union([ OptionCreateManyInputSchema,OptionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const OptionDeleteArgsSchema: z.ZodType<Prisma.OptionDeleteArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  where: OptionWhereUniqueInputSchema,
}).strict() ;

export const OptionUpdateArgsSchema: z.ZodType<Prisma.OptionUpdateArgs> = z.object({
  select: OptionSelectSchema.optional(),
  include: OptionIncludeSchema.optional(),
  data: z.union([ OptionUpdateInputSchema,OptionUncheckedUpdateInputSchema ]),
  where: OptionWhereUniqueInputSchema,
}).strict() ;

export const OptionUpdateManyArgsSchema: z.ZodType<Prisma.OptionUpdateManyArgs> = z.object({
  data: z.union([ OptionUpdateManyMutationInputSchema,OptionUncheckedUpdateManyInputSchema ]),
  where: OptionWhereInputSchema.optional(),
}).strict() ;

export const OptionDeleteManyArgsSchema: z.ZodType<Prisma.OptionDeleteManyArgs> = z.object({
  where: OptionWhereInputSchema.optional(),
}).strict() ;

export const CurrencyCreateArgsSchema: z.ZodType<Prisma.CurrencyCreateArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  data: z.union([ CurrencyCreateInputSchema,CurrencyUncheckedCreateInputSchema ]),
}).strict() ;

export const CurrencyUpsertArgsSchema: z.ZodType<Prisma.CurrencyUpsertArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  where: CurrencyWhereUniqueInputSchema,
  create: z.union([ CurrencyCreateInputSchema,CurrencyUncheckedCreateInputSchema ]),
  update: z.union([ CurrencyUpdateInputSchema,CurrencyUncheckedUpdateInputSchema ]),
}).strict() ;

export const CurrencyCreateManyArgsSchema: z.ZodType<Prisma.CurrencyCreateManyArgs> = z.object({
  data: z.union([ CurrencyCreateManyInputSchema,CurrencyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CurrencyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CurrencyCreateManyAndReturnArgs> = z.object({
  data: z.union([ CurrencyCreateManyInputSchema,CurrencyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CurrencyDeleteArgsSchema: z.ZodType<Prisma.CurrencyDeleteArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  where: CurrencyWhereUniqueInputSchema,
}).strict() ;

export const CurrencyUpdateArgsSchema: z.ZodType<Prisma.CurrencyUpdateArgs> = z.object({
  select: CurrencySelectSchema.optional(),
  include: CurrencyIncludeSchema.optional(),
  data: z.union([ CurrencyUpdateInputSchema,CurrencyUncheckedUpdateInputSchema ]),
  where: CurrencyWhereUniqueInputSchema,
}).strict() ;

export const CurrencyUpdateManyArgsSchema: z.ZodType<Prisma.CurrencyUpdateManyArgs> = z.object({
  data: z.union([ CurrencyUpdateManyMutationInputSchema,CurrencyUncheckedUpdateManyInputSchema ]),
  where: CurrencyWhereInputSchema.optional(),
}).strict() ;

export const CurrencyDeleteManyArgsSchema: z.ZodType<Prisma.CurrencyDeleteManyArgs> = z.object({
  where: CurrencyWhereInputSchema.optional(),
}).strict() ;