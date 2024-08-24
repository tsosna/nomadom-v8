/* eslint-disable */
import { languageTag } from "./runtime.js"
import * as en from "./messages/en.js"
import * as pl from "./messages/pl.js"
import * as de from "./messages/de.js"
import * as fr from "./messages/fr.js"


/**
 * This message has been compiled by [inlang paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).
 *
 * - Don't edit the message's code. Use [Sherlock (VS Code extension)](https://inlang.com/m/r7kp499g/app-inlang-ideExtension),
 *   the [web editor](https://inlang.com/m/tdozzpar/app-inlang-finkLocalizationEditor) instead, or edit the translation files manually.
 * 
 * - The params are NonNullable<unknown> because the inlang SDK does not provide information on the type of a param (yet).
 * 
 * @param {{ languageTag: NonNullable<unknown> }} params
 * @param {{ languageTag?: "en" | "pl" | "de" | "fr" }} options
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const currentLanguageTag = (params , options = {}) => {
	return {
		de: de.currentLanguageTag,
		en: en.currentLanguageTag,
		fr: fr.currentLanguageTag,
		pl: pl.currentLanguageTag
	}[options.languageTag ?? languageTag()](params)
}



/**
 * This message has been compiled by [inlang paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).
 *
 * - Don't edit the message's code. Use [Sherlock (VS Code extension)](https://inlang.com/m/r7kp499g/app-inlang-ideExtension),
 *   the [web editor](https://inlang.com/m/tdozzpar/app-inlang-finkLocalizationEditor) instead, or edit the translation files manually.
 * 
 * - The params are NonNullable<unknown> because the inlang SDK does not provide information on the type of a param (yet).
 * 
 * @param {{}} params
 * @param {{ languageTag?: "en" | "pl" | "de" | "fr" }} options
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const aboutThisApp = (params = {}, options = {}) => {
	return {
		de: de.aboutThisApp,
		en: en.aboutThisApp,
		fr: fr.aboutThisApp,
		pl: pl.aboutThisApp
	}[options.languageTag ?? languageTag()]()
}



/**
 * This message has been compiled by [inlang paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).
 *
 * - Don't edit the message's code. Use [Sherlock (VS Code extension)](https://inlang.com/m/r7kp499g/app-inlang-ideExtension),
 *   the [web editor](https://inlang.com/m/tdozzpar/app-inlang-finkLocalizationEditor) instead, or edit the translation files manually.
 * 
 * - The params are NonNullable<unknown> because the inlang SDK does not provide information on the type of a param (yet).
 * 
 * @param {{}} params
 * @param {{ languageTag?: "en" | "pl" | "de" | "fr" }} options
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const companyName = (params = {}, options = {}) => {
	return {
		de: de.companyName,
		en: en.companyName,
		fr: fr.companyName,
		pl: pl.companyName
	}[options.languageTag ?? languageTag()]()
}



/**
 * This message has been compiled by [inlang paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).
 *
 * - Don't edit the message's code. Use [Sherlock (VS Code extension)](https://inlang.com/m/r7kp499g/app-inlang-ideExtension),
 *   the [web editor](https://inlang.com/m/tdozzpar/app-inlang-finkLocalizationEditor) instead, or edit the translation files manually.
 * 
 * - The params are NonNullable<unknown> because the inlang SDK does not provide information on the type of a param (yet).
 * 
 * @param {{}} params
 * @param {{ languageTag?: "en" | "pl" | "de" | "fr" }} options
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const copyright = (params = {}, options = {}) => {
	return {
		de: de.copyright,
		en: en.copyright,
		fr: fr.copyright,
		pl: pl.copyright
	}[options.languageTag ?? languageTag()]()
}

