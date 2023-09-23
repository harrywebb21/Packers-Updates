<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

	let playerStats: any;

	const getPlayerStats = async () => {
		try {
			const res = await fetch(
				`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/types/2/athletes/${$page.params.player}/statistics/0?lang=en%C2%AEion=us`,
				{
					method: 'GET'
				}
			);

			playerStats = await res.json();
		} catch (err) {
			console.log(err);
		}
		console.log('playerStats:', playerStats);
	};

	onMount(async () => {
		try {
			await getPlayerStats();
			console.log('playerStats:', playerStats);
		} catch (error) {
			console.error('Error:', error);
		}
	});
	console.log('playerStats:', data.playerData.athletes[1].items);
	console.log('packer data:', data.packerData);
</script>

<div class="wrapper w-screen relative overflow-hidden -mt-8">
	<div class="banner-yellow" />
	<div class="banner-green" />
	<div class="banner-white" />
	<img class="logo" src={data.packerData.team.logos[0].href} alt="" />
	{#each data.playerData.athletes[0].items as players}
		{#if players.id === $page.params.player}
			<div class="player-container">
				<div class="headshot-container">
					<p class="jersey-stat-mobile">{players.jersey}</p>
					<img class="headshot" src={players.headshot.href} alt="" />
				</div>
				<div class="">
					<p class="player-name">{players.displayName}</p>
					<div class="">
						<p class="age-stat">AGE: {players.age}</p>
						<p class="height-stat">HEIGHT: {players.displayHeight}</p>
						<p class="weight-stat">WEIGHT: {players.displayWeight}</p>
					</div>
				</div>
				<p class="jersey-stat">#{players.jersey}</p>
				<p class="position-stat">{players.position.abbreviation}</p>
			</div>
			<p class="position-stat-mobile">{players.position.abbreviation}</p>

			<div class="player-info-container">
				<p class="age-stat-mobile">AGE: {players.age}</p>
				<p class="height-stat-mobile">HEIGHT: {players.displayHeight}</p>
				<p class="weight-stat-mobile">WEIGHT: {players.displayWeight}</p>
				<p class="experience-stat-mobile">EXPERIENCE: {players.experience.years} Years</p>
				<p class="college-stat-mobile">COLLEGE: {players.college.shortName}</p>
				<p class="hometown-stat-mobile">
					HOMETOWN: {players.birthPlace.city}, {players.birthPlace.state}
				</p>
			</div>
		{/if}
	{/each}
</div>
