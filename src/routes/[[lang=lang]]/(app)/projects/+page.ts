//TODO: chack if prerender is needed for Vercel deployment
// export const prerender = true

import type { ProjectWithImages } from '$lib/schemas/type'

export const load = async ({ fetch }) => {
  const response = await fetch('/api/projects')
  const projects = await response.json()
  return {projects}
};



// async function getProjects() {
//   const response = await fetch('http://localhost:5173/api/projects')
//   const projects: Array<ProjectImgTYPE> = await response.json()
//   return projects
// }

// export const load = async () => {
//   return {
//     projects: await getProjects()
//   }
// };