import { Sun, Moon } from '$lib/components/ui/icon'

export type AvailableThemeTag = 'Sun' | 'Moon'

class ThemeState {
	// Initialize userTheme from localStorage if available, otherwise default to 'Sun'

	private userTheme: AvailableThemeTag =
		(typeof window !== 'undefined' && (localStorage.getItem('theme') as AvailableThemeTag)) || 'Sun'

	constructor() {}

	public availableThemesTags: Array<AvailableThemeTag> = ['Sun', 'Moon']
	public Icon = { Sun, Moon }

	public preferTheme = $state({
		icon: this.Icon[this.userTheme as keyof typeof this.Icon],
		tag: this.userTheme
	})
}

export const themeState = new ThemeState()
