## Comment

The aim should be to implement a single instance of the component. It will remain globally scoped and can be used to the **toasts rune** declared in toast-state.svelte.ts.
The implementation of the single instance should be done in the main layout above the shell.

### script block

```javascript
import { setToastState } from '@/components/ui/toast/toast-state.svelte'
import Toaster from '@/components/ui/toast/toaster.svelte'
setToastState()
```

### html block

```javascript
<Toaster />
```

@component
@name Toaster

## Props

- position: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br' = 'b'
- duration: number = 150

## Example

### script block

```javascript
import { getToastState } from '@/components/ui/toast/toast-state.svelte'
const toastState = getToastState()
```

### html block

/\*\*

- Displays a toast message when the "Toast" button is clicked.
-
- @param {string} title? - The title of the toast message.
- @param {string} message - The content of the toast message.
- @param {string} background? = bg-primary - The background color of the toast message.
- @param {string} CLASS? - Additional CSS CLASS for the toast message.
- @param {boolean} autohide? = true - By default it hides after 5000 ms. Setting to false will hide after 5 minutes.
- @param {number} timeout = 5000 - The value should be specified in milliseconds
  */
  *Recommended colors:

* for Error
  background: 'bg-destructive',
  CLASS: 'text-destructive-foreground'
* for Success
  background: 'bg-success',
  CLASS: 'text-success-foreground'
* for Warning
  background: 'bg-warning',
  CLASS: 'text-warning-foreground'
* for Info
  background: 'bg-info',
  CLASS: 'text-info-foreground'

-

```javascript
<Button
	onclick={() =>
		toastState.add({
			title: 'Success',
			message: 'This is a success message',
			background: 'bg-destructive',
			CLASS: 'text-destructive-foreground'
		})
	}
>
	Toast
</Button>
```
