import { PrismaClient } from '@prisma/client'
import { projects } from '../src/lib/api/project'
import { homeType } from '../src/lib/api/homeType'
import { options } from '../src/lib/api/option'
import { uploads } from '../src/lib/api/upload'
import {images} from '../src/lib/api/image'
import {videos} from '../src/lib/api/video'
import { roomSchedules} from '../src/lib/api/roomSchedule'

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
						status: project.status
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
						status: project.status
					},
					select: { id: true }
				})
				for (const home of homeType) {
					const resultHome = await db.homeType.upsert({
						where: {
							facadeType_variantType_dimensionType: {
								facadeType: home.facadeType,
								variantType: home.variantType,
								dimensionType: home.dimensionType
							}
						},
						create: {
							facadeType: home.facadeType,
							variantType: home.variantType,
							dimensionType: home.dimensionType
						},
						update: {
							facadeType: home.facadeType,
							variantType: home.variantType,
							dimensionType: home.dimensionType
						},
						select: { id: true }
					})
					for (const image of images) {
						await db.image.upsert({
							where: { hash: image.hash },
							create: {
								title: image.title,
								url: image.url,
								hash: image.hash,
								filename: image.filename,
								mimetype: image.mimetype,
								alt: image.alt,
								caption: image.caption,
								imageType: image.imageType,
								projectId: result.id,
								homeTypeId: resultHome.id,
								createdAt: image.createdAt,
								updatedAt: image.updatedAt
							},
							update: {
								title: image.title,
								url: image.url,
								hash: image.hash,
								filename: image.filename,
								mimetype: image.mimetype,
								alt: image.alt,
								caption: image.caption,
								imageType: image.imageType,
								projectId: result.id,
								homeTypeId: resultHome.id,
								createdAt: image.createdAt,
								updatedAt: image.updatedAt
							}
						})
					}
				}
				for (const option of options) {
					await db.option.create({
						data: {
							name: option.name,
							description: option.description,
							price: option.price,
							projectId: result.id
						}
					})
				}
				for (const upload of uploads) {
					await db.upload.upsert({
						where: { hash: upload.hash },
						create: {
							title: upload.title,
							url: upload.url,
							hash: upload.hash,
							filename: upload.filename,
							mimetype: upload.mimetype,
							alt: upload.alt,
							caption: upload.caption,
							projectId: result.id,
							createdAt: upload.createdAt,
							updatedAt: upload.updatedAt
						},
						update: {
							title: upload.title,
							url: upload.url,
							hash: upload.hash,
							filename: upload.filename,
							mimetype: upload.mimetype,
							alt: upload.alt,
							caption: upload.caption,
							projectId: result.id,
							createdAt: upload.createdAt,
							updatedAt: upload.updatedAt
						}
					})
				}
				for (const upload of uploads) {
					await db.upload.upsert({
						where: { hash: upload.hash },
						create: {
							title: upload.title,
							url: upload.url,
							hash: upload.hash,
							filename: upload.filename,
							mimetype: upload.mimetype,
							alt: upload.alt,
							caption: upload.caption,
							projectId: result.id,
							createdAt: upload.createdAt,
							updatedAt: upload.updatedAt
						},
						update: {
							title: upload.title,
							url: upload.url,
							hash: upload.hash,
							filename: upload.filename,
							mimetype: upload.mimetype,
							alt: upload.alt,
							caption: upload.caption,
							projectId: result.id,
							createdAt: upload.createdAt,
							updatedAt: upload.updatedAt
						}
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
