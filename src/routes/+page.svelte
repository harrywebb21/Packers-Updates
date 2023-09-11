<script lang="ts">
	import GlassCard from '$lib/components/cards/GlassCard.svelte';
	import WeeklyGame from '$lib/components/games/WeeklyGame.svelte';
	import NewsCard from '$lib/components/news/NewsCard.svelte';
	import PlayerCard from '$lib/components/players/PlayerCard.svelte';

	export let data;

	const packersGames = data.nflData.events.filter((event: any) => {
		return event.name.includes('Green Bay Packers');
	});

	function currentWeekGame() {
		const upcomingGame = data.packerData.team.nextEvent[0]?.competitions[0]?.date;
		if (!upcomingGame) {
			return null;
		}

		const matchingGame = packersGames.find((game: any) => {
			return game;
		});

		if (matchingGame.date === upcomingGame) {
			return matchingGame;
		} else {
			return null;
		}
	}

	function date(date: any) {
		const completeDate = new Date(date);
		return (
			(completeDate.toDateString() + ' ' + completeDate.toLocaleTimeString()).slice(0, 21) + ' PM'
		);
	}

	// console.log('NEWS', data.newsData.articles);
	// console.log('player', data.playerData.athletes[0]);
	// console.log('PACKERS GAMES:', packersGames[0].competitions[0]);
	// console.log('PACKERS DATA:', data.packerData.team.nextEvent[0].competitions[0]);
	// console.log('NFL DATA:', data.nflData.events);
	// Function to navigate to a different route after a delay
</script>

<div class="w-full flex flex-col justify-center gap-4">
	<GlassCard width="full">
		<div class="flex flex-col gap-3 p-2 py-3 px-3 w-full">
			<div class="flex flex-col gap-4 w-full mt-5">
				<WeeklyGame
					team1={currentWeekGame()?.competitions[0].competitors[0].team.name}
					team2={currentWeekGame()?.competitions[0].competitors[1].team.name}
					team1Logo={currentWeekGame()?.competitions[0].competitors[0].team.logo}
					team2Logo={currentWeekGame()?.competitions[0].competitors[1].team.logo}
					team1Score={currentWeekGame()?.competitions[0].competitors[0].score}
					team2Score={currentWeekGame()?.competitions[0].competitors[1].score}
					week={currentWeekGame()?.week.number}
					date={date(currentWeekGame()?.date)}
					gameTime={currentWeekGame()?.competitions[0].status.displayClock}
					quarter={`Q ${currentWeekGame()?.competitions[0].status.period}`}
				/>
			</div>
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
	</GlassCard>
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

	@media (max-width: 768px) {
		.news-player {
			flex-direction: column;
			align-items: start;
			justify-content: start;
		}
	}
</style>
