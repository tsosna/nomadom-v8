// ./src/params/lang.ts
import { availableLanguageTags, type AvailableLanguageTag } from "@/paraglide/runtime"

export const match = (param: 'en' | 'pl'): param is AvailableLanguageTag => {
	return availableLanguageTags.includes(param)
}
