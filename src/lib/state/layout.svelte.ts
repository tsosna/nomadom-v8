import { getContext,  setContext } from 'svelte'


export class checkDisplay {
  isPortrait = $state(false)
	isMobile = $state(false)

  constructor() {
    // $effect(() => {
    //   console.log('CheckMobile', this.isMobile);
    //   console.log('CheckPortrait', this.isPortrait);
      
      
    // })
    this.isPortrait = window.matchMedia('(orientation: portrait)').matches
  }


	checkIfMobile(innerWidth: number) {
		this.isMobile = innerWidth <= 768
	}
}

const CHECK_DISPLAY_KEY = Symbol('CHECK_DISPLAY_SIDE')

/**
 * Sets the toast state by creating a new instance of ToastState and setting it as the context value.
 * @returns {void}
 */
export function setCheckDisplayState() {
	return setContext(CHECK_DISPLAY_KEY, new checkDisplay())
}

export function getCheckDisplayState() {
	return getContext<ReturnType<typeof setCheckDisplayState>>(CHECK_DISPLAY_KEY)
}
