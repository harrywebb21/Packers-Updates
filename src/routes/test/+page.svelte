<script>
	import GlassCard from '$lib/components/cards/GlassCard.svelte';

	export let data;
	console.log('packer data:', data.packerData);
</script>

<div class="wrapper h-[300px] w-screen relative overflow-hidden -mt-8">
	<div class="banner-yellow" />
	<div class="banner-green" />
	<div class="banner-white" />
	<img class="logo h-[400px]" src={data.packerData.team.logos[0].href} alt="" />
</div>

<style>
	.banner-green {
		background-color: #203731;
		height: 300px;
		width: 100%;
		position: absolute;
		z-index: 3;
		top: -0px;
		left: -25%;
		transform: skewX(-20deg);
		border-bottom: 2px solid white;
	}

	.banner-white {
		background-color: #fff;
		height: 300px;
		width: 100%;
		position: absolute;
		z-index: 2;
		top: 0px;
		left: -20%;
		transform: skewX(-20deg);
		border-bottom: 2px solid white;
	}

	.banner-yellow {
		background-color: #ffb612;
		height: 300px;
		width: 100%;
		position: absolute;
		top: 0px;
		border-bottom: 2px solid white;
	}

	.logo {
		position: absolute;
		top: 50%;
		right: 0%;
		transform: translateX(50%) translateY(-50%);
		z-index: 1;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}
</style>
