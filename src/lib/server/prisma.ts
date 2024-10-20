import { dev } from '$app/environment'
// const { PrismaClient } = dev ? await import('@prisma/client') : await import('@prisma/client/edge');
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

// 	// @ts-expect-error __prisma does exist globally declaration in src/app.d.ts
const prisma = new PrismaClient().$extends(withAccelerate())

// if (dev) {
// 	// @ts-expect-error __prisma does exist globally declaration in src/app.d.ts
// 	global.__prisma = prisma
// }

export { prisma }

export interface PrismaError extends Error {
	code: string
	meta?: {
		cause: string
	}
}





