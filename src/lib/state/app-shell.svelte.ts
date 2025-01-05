import { getContext, setContext } from 'svelte'

export class OpenNavSide {
	openNavSide = $state(false)

	// constructor() {
	//   $effect(() => {
	//     console.log('openNavSide', this.openNavSide);
	//   })
	// }

	toggleNavSide = (open: boolean) => {
		this.openNavSide = open
	}
}

const OPEN_NAV_SIDE_KEY = Symbol('OPEN_NAV_SIDE')

/**
 * Sets the toast state by creating a new instance of ToastState and setting it as the context value.
 * @returns {void}
 */
export function setOpenNavSideState() {
	return setContext(OPEN_NAV_SIDE_KEY, new OpenNavSide())
}

export function getOpenNavSideState() {
	return getContext<ReturnType<typeof setOpenNavSideState>>(OPEN_NAV_SIDE_KEY)
}
