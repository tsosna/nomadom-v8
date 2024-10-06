import type { AvailableLanguageTag } from '../../lib/paraglide/runtime'
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit'
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			paraglide: ParaglideLocals<AvailableLanguageTag>
			theme: string
			lang: AvailableLanguageTag
			cookieConsent: string
		}
		// interface Error {}
		interface Error {
			message: string
			errorId?: string
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	let __prisma: import('@prisma/client/edge').PrismaClient
}

export {}
