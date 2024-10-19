import { json, type RequestHandler } from '@sveltejs/kit'

import { prisma } from '@/server/prisma'

export const GET: RequestHandler = async (event) => {
	const projects = await prisma.project.findMany({
		include: { image: { select: { alt: true, caption: true, hash: true, url: true } } }
	})

	event.setHeaders({ 'Cache-control': 'public, max-age=0, s-maxage=60' })

	return json(projects)
}
