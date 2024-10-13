import type { Project } from '@/schemas/generated'

export async function getProject(slug: string): Promise<Project> {
	const res = await fetch(`/api/project/${slug}`)
	if (res.ok) {
		return await res.json()
	}
	throw new Error(res.statusText)
}

// export const projects: Array<Project> = [{
// 	id: '1',
// name:'CLARO',
// icon:'Leaf',
// label:'CLATO_label',
// tags:['wood', 'eco', 'modern'],
// shortDescription:'CLARO_shortDescription',
// longDescription:"CLARO_longDescription",


// }]


// model Project {
//   id               String     @id @unique
//   name             String   // e.g. "JAPONICO 35", OPTIMO, BOSCO etc.
//   icon             String   // e.g. Flower, Leaf, Sprout, Tree, Shrub etc.
//   label            String?   //
//   tags             String[]
//   shortDescription String?
//   longDescription  String?
//   mainBenefits     String?
//   additionalInfo   String?
//   usableArea       Float?
//   numPeople        String?
//   roofType         RoofType // flat, pitched
//   status           StatusType @default(DRAFT)

//   technicalInfo TechnicalInfo[]
//   elevation     Elevation[]
//   visualization Visualization[]
//   plan          Plan[]
//   interior      Interior[]
//   plotLocation  PlotLocation[]

//   createdAt DateTime @default(now()) @map("created_at")
//   updatedAt DateTime @updatedAt @map("updated_at")
// }