import { i18n } from '$lib/i18n'
import type { Handle, HandleServerError } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'


export const theme: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme') || 'Sun'

console.log('theme', event.cookies.get('theme'));


  event.locals.theme = theme


  return await resolve(event)

}

export const handleError: HandleServerError = async ({ error}) => {
	interface localError extends Error {
		message: string
		errorId?: string
	}

	const messageError = error as localError
	return { message: `Ups! Something went wrong. ${messageError.message}`, errorId: 'No. 125444' }
}

export const handle: Handle = sequence(theme)

export const handle = sequence(i18n.handle())