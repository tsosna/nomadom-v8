<script lang="ts">
	import { cn } from '@/utils'
	import {
		companyName,
		copyright,
		clickContinue,
		termsService,
		privacyPolicy
	} from '$paraglide/messages'

	type Props = {
		class?: string
	}

	let { class: CLASS }: Props = $props()
</script>

<footer class="text-xs">
	<p class={cn('px-8 text-center text-sm text-muted-foreground', CLASS)}>
		&copy <span class="uppercase">{companyName()}</span>
		{new Date().getFullYear()}
		{copyright()}
		{clickContinue()}
		<a href="/terms-of-service" class="underline underline-offset-4 hover:text-primary">
			{termsService()}
		</a>
		and
		<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
			{privacyPolicy()}</a
		>
	</p>
</footer>
