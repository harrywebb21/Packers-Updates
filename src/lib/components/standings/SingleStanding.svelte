<script>
	import GlassCard from '../cards/GlassCard.svelte';
	export let teamName = '';
	export let teamLogo = '';
</script>

<GlassCard width="full">
	<div class="flex items-center justify-center w-full px-3">
		<div class=" ">
			<img class="h-16" src={teamLogo} alt="" />
		</div>
		<p class="team-name font-black">{teamName}</p>
		<slot />
	</div>
</GlassCard>
