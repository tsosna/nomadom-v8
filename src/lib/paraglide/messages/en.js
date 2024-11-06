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
export const companySlogan = () => `Your home, your rules`


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
export const aboutThisApp = () => `Discover our innovative modular home designs, designed for speed of construction, simplicity of construction and cost savings. Our homes not only offer fast construction, but also cost-effective solutions compared to traditional construction methods. We invite you to explore the future of construction!`


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
export const useCookies = () => `We use cookies to ensure you get the best experience on our website. By continuing to use this website, you agree to our use of cookies.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const disable = () => `Disable`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const rightElevation = () => `Right side elevation`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const frontElevation = () => `Front elevation`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const rearElevation = () => `Rear elevation`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const leftElevation = () => `Left side elevation`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const livingRoom = () => `Living room`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const bedroom = () => `Bedroom`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const showerRoom = () => `Shower room`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const form = () => `Form`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const investorForm = () => `Investor form`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const brochure = () => `Information Brochure`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const groundFloorPlan = () => `Ground floor plan`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const houseSectionPlan = () => `House section plan`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const room = () => `Room`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const roomInventory = () => `Room inventory`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const technicalData = () => `Technical data`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const localizationPlan = () => `Localization plan`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const CLARO_label = () => `Claro = successful relaxation surrounded by nature`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const CLARO_shortDescription = () => `A single-storey house, designed for a family of 1-3 people. The interior of the house consists of a spacious living room with dining area, kitchen, 2 bedrooms, 1 bathroom. The house has a large terrace, which is an ideal place to relax outdoors.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const CLARO_longDescription = () => `### CLARO
With investors in mind, we offer a single-storey house that is ideal as a rental property. Its functionality and attractive design will attract numerous tenants, and thanks to its proven construction and robust materials, it will provide many years of trouble-free use. At the same time, our duplex house is ideal as a holiday home that can function as a year-round living space.
Claro is the ideal solution for families. Designed with a standard family of four in mind, our model offers everything you need to live comfortably. High windows provide plenty of narural light, making the interior of the house bright and welcoming.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const CLARO_mainBenefits = () => `### **The main advantages of the house are :**.
- ideal recreational home
- excellent for rental purposes
- ideal for a small family
- quick construction
- bright and spacious
- economical`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const CLARO_additionalInfo = () => `### **Additional information:**
- usable area: 70 m2
- construction area: 70 m2
- roof pitch: 30°
- height of house: 3.5 m
- width of house: 8.5 m
- length of house: 8.5 m
- number of bedrooms: 3
- number of bathrooms: 1
- number of floors: 1
- terrace: yes
- garage: no
- basement: no`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const CLARO_technicalInfo = () => `### **Technical data:**
- usable area: 58.4m2
- pitched roof 37 degrees
- length of building 12.5m
- width of building 6.1m
- building height: 5.15m
- number of storeys: one 
- construction possible upon notification
### **Technology:**
- timber frame c24
- 14 cm PUR thermal insulation
- façade: façade board + plaster
- heating: heat pump + goat 
- **required utilities**: water, electricity`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const assemblyGuide = () => `Modular Home Construction: Wall Assembly Guide`
