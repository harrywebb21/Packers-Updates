<script lang="ts">
	import { convertDate, convertTime } from '$lib';
	export let data;
	console.log('data:', data.packerData.team);
</script>

<div class="game-container">
	<div class=" w-full flex flex-col items-center gap-4">
		<div class="date-container">
			<p class="week">WEEK {data.packerData.team.nextEvent[0].week.number}</p>
			<div class="flex flex-col items-end justify-end">
				<p class="date">{convertDate(data.packerData.team.nextEvent[0].date)}</p>
				<p class="time">{convertTime(data.packerData.team.nextEvent[0].date)}</p>
			</div>
		</div>
		<div class="mobile-score w-[90%] flex gap-4">
			<div class="game-time">
				<p>
					{data.packerData.team.nextEvent[0].competitions[0].status.displayClock} Q{data.packerData
						.team.nextEvent[0].competitions[0].status.period}
				</p>
			</div>
			<div class="game-score">
				<p>0 - 0</p>
			</div>
		</div>
	</div>
	<p class="team-name home">
		{data.packerData.team.nextEvent[0].competitions[0].competitors[0].team.shortDisplayName}
	</p>
	<p class="team-name away">
		{data.packerData.team.nextEvent[0].competitions[0].competitors[1].team.shortDisplayName}
	</p>
	<div class="flex">
		{#each data.packerData.team.nextEvent[0].competitions as nextEvent}
			{#each nextEvent.competitors as teams}
				<img class="team-logo" src={teams.team.logos[0].href} alt="" />
			{/each}
		{/each}
	</div>
</div>

<style>
	.game-container {
		background-color: var(--packer-yellow);
		width: 100%;
		height: 375px;
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
		padding-top: 1rem;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}

	.date-container {
		width: 90%;
		height: 4.5rem;
		background-color: rgb(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-bottom: 1px solid rgb(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
	}
	.week {
		font-size: 3rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--packer-green);
		line-height: normal;
	}
	.date,
	.time {
		line-height: 90%;
		font-size: 1.25rem;
		font-weight: 700;
	}

	.game-time,
	.game-score {
		height: 3.125rem;
		width: 90%;
		background-color: rgb(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-bottom: 1px solid rgb(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.game-time,
	.game-score {
		font-size: 2.25rem;
		font-weight: 700;
	}
	.game-score {
		color: var(--packer-green);
	}

	.team-logo {
		margin-top: -1.5rem;
		width: 200px;
		height: 200px;
		filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.25)) grayscale(100%);
	}
	.team-name {
		font-size: 5rem;
		font-weight: 900;
		text-transform: uppercase;
		color: rgb(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 3.75rem;
	}
	.home {
		position: absolute;
		bottom: 16%;
		left: 0.25rem;
	}
	.away {
		position: absolute;
		bottom: 0;
		right: 0.25rem;
	}
</style>
