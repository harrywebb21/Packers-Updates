<script lang="ts">
	import Navbar from '$lib/components/nav/Navbar.svelte';
	import '../app.postcss';

	export let data;

	function date(date: any) {
		const completeDate = new Date(date);
		return (
			(completeDate.toDateString() + ' ' + completeDate.toLocaleTimeString()).slice(0, 21) + ' PM'
		);
	}
</script>

<Navbar teamLogo={data.packerData.team.logos[0].href} teamName="Frozen Tundra News" />

<div class=" w-full p-[10px] text-white flex flex-col gap-6 justify-center items-center">
	<slot />
</div>
