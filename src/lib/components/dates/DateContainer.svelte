<script>
	import Datebox from './Datebox.svelte';
	export let startTitle = '';
	export let startDate = '';
	export let endTitle = '';
	export let endDate = '';
	export let seasonDate = '';
</script>

<div class="date-container h-full w-2/3">
	<div class="season-container">
		<p class=" text-3xl font-extrabold">Season</p>
		<p class=" text-3xl font-extrabold">{seasonDate}</p>
	</div>
	<div class="seperator-line" />
	<div class="datebox-container flex justify-between gap-5">
		<Datebox title={startTitle} date={startDate} />
		<Datebox title={endTitle} date={endDate} />
	</div>
</div>

<style>
	.date-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border: 5px solid #ffb612;
		border-radius: 20px;
		padding: 1rem;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
		background: #212121;
	}

	.season-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 2px solid #ffb612;
		border-radius: 10px;
		padding-inline: 1rem;
		padding-block: 0.5rem;
		background: #323232;
	}

	.seperator-line {
		border: 2px solid #203731;
		border-radius: 10px;
		margin-block: 0.5rem;
	}
</style>
