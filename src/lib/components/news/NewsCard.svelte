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

<GlassCard width="full">
	<div class="content w-full">
		<img class="img" src={image} alt="" />
		<div class="text">
			<GlassCard width="full">
				<h1 class="headline">{headline}</h1>
			</GlassCard>
			<GlassCard width="full">
				<p class="published">{description}</p>
			</GlassCard>
			<div class="flex justify-between flex-wrap gap-2">
				<div class="flex gap-3">
					<GlassCard width="fit">
						<p class="published">{date(published)}</p>
					</GlassCard>
					<div class="byline">
						<GlassCard width="fit">
							<p class="published">{byline}</p>
						</GlassCard>
					</div>
				</div>

				<a class="published flex items-center justify-center" href={link}>Read More</a>
			</div>
		</div>
	</div>
</GlassCard>

<style>
	.content {
		border-radius: 16px;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: space-between;
	}

	.headline {
		font-size: clamp(0.75rem, 1vw + 1rem, 1.5rem);
		font-weight: 700;
		padding: 0.25rem 0.5rem;
		color: white;
		border-radius: 15px;
		width: 100%;
	}

	.published {
		font-size: clamp(0.5rem, 1vw + 0.5rem, 2.5rem);
		font-weight: 700;
		padding: 0.25rem 0.5rem;
		color: white;
		border-radius: 15px;
	}

	a {
		text-decoration: none;
		background-color: var(--packer-yellow);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		transition: all 0.2s ease-in-out;
	}

	a:active {
		transform: scale(0.95);
	}

	.img {
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: 15px;
		object-fit: cover;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.byline {
		display: none;
	}
	@media (min-width: 451px) {
		.img {
			width: 100%;
		}
		.byline {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.img {
			width: 100%;
		}
		.byline {
			display: flex;
		}
	}
	@media (min-width: 988px) {
		.img {
			width: 30%;
		}
		.content {
			flex-direction: row;
			gap: 1rem;
		}
	}
	@media (min-width: 1280px) {
		.img {
			width: 20%;
		}
	}
</style>
