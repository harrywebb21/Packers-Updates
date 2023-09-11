<script>
	let localTime = new Date().toLocaleTimeString();
	let localDate = new Date().toDateString();

	setInterval(() => {
		localTime = new Date().toLocaleTimeString();
		localDate = new Date().toDateString();
	}, 1000);
</script>

<div class="local-container flex justify-end items-center gap-20">
	<p class="date text-3xl font-extrabold">{localDate}</p>
	<div class="seperator-line h-10" />
	<p class="time text-3xl font-extrabold">
		{localTime}
		{#if localTime >= '12:00:00'}
			PM
		{:else}
			AM
		{/if}
	</p>
	<slot />
</div>

<style>
	.local-container {
		border-radius: 20px;
		padding: 1rem;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
		background: #ffb612;
		position: relative;
	}

	.seperator-line {
		border: 2px solid #203731;
		border-radius: 10px;
		margin-block: 0.5rem;
	}
</style>
