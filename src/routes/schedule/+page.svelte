<script lang="ts">
	import GameCard from '$lib/components/games/GameCard.svelte';
	export let data;

	const packersGames = data.nflData.events.filter((event: any) => {
		return event.name.includes('Green Bay Packers');
	});

	console.log('PACKERS GAMES:', packersGames);
	// console.log('PACKERS DATA:', data.packerData);
	// console.log('NFL DATA:', data.nflData.events);
</script>

<div class="season-dates text-white flex flex-col gap-8 w-full">
	<div class="flex flex-col gap-4 w-full">
		{#each packersGames as game}
			<GameCard
				team1={game.competitions[0].competitors[0]}
				team2={game.competitions[0].competitors[1]}
				event={game}
			/>
		{/each}
	</div>
</div>

<!-- <WeeklyGame
				team1={packers.competitions[0].competitors[0].team.name}
				team2={packers.competitions[0].competitors[1].team.name}
				team1Logo={packers.competitions[0].competitors[0].team.logo}
				team2Logo={packers.competitions[0].competitors[1].team.logo}
				team1Score={packers.competitions[0].competitors[0].score}
				team2Score={packers.competitions[0].competitors[1].score}
				week={packers.week.number}
				date={date(packers.date)}
				complete={packers.status.type.completed}
			/> -->
