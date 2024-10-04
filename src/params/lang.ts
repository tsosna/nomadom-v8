// ./src/params/lang.ts
import { availableLanguageTags, type AvailableLanguageTag } from '@/paraglide/runtime'

export const match = (param: 'en' | 'de' | 'fr' | 'pl'): param is AvailableLanguageTag => {
	return availableLanguageTags.includes(param)
}
