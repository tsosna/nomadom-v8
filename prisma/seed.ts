import { PrismaClient} from '@prisma/client'
import { projects } from '../src/lib/api/project';
import { homeType } from '../src/lib/api/homeType'
import { options } from '../src/lib/api/option'

const db = new PrismaClient()

interface PrismaError extends Error {
	code: string
	meta?: {
		cause: string
	}
}

async function createProject() {
	try {
		await db.$transaction(async (db) => {
			for (const project of projects) {
				const result = await db.project.upsert({
					where: { slug: project.slug },
					create: {
						name: project.name,
						slug: project.slug,
						icon: project.icon,
						label: project.label,
						tags: { set: project.tags },
						shortDescription: project.shortDescription,
						longDescription: project.longDescription,
						mainBenefits: project.mainBenefits,
						additionalInfo: project.additionalInfo,
						technicalInfo: project.technicalInfo,
						usableArea: project.usableArea,
						numPeople: project.numPeople,
						roofType: project.roofType,
						houseType: project.houseType,
						status: project.status,

					},
					update: {
						name: project.name,
						slug: project.slug,
						icon: project.icon,
						label: project.label,
						tags: { set: project.tags },
						shortDescription: project.shortDescription,
						longDescription: project.longDescription,
						mainBenefits: project.mainBenefits,
						additionalInfo: project.additionalInfo,
						technicalInfo: project.technicalInfo,
						usableArea: project.usableArea,
						numPeople: project.numPeople,
						roofType: project.roofType,
						houseType: project.houseType,
						status: project.status,
						},
						select: { id: true }
				})
				for (const home of homeType) {
					await db.homeType.upsert({
						where: { facadeType_variantType_dimensionType: { facadeType: home.facadeType, variantType: home.variantType, dimensionType: home.dimensionType } },
						create: { facadeType: home.facadeType, variantType: home.variantType, dimensionType: home.dimensionType },
						update: { facadeType: home.facadeType, variantType: home.variantType, dimensionType: home.dimensionType }
					})
				}
				for (const option of options) {
					await db.option.create({
						data:{name:option.name, description: option.description, price: option.price,  projectId:result.id},
						})
				}
			}

		})
	} catch (error: unknown) {
		const prismaError = error as PrismaError
		console.log({ error: `${prismaError.code} - ${prismaError.meta?.cause}` })
	}
}

createProject()
// console.log(process.env);
