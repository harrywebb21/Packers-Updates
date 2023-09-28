<script>
	import GlassCard from '../cards/GlassCard.svelte';

	export let week = '';
	export let date = '';
	export let team1 = '';
	export let team2 = '';
	export let team1Score = '';
	export let team2Score = '';
	export let team1Logo = '';
	export let team2Logo = '';
	export let gameTime = '';
	export let quarter = '';
	export let complete = false;
</script>

<div class=" relative">
	<!-- svelte-ignore empty-block -->
	{#if !gameTime && !quarter}{:else}
		<div class="game-time-container flex items-center justify-center gap-3">
			<p class="game-time">{gameTime}</p>
			<p class="quarter">{quarter}</p>
		</div>
	{/if}
	{#if complete}
		<div
			class="game-container-complete flex justify-center items-center overflow-hidden rounded-2xl relative"
		>
			<img class="team1Logo" src={team1Logo} alt="" />
			<img class="team2Logo" src={team2Logo} alt="" />
			<div
				class="date-score-container flex flex-col w-full h-full justify-center items-center gap-5"
			>
				<GlassCard width="fit">
					<div class="date-week flex flex-col items-center justify-center h-fit p-2">
						<p class="week uppercase">Week {week}</p>
						<p class="date">{date}</p>
					</div>
				</GlassCard>

				<div class="teams flex px-3 items-center justify-evenly h-fit w-full uppercase">
					<div class="flex flex-col items-end justify-center h-fit w-full">
						<GlassCard width="fit">
							<div class="flex items-center justify-end w-full px-3 gap-3">
								<p class="team-name h-fit leading-tight">{team1}</p>
								<p class="score w-fit h-fit leading-tight">{team1Score}</p>
							</div>
						</GlassCard>
					</div>

					<div class="flex flex-col justify-center h-fit w-full">
						<GlassCard width="fit">
							<div class="flex items-center w-full px-3 gap-3">
								<p class="score w-fit h-fit leading-tight">{team2Score}</p>
								<p class="team-name w-full h-fit leading-tight">{team2}</p>
							</div>
						</GlassCard>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div
			class="game-container flex justify-center items-center overflow-hidden rounded-2xl relative"
		>
			<img class="team1Logo" src={team1Logo} alt="" />
			<img class="team2Logo" src={team2Logo} alt="" />
			<div
				class="date-score-container flex flex-col w-full h-full justify-center items-center gap-5"
			>
				<GlassCard width="fit">
					<div class="date-week flex flex-col items-center justify-center h-fit p-2">
						<p class="week uppercase">Week {week}</p>
						<p class="date">{date}</p>
					</div>
				</GlassCard>

				<div class="teams flex px-3 items-center justify-evenly h-fit w-full uppercase">
					<div class="flex flex-col items-end justify-center h-fit w-full">
						<GlassCard width="fit">
							<div class="flex items-center justify-end w-full px-3 gap-3">
								<p class="team-name h-fit leading-tight">{team1}</p>
								<p class="score w-fit h-fit leading-tight">{team1Score}</p>
							</div>
						</GlassCard>
					</div>

					<div class="flex flex-col justify-center h-fit w-full">
						<GlassCard width="fit">
							<div class="flex items-center w-full px-3 gap-3">
								<p class="score w-fit h-fit leading-tight">{team2Score}</p>
								<p class="team-name w-full h-fit leading-tight">{team2}</p>
							</div>
						</GlassCard>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	img {
		filter: grayscale(100%);
	}

	.game-time-container {
		background-color: var(--packer-yellow);
		border-radius: 1rem;
		padding: 0.25rem 1rem;
		transform: translateY(50%);
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		z-index: 1;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}

	.team1Logo {
		width: 40vw;
		aspect-ratio: 1/1;
		transform: translateX(-50%);
	}
	.team2Logo {
		width: 40vw;
		aspect-ratio: 1/1;
		transform: translateX(50%);
	}

	.team-name {
		font-weight: 800;
	}

	.date-week {
		line-height: 1;
		font-weight: 800;
	}

	.week {
		font-size: 1.5rem;
		color: #203731;
	}
	.game-container {
		background: #ffb612;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		height: clamp(100%, 15vw + 1rem, 30vw);
	}
	.game-container-complete {
		background: #203731;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		height: clamp(100%, 15vw + 1rem, 30vw);
	}
	.date-score-container {
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 20px;
	}
	.teams {
		border-radius: 0px 0px 20px 20px;
		text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
		gap: 1rem;
	}

	.game-container-complete .score,
	.game-container-complete .week {
		color: #ffb612;
		font-weight: 800;
	}
	.score {
		color: #203731;
		font-weight: 800;
	}
	@media (min-width: 431px) {
		.game-container,
		.game-container-complete {
			height: 275px;
		}

		.team-name {
			font-size: clamp(0.75rem, 7vw, 6rem);
		}
		.score {
			height: 20%;
			font-size: clamp(1rem, 10vw, 5rem);
		}
		.teams {
			height: 200px;
			gap: 2rem;
		}
		.date-score-container {
			gap: 0;
			padding-top: 2rem;
		}
	}
</style>
