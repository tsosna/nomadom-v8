import { dev } from '$app/environment' // Local compatible
import { json, type RequestHandler } from '@sveltejs/kit'
import { prisma } from '@/server/prisma'

export const GET: RequestHandler = async (event) => {
	const projects = await prisma.project.findMany({
		...(dev ? {} : { cacheStrategy: { swr: 60, ttl: 60 } }), // Add cache strategy only for Vercel deployment
		include: {
			images: {
				include: { homeType: {} }
			}
		}
	})

	event.setHeaders({ 'Cache-control': 'public, max-age=0, s-maxage=60' })

	return json(projects)
}
