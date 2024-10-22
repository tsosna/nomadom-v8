import type { Project, Image } from '$lib/schemas/generated';

export interface ProjectWithImages extends Project {
  image: Image[];
}