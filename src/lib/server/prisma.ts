import { dev } from '$app/environment'
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma: PrismaClient = __prisma || new PrismaClient().$extends(withAccelerate())

if (dev) {
	__prisma = prisma
}

export { prisma }

export interface PrismaError extends Error {
	code: string
	meta?: {
		cause: string
	}
}
