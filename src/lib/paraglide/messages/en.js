/* eslint-disable */
/**
 * This file contains language specific message functions for tree-shaking.
 *
 *! WARNING: Only import messages from this file if you want to manually
 *! optimize your bundle. Else, import from the `messages.js` file.
 *
 * Your bundler will (in the future) automatically replace the index function
 * with a language specific message function in the build step.
 */

/**
 * @param {{ languageTag: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const currentLanguageTag = (params) => `The current language tag is: ${params.languageTag}.`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const copyright = () => `All rights reserved`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const companyName = () => `Modular Technologies Lt.`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const companyNameShort = () => `Modular Technologies`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const modules = () => `Modules`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const appName = () => `nomadoM`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const themeLight = () => `Light`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const themeDark = () => `Dark`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const languageNamesEn = () => `English`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const languageNamesDe = () => `German`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const languageNamesFr = () => `French`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const languageNamesPl = () => `Polish`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const about = () => `About`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const projects = () => `Projects`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const home = () => `Home`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const contact = () => `Contact`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const aboutThisApp = () =>
	`Discover our innovative modular home designs, designed for speed of construction, simplicity of construction and cost savings. Our homes not only offer fast construction, but also cost-effective solutions compared to traditional construction methods. We invite you to explore the future of construction!`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const clickContinue = () => `By clicking continue, you agree to our`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const previousPage = () => `Previous page`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const termsService = () => `Terms of Service`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const privacyPolicy = () => `Privacy Policy`

/**
 * @param {{ name: NonNullable<unknown>, title: NonNullable<unknown>, subtitle: NonNullable<unknown>, alt: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const homes = (params) => `${params.name} ${params.title} ${params.subtitle} ${params.alt}`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const titleJaponico = () => `This is the time for you`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const subtitleJaponico = () => `Japonico 35 is fully finished and ready to move in`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const altJaponico = () => `Japonico 35 is fully finished and ready to move in`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const altOptimo = () => `The ideal home for the young.`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const altBosco = () => `The perfect home for the family.`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const socials = () => `Socials`

/**
 *
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const useCookies = () =>
	`We use cookies to ensure you get the best experience on our website. By continuing to use this website, you agree to our use of cookies.`
