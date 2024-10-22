import { json, type RequestHandler } from '@sveltejs/kit'

import { prisma } from '@/server/prisma'

export const GET: RequestHandler = async (event) => {
	const projects = await prisma.project.findMany({
		cacheStrategy: { swr: 60, ttl: 60 },
		include: {
			image: {
				include: { homeType: {} }
			}
		}
	})

	event.setHeaders({ 'Cache-control': 'public, max-age=0, s-maxage=60' })

	return json(projects)
}
