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
