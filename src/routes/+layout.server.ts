import type { LayoutServerLoad } from './$types'
import { sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime.js'
import { redirect } from '@sveltejs/kit'

export const load: LayoutServerLoad = async ({ locals, url, cookies, params }) => {
	const defaultLanguage = cookies.get('lang') as AvailableLanguageTag

	// console.log('defaultLanguage', defaultLanguage, 'sourceLanguageTag', sourceLanguageTag, 'url.pathname', url.pathname);

	if (url.pathname === '/' && defaultLanguage !== sourceLanguageTag) {
		throw redirect(302, `/${defaultLanguage}`)
	}

	return { theme: locals.theme, lang: locals.paraglide, cookieConsent: locals.cookieConsent, isMobile: locals.isMobile }
}
