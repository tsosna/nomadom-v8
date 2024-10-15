import type { Project } from '@/schemas/generated'

export async function getProject(slug: string): Promise<Project> {
	const res = await fetch(`/api/project/${slug}`)
	if (res.ok) {
		return await res.json()
	}
	throw new Error(res.statusText)
}

export const projects: Array<Project> = [{
	id: '1',
name:'CLARO',
icon:'Leaf',
label:'CLATO_label',
tags:['wood', 'eco', 'modern'],
shortDescription:'CLARO_shortDescription',
longDescription:"CLARO_longDescription",
mainBenefits:"CLARO_mainBenefits",
additionalInfo:"CLARO_additionalInfo",
usableArea: 35,
numPeople:'1-3',
roofType:'PITCHED',
status:'DRAFT',
createdAt:new Date(),
updatedAt:new Date(),



},

]


