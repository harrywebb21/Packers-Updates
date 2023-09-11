<script lang="ts">
	export let data;

	function date(date: any) {
		const completeDate = new Date(date);
		return (
			(completeDate.toDateString() + ' ' + completeDate.toLocaleTimeString()).slice(0, 21) + ' PM'
		);
	}

	console.log('nfl data:', data.nflData);
</script>

<div class="wrapper">
	<div class="game-time">
		<p>{data.nflData.events[0].status.displayClock}</p>
		<p>{data.nflData.events[0].status.period}</p>
	</div>
	<div class="date-team-container">
		<div class="week-date">
			<p class="week">WEEK {data.nflData.events[0].week.number}</p>
			<p>{date(data.nflData.events[0].date)}</p>
		</div>
		<div class="team-logos">
			<img
				class="team-2"
				src={data.nflData.events[63].competitions[0].competitors[1].team.logo}
				alt=""
			/>
			<img
				class="team-1"
				src={data.nflData.events[62].competitions[0].competitors[0].team.logo}
				alt=""
			/>
		</div>
	</div>
	<div class="teams-scores glass">
		<div class="team-1-name-score">
			<p class="team-name">{data.nflData.events[0].competitions[0].competitors[0].team.name}</p>
			<p class="score">{data.nflData.events[0].competitions[0].competitors[0].score}</p>
		</div>
		<div class="team-2-name-score">
			<p class="team-name">{data.nflData.events[0].competitions[0].competitors[1].team.name}</p>
			<p class="score">{data.nflData.events[0].competitions[0].competitors[1].score}</p>
		</div>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		padding-inline: 1rem;
		width: clamp(100%, 20vw + 1rem, 100%);
		height: clamp(100%, 20vw + 1rem, 100%);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 20px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.37);
		background-color: var(--packer-yellow);
	}

	.glass {
		background: rgba(255, 255, 255, 0.1);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.37);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: 20px;
	}

	.game-time {
		display: flex;
		justify-content: space-between;
	}

	.date-team-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: clamp(100%, 20vw + 1rem, 100%);
	}
	.week-date {
		display: flex;
		flex-direction: column;
		width: fit-content;
		justify-content: center;
		line-height: 1.5rem;
	}

	.week {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--packer-green);
	}

	.teams-scores {
		padding: 0.5rem 0.25rem;
		display: flex;
		gap: 1rem;
		width: clamp(100%, 20vw + 1rem, 100%);
		justify-content: center;
		align-items: center;
		border: 1px solid var(--packer-green);
	}

	.team-1-name-score,
	.team-2-name-score {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.team-name {
		font-size: 1.5rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.score {
		font-size: 2rem;
		font-weight: 700;
		color: var(--packer-green);
	}

	.team-logos {
		display: flex;
		justify-content: center;
		align-items: center;
		width: clamp(fit-content, 20vw + 1rem, 100%);
		filter: grayscale(100%);
	}

	.team-logos > .team-1 {
		width: clamp(6rem, 20vw + 1rem, 10rem);
		aspect-ratio: 1/1;
		transform: translateX(-80%);
	}
	.team-logos > .team-2 {
		width: clamp(6rem, 20vw + 1rem, 10rem);
		aspect-ratio: 1/1;
		transform: translateX(80%);
	}
</style>
