<script>
	export let title = '';
	export let date = '';
</script>

<div class="date-box flex flex-col items-center justify-center gap-2">
	<p class=" text-3xl font-extrabold">{title}</p>
	<p class="  text-xl font-semibold text-center">{date}</p>
</div>

<style>
	.date-box {
		padding: 1rem;
		border: 2px solid #ffb612;
		border-radius: 10px;
		background: #323232;
	}
</style>
