<script>
	export let teamLogo = '';
	export let teamName = '';
</script>

<div class=" flex flex-col items-center justify-center">
	<img class="h-10" src={teamLogo} alt="" />
	<p class="text-white text-xl font-bold">
		{teamName}
	</p>
</div>
