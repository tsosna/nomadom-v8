import { dev } from '$app/environment'
const { PrismaClient } = dev ? await import('@prisma/client') : await import('@prisma/client/edge');
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

console.log({dev});

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





