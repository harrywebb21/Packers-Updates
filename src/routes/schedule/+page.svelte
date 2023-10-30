<script lang="ts">
	import GameCard from '$lib/components/games/GameCard.svelte';

	export let data;

	console.log(
		data.nflData.events.map((event: any) => {
			if (event.name.indexOf('Green Bay Packers') > -1 === true) {
				return event;
			}
		})
	);
	// const packersGames = data.nflData.events.filter((event: any) => {
	// 	return event.name.includes('Green Bay Packers');
	// });

	// let team1 = packersGames.competitions[0].competitors[0];
	// let team2 = packersGames.competitions[0].competitors[1];
	// let event = packersGames;

	// console.log('PACKERS DATA:', data.packerData);
	// console.log('NFL DATA:', data.nflData.events);
</script>

<div class="season-dates text-white flex flex-col gap-8 w-full">
	<div class="flex flex-col gap-4 w-full">
		<!-- <GameCard {team1} {team2} {event} /> -->
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
