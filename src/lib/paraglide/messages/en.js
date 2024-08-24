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
export const aboutThisApp = () => `Discover our innovative modular home designs, designed for speed of construction, simplicity of construction and cost savings. Our homes not only offer fast construction, but also cost-effective solutions compared to traditional construction methods. We invite you to explore the future of construction!`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const companyName = () => `Modular Technologies Ltd.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const copyright = () => `All rights reserved`
