import { browser } from '$app/environment'
import { Sun, Moon } from '$lib/components/ui/icon'

export type Theme = 'Sun' | 'Moon'

class ThemeState {
	private browser = browser;
	private userTheme: Theme = 'Sun';

	constructor() {
		this.userTheme = (this.browser && (localStorage.getItem('theme') ?? 'Sun')) as Theme
	}

	public availableThemesTags:Array<Theme> = ['Sun', 'Moon'];
	public Icon = { Sun, Moon };

	public preferTheme = $state({
		icon: this.Icon[this.userTheme as keyof typeof this.Icon],
		tag: this.userTheme
	});

}

export const themeState = new ThemeState();

