import { dev } from '$app/environment'
import { PrismaClient } from '@prisma/client/index'
import { withAccelerate } from '@prisma/extension-accelerate'

	// @ts-expect-error __prisma does exist globally declaration in src/app.d.ts
const prisma: PrismaClient = global.__prisma || new PrismaClient()

if (dev) {
	// @ts-expect-error __prisma does exist globally declaration in src/app.d.ts
	global.__prisma = prisma
}

export { prisma }

export interface PrismaError extends Error {
	code: string
	meta?: {
		cause: string
	}
}
