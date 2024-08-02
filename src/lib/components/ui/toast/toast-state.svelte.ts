import { getContext, onDestroy, setContext } from 'svelte'
import type { Toast, ToastSettings } from './types'

export class ToastState {
	toasts = $state<Toast[]>([])
	toastToTimeoutMap = new Map<string, number>()

	constructor() {
		onDestroy(() => {
			for (const timeout of this.toastToTimeoutMap.values()) {
				clearTimeout(timeout)
			}
			this.toastToTimeoutMap.clear()
		})
	}

	add({
		title,
		message,
		background = 'bg-primary',
		classes = '',
		autohide = true,
		timeout = 5000
	}: ToastSettings) {
		const id = crypto.randomUUID()
		this.toasts.push({
			id,
			title,
			message,
			background,
			classes
		})

		this.toastToTimeoutMap.set(
			id,
			setTimeout(
				() => {
					this.remove(id)
				},
				autohide ? timeout : 5 * 60 * 1000 // 5 minutes
			)
		)
	}

	remove(id: string) {
		const timeout = this.toastToTimeoutMap.get(id)
		if (timeout) {
			clearTimeout(timeout)
			this.toastToTimeoutMap.delete(id)
		}
		this.toasts = this.toasts.filter((toast) => toast.id !== id)
	}
}

const TOAST_KEY = Symbol('TOAST')

/**
 * Sets the toast state by creating a new instance of ToastState and setting it as the context value.
 * @returns {void}
 */
export function setToastState() {
	return setContext(TOAST_KEY, new ToastState())
}

export function getToastState() {
	return getContext<ReturnType<typeof setToastState>>(TOAST_KEY)
}

