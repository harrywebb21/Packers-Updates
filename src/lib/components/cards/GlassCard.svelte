<script>
	export let width = 'full';
	export let height = 'full';
</script>

{#if width === 'full'}
	<div class="glass flex items-center justify-center w-full">
		<slot />
	</div>
{:else if width === 'fit'}
	<div class="glass flex items-center justify-center w-fit">
		<slot />
	</div>
{/if}

<style>
	.glass {
		background: rgba(255, 255, 255, 0.1);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		border-radius: 1rem;
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255, 255, 255, 0.3);
	}
</style>
