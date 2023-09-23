<script lang="ts">
	import WeeklyGame from '$lib/components/games/WeeklyGame.svelte';

	export let data;

	const packersGames = data.nflData.events.filter((event: any) => {
		return event.name.includes('Green Bay Packers');
	});

	function date(date: any) {
		const completeDate = new Date(date);
		return (
			(completeDate.toDateString() + ' ' + completeDate.toLocaleTimeString()).slice(0, 21) + ' PM'
		);
	}

	console.log('PACKERS GAMES:', packersGames);
	// console.log('PACKERS DATA:', data.packerData);
	// console.log('NFL DATA:', data.nflData.events);
</script>

<div class="season-dates text-white flex flex-col gap-8 w-full">
	<div class="flex flex-col gap-4 w-full">
		{#each packersGames as packers}
			<WeeklyGame
				team1={packers.competitions[0].competitors[0].team.name}
				team2={packers.competitions[0].competitors[1].team.name}
				team1Logo={packers.competitions[0].competitors[0].team.logo}
				team2Logo={packers.competitions[0].competitors[1].team.logo}
				team1Score={packers.competitions[0].competitors[0].score}
				team2Score={packers.competitions[0].competitors[1].score}
				week={packers.week.number}
				date={date(packers.date)}
				complete={packers.status.type.completed}
			/>
		{/each}
	</div>
</div>
