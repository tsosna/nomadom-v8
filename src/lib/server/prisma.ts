

// TODO: Uncomment the following code to enable Vercel compatible
// import { PrismaClient } from '@prisma/client/edge' // Vercel compatible
// import { withAccelerate } from '@prisma/extension-accelerate' // Vercel compatible
// const prisma = new PrismaClient().$extends(withAccelerate())  // Vercel compatible



// TODO: Uncomment the following code to enable Local compatible
// Start - Local compatible
import { dev } from '$app/environment' // Local compatible
import { PrismaClient } from '@prisma/client' // Local compatible

// @ts-expect-error __prisma does exist globally declaration in src/app.d.ts
const prisma = global.__prisma || new PrismaClient() // Local compatible

if (dev) {
	// @ts-expect-error __prisma does exist globally declaration in src/app.d.ts
	global.__prisma = prisma
}
// End - Local compatible

export { prisma }

export interface PrismaError extends Error {
	code: string
	meta?: {
		cause: string
	}
}





