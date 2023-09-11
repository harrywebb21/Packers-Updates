<script lang="ts">
	import GlassCard from '../cards/GlassCard.svelte';

	export let headline = 'Headline';
	export let description = 'Description';
	export let published = 'Published';
	export let byline = 'Byline';
	export let image = 'Image';
	export let link = 'Link';

	function date(date: any) {
		const completeDate = new Date(date);
		return (
			(completeDate.toDateString() + ' ' + completeDate.toLocaleTimeString()).slice(0, 21) + ' PM'
		);
	}
</script>

<a href={link}>
	<GlassCard width="fit">
		<div class="container">
			<img class="img" src={image} alt="" />

			<GlassCard width="fit">
				<h1 class="headline">{headline}</h1>
			</GlassCard>

			<p class="published">{date(published)}</p>
		</div>
	</GlassCard>
</a>

<style>
	.container {
		border-radius: 16px;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.headline {
		width: fit-content;
		font-size: clamp(0.75rem, 1vw + 1rem, 2.5rem);
		font-weight: 700;
		padding: 0.5rem 1rem;
		color: white;
		border-radius: 15px;
	}

	.published {
		width: fit-content;
		font-size: clamp(0.75rem, 1vw + 1rem, 1rem);
		font-weight: 400;
		padding: 0.5rem 1rem;
		color: white;
		border-radius: 15px;
		background-color: var(--packer-yellow);
	}

	.img {
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: 15px;
	}
</style>
