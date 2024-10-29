<script lang="ts">
	import { page } from '$app/stores'
	import Checkbox from '@/components/ui/checkbox/checkbox.svelte'
	import Input from '@/components/ui/input/input.svelte'
	import { Button } from '@/components/ui/button'
	import { getToastState } from '@/components/ui/toast/toast-state.svelte'
	import { Timer } from '@/utils.svelte'
	import { Breadcrumb } from '@/components/ui/breadcrumb'
	import { currentLanguageTag, projects } from '$paraglide/messages'
	import { languageTag } from '$paraglide/runtime'

	function createCounter() {
		let counter = $state({ count: 0 })
		return counter
	}

	let counter = createCounter()

	let todos = $state([{ id: 1, text: 'Learn SvelteKit', done: false }])

	function addTodo(event: MouseEvent | KeyboardEvent) {
		if ((event as MouseEvent).button !== 0 || (event as KeyboardEvent).key !== 'Enter') return

		todos.push({
			id: todos.length + 1,
			text: (event.target as HTMLInputElement)?.value,
			done: false
		})
	}

	let number = $state([1, 2, 3, 4, 5, 6, 7, 8, 9])
	let sum = $derived(number.reduce((a, b) => a + b))
	let length = $derived(number.length)

	function add() {
		number.push(number.length + 1)
	}

	const toastState = getToastState()

	const timer = new Timer()
	timer.increment(10)

	$effect(() => {
		console.log(timer.count)
	})
</script>

<Breadcrumb />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>{currentLanguageTag({ languageTag: languageTag() })}</p>

<Button onclick={() => (counter.count += 2)}>{counter.count}</Button>

<Input type="text" onkeydown={addTodo} class="w-min" />
<Button onmousedown={addTodo}>Add</Button>
{#each todos as todo}
	<div>
		<div class="inline-flex items-center">
			<Input type="text" bind:value={todo.text} class="w-min" />
			<Checkbox bind:checked={todo.done} class="h-6 w-6" />{todo.done
				? 'done'
				: 'not done'}{todo.text}
		</div>
	</div>
{/each}

<Button onclick={add}>{sum} {length}</Button>

<Button
	onclick={() =>
		toastState.add({
			title: 'Success',
			message: 'This is a success message',
			background: 'bg-surface',
			CLASS: 'text-surface-foreground'
		})}>Toast</Button
>

<h1>{timer.count * 10} second</h1>
<h1>{$page.data.theme}</h1>



