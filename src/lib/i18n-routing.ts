import {
	sourceLanguageTag,
	type AvailableLanguageTag,
	availableLanguageTags
} from '$paraglide/runtime'

/**
 * Returns the path in the given language, regardless of which language the path is in.
 */
export function route(path: string, lang: AvailableLanguageTag) {
	path = withoutLanguageTag(path)

	// Don't prefix the default language
	if (lang === sourceLanguageTag) return path

	// Prefix all other languages
	return `/${lang}${path}`
}

/**
 * Returns the path without the language tag
 */
function withoutLanguageTag(path: string) {
	// @ts-expect-error We are assuming that maybeLang could be an AvailableLanguageTag
	const [_, maybeLang, ...rest] = path.split('/')
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return `/${rest.join('/')}`
	}
	return path
}

/**
 * Look up the text direction for a given locale.
 * You could use a Polyfill for `Intl.Locale.prototype.getTextInfo` instead.
 */
export function getTextDirection(locale: AvailableLanguageTag) {
	const directions: Record<AvailableLanguageTag, 'ltr' | 'rtl'> = {
		en: 'ltr',
		de: 'ltr',
		pl: 'ltr',
		fr: 'ltr'
	}

	return directions[locale]
}

export const langTag = (path: string) => {
	const [_, maybeLang] = path.split('/')
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return maybeLang as AvailableLanguageTag
	}
	return undefined
}

export const langTagFromUrl = (url: string) => {
	const path = new URL(url).pathname
	const [_, maybeLang] = path.split('/')
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return maybeLang as AvailableLanguageTag
	}
	return sourceLanguageTag
}
