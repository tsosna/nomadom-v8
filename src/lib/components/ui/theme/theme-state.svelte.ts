import { Sun, Moon } from '$lib/components/ui/icon'

export type AvailableThemeTag = 'Sun' | 'Moon'

class ThemeState {
	// FIXME: tu następuje błędna inicializacja userTheme powinna być pobierana z
	//  localStorage, ale nie wiem jak zaimprtować tą klasę tylko w trybie browser
	private userTheme: AvailableThemeTag =  'Sun'

	// console.log(this.userTheme);
	
	public availableThemesTags:Array<AvailableThemeTag> = ['Sun', 'Moon'];
	public Icon = { Sun, Moon };

	public preferTheme = $state({
		icon: this.Icon[this.userTheme as keyof typeof this.Icon],
		tag: this.userTheme
	});
}



export const themeState = new ThemeState();

