// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from '@inlang/paraglide-sveltekit'
import * as runtime from '$lib/paraglide/runtime.js'

export const i18n = createI18n(runtime, {
	// pathnames - wyłączone z powodu nie kompatybilności z Vercelem
	// pathnames: {
	// 	"/about": {
	// 		en: "/about",
	// 		de: "/ueber-uns",
	// 		fr: "/a-propos",
	// 		pl: "/o-nas",
	// 	},
	// 	"/projects": {
	// 		en: "/projects",
	// 		de: "/projecte",
	// 		fr: "/projets",
	// 		pl: "/projekty",
	// 	},
	// 	"/users": {
	// 		en: "/users",
	// 		de: "/benutzer",
	// 		fr: "/utilisateurs",
	// 		pl: "/uzytkownicy",
	// 	},
	// 	"/users/[id=int]/[...rest]": {
	// 		en: "/users/[id=int]/[...rest]",
	// 		de: "/benutzer/[id=int]/[...rest]",
	// 		fr: "/utilisateurs/[id=int]/[...rest]",
	// 		pl: "/uzytkownicy/[id=int]/[...rest]",
	// 	},
	// 	"/users/[id]/edit": {
	// 		en: "/users/[id]/edit",
	// 		de: "/benutzer/[id]/bearbeiten",
	// 		fr: "/utilisateurs/[id]/modifier",
	// 		pl: "/uzytkownicy/[id]/edytuj",
	// 	},
	// 	"/some-subpage": {
	// 		en: "/some-subpage",
	// 		de: "/irgendeine-unterseite",
	// 		fr: "/quelque-sous-page",
	// 		pl: "/jakas-podstrona",
	// 	},
	// },
	seo: {
		//noAlternateLinks: false,
	},
	exclude: ['/base/not-translated'],
	textDirection: {
		en: 'ltr',
		de: 'ltr',
		fr: 'ltr',
		pl: 'ltr'
	}
})
