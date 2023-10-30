<script lang="ts">
	import { convertDate, convertTime } from '$lib';
	export let team1: any;
	export let team2: any;
	export let event: any;
</script>

<div class="game-box">
	<div class="team-bg-box">
		<p class="team-bg">{team1.team.shortDisplayName}</p>
		<p class="team-bg">{team2.team.shortDisplayName}</p>
	</div>
	<div class="stats-box">
		<div class="date-box">
			<p class="event-week">
				{#if event.competitions[0].status.type.name === 'STATUS_FINAL'}
					<span class=" line-through">
						WEEK {event.week.number}
					</span>
				{:else}
					WEEK {event.week.number}
				{/if}
			</p>
			<div class="game-date-box">
				<p class="event-date">
					{convertDate(event.date)}
				</p>
				<p class="event-time">
					{convertTime(event.date)}
					-
					{#if team1.team.displayName === 'Green Bay Packers'}
						HOME
					{:else}
						AWAY
					{/if}
				</p>
			</div>
		</div>
		<div class="game-stats-box">
			<p class="game-score">
				{#if !team1.score || !team2.score}
					0 - 0
				{:else}
					{#if !team1.score.displayValue || !team2.score.displayValue}
						{`${team1.score} - ${team2.score}`}
					{:else}
						{`${team1.score.displayValue} - ${team2.score.displayValue}`}
					{/if}
					{#if team1.team.nickname === 'Packers'}
						{#if team1.winner === true}
							<span class="game-winner">W</span>
						{:else if team2.winner === true}
							<span class="game-winner">L</span>
						{/if}
					{:else if team1.winner === true}
						<span class="game-winner">L</span>
					{:else if team2.winner === true}
						<span class="game-winner">W</span>
					{/if}
				{/if}
			</p>
			<p class="game-clock">
				{#if event.competitions[0].status.type.name === 'STATUS_FINAL'}
					<span class="final-status"> FINAL </span>
				{:else}
					{event.competitions[0].status.displayClock}
					<span>
						{'Q' + event.competitions[0].status.period}
					</span>
				{/if}
			</p>
		</div>
	</div>
	<div class="teams-container">
		<div class="team-box-1">
			{#if !team1.team.logos}
				<img class="team-logo" src={team1.team.logo} alt={team1.team.displayName + ' logo'} />
			{:else}
				<img
					class="team-logo"
					src={team1.team.logos[1].href}
					alt={team1.team.displayName + ' logo'}
				/>
			{/if}
			<div class="">
				<p class="team-name">{team1.team.displayName}</p>
				<p class="team-record">
					{#if !team1.records}
						{team1.record[0].displayValue}
					{:else}
						{team1.records[0].summary}
					{/if}
				</p>
			</div>
		</div>
		<div class="team-box-2">
			{#if !team2.team.logos}
				<img class="team-logo" src={team2.team.logo} alt={team2.team.displayName + ' logo'} />
			{:else}
				<img
					class="team-logo"
					src={team2.team.logos[1].href}
					alt={team2.team.displayName + ' logo'}
				/>
			{/if}
			<div class="team-info-2">
				<p class="team-name">{team2.team.displayName}</p>
				<p class="team-record">
					{#if !team2.records}
						{team2.record[0].displayValue}
					{:else}
						{team2.records[0].summary}
					{/if}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.game-box {
		width: 100%;
		background: var(--packer-yellow);
		padding: 10px;
		border: 1px solid white;
		position: relative;
		overflow: hidden;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	.team-bg-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}

	.team-bg {
		font-size: 8rem;
		font-weight: 700;
		text-transform: uppercase;
		line-height: normal;
		color: rgba(255, 255, 255, 0.3);
	}

	.team-logo {
		width: 100px;
		aspect-ratio: 1/1;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}

	.team-box-1,
	.team-box-2 {
		text-transform: uppercase;
		display: flex;
		gap: 10px;
		align-items: center;
		position: relative;
	}

	.team-name {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.date-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.event-week {
		font-size: 2rem;
		font-weight: 700;
		color: var(--packer-green);
	}
	.game-date-box {
		display: flex;
		flex-direction: column;
		align-items: end;
		color: var(--packer-green);
		font-size: 1.5rem;
		font-weight: 700;
	}
	.stats-box {
		display: flex;
		flex-direction: column;
		gap: 10px;
		position: relative;
	}

	.game-stats-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.game-clock,
	.game-score {
		font-size: 2.5rem;
		font-weight: 700;
	}
	.game-clock span {
		color: var(--packer-green);
	}
	.game-winner {
		color: var(--packer-green);
	}
	.team-record {
		font-size: 1rem;
		font-weight: 700;
		color: var(--packer-green);
	}
	@media (min-width: 768px) {
		.team-box-2 {
			flex-direction: row-reverse;
		}
		.teams-container {
			display: flex;
			justify-content: space-between;
		}
		.team-bg-box {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.game-date-box {
			flex-direction: row;
			gap: 10px;
		}
		.team-info-2 {
			display: flex;
			flex-direction: column;
			justify-content: end;
			align-items: end;
		}
	}
	@media (min-width: 973px) {
		.stats-box {
			flex-direction: row;
			justify-content: space-between;
		}
		.date-box {
			gap: 20px;
		}
		.team-logo {
			width: 150px;
		}
		.team-name {
			font-size: 2rem;
		}
		.game-stats-box {
			gap: 20px;
		}
		.team-bg {
			font-size: 9rem;
		}
		.team-record {
			font-size: 1.5rem;
		}
	}
	@media (min-width: 1480px) {
		.team-logo {
			width: 200px;
		}
		.team-name {
			font-size: 3.25rem;
		}
		.date-box {
			gap: 40px;
		}
		.event-week {
			font-size: 3rem;
		}
		.game-date-box {
			font-size: 3rem;
		}
		.game-stats-box p {
			font-size: 4rem;
		}
		.team-bg {
			font-size: 16rem;
		}
		.team-record {
			font-size: 2rem;
		}
	}
	@media (min-width: 1800px) {
		.team-logo {
			width: 250px;
		}
		.team-name {
			font-size: 4rem;
		}
		.team-record {
			font-size: 2.5rem;
		}
		.game-box {
			padding-inline: 20px;
		}
		.team-bg {
			font-size: 18.75rem;
		}
	}
</style>
