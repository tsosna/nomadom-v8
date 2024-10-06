import { i18n } from '@/i18n'
import type { Handle, HandleServerError } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import {
	sourceLanguageTag,
	type AvailableLanguageTag,
	availableLanguageTags
} from '$paraglide/runtime'
import { langTag } from '@/i18n-routing'
import type { AvailableThemeTag } from './lib/components/ui/theme/theme-state.svelte'


// FIXME: This is a workaround to get the theme cookie set on the first load
// This should be change
export const theme: Handle = async ({ event, resolve }) => {
	const theme: AvailableThemeTag = event.cookies.get('theme') as AvailableThemeTag
	if (!theme) {
		event.cookies.set('theme', 'Sun', { path: '/', maxAge: 60 * 60 * 24 * 7, httpOnly: false })
		event.locals.theme = 'Sun'
		return await resolve(event)
	}

	event.locals.theme = theme
	return await resolve(event)
}

// export const handleCookie: Handle = async ({ event, resolve }) => {
// 	const cookie = event.cookies.get('cookieConsent') as string
// 	if (!cookie) {
// 		event.cookies.set('cookieConsent', 'false', { path: '/', maxAge: 60 * 60 * 24 * 7, httpOnly: false })
// 	}
	
// 	return await resolve(event)
// }


export const handleError: HandleServerError = async ({ error }) => {
	interface localError extends Error {
		message: string
		errorId?: string
	}

	const messageError = error as localError
	return {
		message: `Ups! Something went wrong. Internal error in hooks. ${messageError.message}`,
		errorId: `${messageError.errorId}`
	}
}

export const lang: Handle = async ({ event, resolve }) => {
	const { headers } = event.request
	const locale: AvailableLanguageTag = (headers
		.get('Accept-Language')
		?.split(',')[1]
		?.substring(0, 2) || sourceLanguageTag) as AvailableLanguageTag

	const langFromCookie = event.cookies.get('lang') as AvailableLanguageTag

	if (!langFromCookie) {
		event.cookies.set('lang', langTag(event.url.pathname + '/') || locale || sourceLanguageTag, {
			path: '/'
		})
		return await resolve(event)
	}
	const startsWithAvailableLanguageTag = availableLanguageTags.some((tag) =>
		event.url.pathname.startsWith(`/${tag}`)
	)

	if (startsWithAvailableLanguageTag && !event.url.pathname.includes('favicon.png')) {
		event.cookies.set('lang', langTag(event.url.pathname + '/') || locale || sourceLanguageTag, {
			path: '/'
		})
		return await resolve(event)
	}

	if (event.url.pathname === '/' && !langFromCookie) {
		event.cookies.set('lang', locale || sourceLanguageTag, { path: '/' })
		return await resolve(event)
	}
	if (!startsWithAvailableLanguageTag) {
		event.cookies.set('lang', sourceLanguageTag, { path: '/' })
	}

	if (event.url.pathname === '/' && langFromCookie) {
		return await resolve(event)
	}

	event.locals.lang = event.cookies.get('lang') as AvailableLanguageTag

	return await resolve(event)
	// const { headers } = event.request;
	// const locale: AvailableLanguageTag = (headers.get('Accept-Language')?.split(',')[1]?.substring(0, 2) || sourceLanguageTag) as AvailableLanguageTag;
	// const langFromCookie = event.cookies.get('lang') as AvailableLanguageTag;

	// if (!langFromCookie || event.url.pathname === '/') {
	// 	const langValue = langTag(event.url.pathname + '/') || locale || sourceLanguageTag;
	// 	event.cookies.set('lang', langValue, { path: '/' });
	// } else if (availableLanguageTags.some((tag) => event.url.pathname.startsWith(`/${tag}`)) && !event.url.pathname.includes('favicon.png')) {
	// 	const langValue = langTag(event.url.pathname + '/') || locale || sourceLanguageTag;
	// 	event.cookies.set('lang', langValue, { path: '/' });
	// } else if (!startsWithAvailableLanguageTag && event.url.pathname !== '/') {
	// 	event.cookies.set('lang', sourceLanguageTag, { path: '/' });
	// }

	// event.locals.lang = event.cookies.get('lang') as AvailableLanguageTag;

	// return await resolve(event);
}

export const handle = sequence(i18n.handle(), theme, lang)
