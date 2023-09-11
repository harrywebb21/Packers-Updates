<script>
	export let title = '';
	export let src = '';
</script>

<div class="nfl-logo-container flex w-fit h-fit items-center gap-2">
	<h1 class="text-2xl font-bold">{title}</h1>
	<img class="h-10" {src} alt="" />
</div>

<style>
	@property --gradient-rotate {
		syntax: '<angle>';
		inherits: false;
		initial-value: 90deg;
	}

	.nfl-logo-container {
		border-radius: 16px;
		padding: 0.5rem 1rem;
		background-color: #151515;
		position: relative;
		color: white;
	}
	.nfl-logo-container::after {
		--gradient-rotate: 45deg;
		content: '';
		width: 102%;
		height: 110%;
		background-image: linear-gradient(var(--gradient-rotate), #d50a0a, #fff, #013369);
		position: absolute;
		z-index: -1;
		top: -5%;
		left: -1%;
		border-radius: 20px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		animation: gradient-rotate 10s infinite;
	}

	@keyframes gradient-rotate {
		from {
			--gradient-rotate: 45deg;
		}
		to {
			--gradient-rotate: 405deg;
		}
	}
</style>
