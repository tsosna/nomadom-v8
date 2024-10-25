// import { dev } from '$app/environment'

import { PrismaClient } from '@prisma/client/edge' // Vercel compatible
// import { PrismaClient } from '@prisma/client' // Local compatible
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





