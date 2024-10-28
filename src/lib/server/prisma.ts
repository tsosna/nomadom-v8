//TODO before deploy to Vercel, change DATABASE_URL="postgresql in .vnc" to DATABASE_URL="prisma in .env"

import { withAccelerate } from '@prisma/extension-accelerate' // Vercel compatible

import { dev } from '$app/environment' // Local compatible
const PrismaClient = dev
	? (await import('@prisma/client')).PrismaClient
	: (await import('@prisma/client/edge')).PrismaClient

const prisma = dev
	? /* @ts-expect-error __prisma does exist globally declaration in src/app.d.ts*/
		global.__prisma || new PrismaClient() /* Local compatible*/
	: new PrismaClient().$extends(withAccelerate()) /* Vercel compatible*/

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
