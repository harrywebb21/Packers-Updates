<script lang="ts">
	import WeeklyGame from '$lib/components/games/WeeklyGame.svelte';
	import NewsCard from '$lib/components/news/NewsCard.svelte';
	import PlayerCard from '$lib/components/players/PlayerCard.svelte';
	import SingleStanding from '$lib/components/standings/SingleStanding.svelte';
	import { onMount } from 'svelte';

	export let data;

	const packersGames = data.nflData.events.filter((event: any) => {
		return event.name.includes('Green Bay Packers');
	});

	let matchingGame: any;

	function currentWeekGame() {
		let upcomingGame = data.packerData.team.nextEvent[0]?.competitions[0]?.date;
		if (!upcomingGame) {
			console.log('no upcoming game');
			return null;
		}

		matchingGame = packersGames.filter((game: any) => {
			if (!game.date) {
				console.log('no date');
				return null;
			} else if (date(game.date) === date(upcomingGame)) {
				return { game };
			}
		});
	}

	function date(date: any) {
		const completeDate = new Date(date);
		return (
			(completeDate.toDateString() + ' ' + completeDate.toLocaleTimeString()).slice(0, 21) + ' PM'
		);
	}
	onMount(() => {
		currentWeekGame();
		// console.log('matching game', matchingGame[0]?.competitions[0].competitors[0].team.name);
	});
	// console.log('NEWS', data.newsData.articles);
	// console.log('player', data.playerData.athletes[0]);
	// console.log('PACKERS GAMES:', packersGames[0].competitions[0]);
	console.log('PACKERS DATA:', data.packerData);
	console.log('STANDINGS DATA:', data.standingsData);
	// console.log('NFL DATA:', data.nflData.events);
	// Function to navigate to a different route after a delay
</script>

<div class="w-full flex flex-col justify-center gap-4">
	<div class="flex flex-col gap-3 p-2 py-3 px-3 w-full">
		<div class="flex flex-col gap-4 w-full mt-5">
			{#if matchingGame}
				<WeeklyGame
					team1={matchingGame[0]?.competitions[0].competitors[0].team.name}
					team2={matchingGame[0]?.competitions[0].competitors[1].team.name}
					team1Logo={matchingGame[0]?.competitions[0].competitors[0].team.logo}
					team2Logo={matchingGame[0]?.competitions[0].competitors[1].team.logo}
					team1Score={matchingGame[0]?.competitions[0].competitors[0].score}
					team2Score={matchingGame[0]?.competitions[0].competitors[1].score}
					week={matchingGame[0]?.week.number}
					date={date(matchingGame[0]?.date)}
					gameTime={matchingGame[0]?.competitions[0].status.displayClock}
					quarter={`Q ${matchingGame[0]?.competitions[0].status.period}`}
				/>
			{:else}
				<p>loading...</p>
			{/if}
		</div>

		<SingleStanding>
			<div class="flex flex-col gap-2 w-full">
				<div class="flex flex-col gap-2 w-full px-3 py-2">
					{#each data.standingsData.content.standings.groups[1].groups[1].standings.entries as nfcNorth}
						{#if nfcNorth.team.displayName === 'Green Bay Packers'}
							<table class="w-full">
								<tr class="title-row">
									<th class="main-stat-title">{nfcNorth.stats[0].shortDisplayName}</th>
									<th class="main-stat-title">{nfcNorth.stats[1].shortDisplayName}</th>
									<th class="main-stat-title">{nfcNorth.stats[2].shortDisplayName}</th>
									<th class="main-stat-title">{nfcNorth.stats[3].shortDisplayName}</th>
									<th class="optional-stat-title">{nfcNorth.stats[4].shortDisplayName}</th>
									<th class="optional-stat-title">{nfcNorth.stats[5].shortDisplayName}</th>
									<th class="optional-stat-title">{nfcNorth.stats[6].shortDisplayName}</th>
									<th class="optional-stat-title">{nfcNorth.stats[7].shortDisplayName}</th>
									<th class="optional-stat-title">{nfcNorth.stats[8].shortDisplayName}</th>
									<th class="optional-stat-title">{nfcNorth.stats[9].shortDisplayName}</th>
									<th class="optional-stat-title">{nfcNorth.stats[10].shortDisplayName}</th>
									<th class="main-stat-title">{nfcNorth.stats[11].shortDisplayName}</th>
								</tr>
								<tr class="score-row">
									<td class="main-stat">{nfcNorth.stats[0].displayValue}</td>
									<td class="main-stat">{nfcNorth.stats[1].displayValue}</td>
									<td class="main-stat">{nfcNorth.stats[2].displayValue}</td>
									<td class="main-stat">{nfcNorth.stats[3].displayValue}</td>
									<td class="optional-stat">{nfcNorth.stats[4].displayValue}</td>
									<td class="optional-stat">{nfcNorth.stats[5].displayValue}</td>
									<td class="optional-stat">{nfcNorth.stats[6].displayValue}</td>
									<td class="optional-stat">{nfcNorth.stats[7].displayValue}</td>
									<td class="optional-stat">{nfcNorth.stats[8].displayValue}</td>
									<td class="optional-stat">{nfcNorth.stats[9].displayValue}</td>
									<td class="optional-stat">{nfcNorth.stats[10].displayValue}</td>
									<td class="main-stat">{nfcNorth.stats[11].displayValue}</td>
								</tr>
							</table>
						{/if}
					{/each}
				</div>
			</div>
		</SingleStanding>

		<div class="news-player">
			<NewsCard
				headline={data.newsData.articles[0].headline}
				description={data.newsData.articles[0].description}
				byline={data.newsData.articles[0].byline}
				published={data.newsData.articles[0].published}
				image={data.newsData.articles[0].images[0].url}
			/>
			<PlayerCard
				playerHeadshot={data.playerData.athletes[0].items[13].headshot.href}
				playerName={data.playerData.athletes[0].items[13].displayName}
				kitNumber={data.playerData.athletes[0].items[13].jersey}
				position={data.playerData.athletes[0].items[13].position.abbreviation}
				age={data.playerData.athletes[0].items[13].age}
				height={data.playerData.athletes[0].items[13].displayHeight}
				weight={data.playerData.athletes[0].items[13].displayWeight}
				packersLogo={data.packerData.team.logos[0].href}
				redirect={`/players/${data.playerData.athletes[0].items[13].id}`}
			/>
		</div>
	</div>
</div>

<style>
	.news-player {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	table {
		border-collapse: collapse;
	}

	.title-row {
		color: #fff;
		text-align: center;
		border-bottom: 1px solid #fff;
	}

	.score-row {
		color: #fff;
		text-align: center;
		background-color: var(--packer-yellow);
	}

	.main-stat-title {
		padding: 0.25rem;
	}

	.main-stat {
		padding: 0.25rem;
	}

	.optional-stat-title {
		padding: 0.5rem;
		display: none;
	}

	.optional-stat {
		padding: 0.5rem;
		display: none;
	}
	@media (min-width: 768px) {
		.news-player {
			flex-direction: column;
			align-items: start;
			justify-content: start;
		}

		.optional-stat-title {
			display: table-cell;
		}

		.optional-stat {
			display: table-cell;
		}
	}
</style>
