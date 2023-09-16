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

<!-- <div class="">
	{#each data.playerData.athletes[0].items as players}
		{#if players.id === $page.params.player}
			<img src={players.headshot.href} alt="" />
			{#if players.displayName === 'Jordan Love'}
				<p>{players.displayName}<span class="text-6xl">🐐</span></p>
			{:else}
				<p>{players.displayName}</p>
			{/if}
			<p>{players.jersey}</p>
			<p>{players.position.abbreviation}</p>
			<p>{players.age}</p>
			<p>{players.displayHeight}</p>
			<p>{players.displayWeight}</p>
		{/if}
	{/each}
	{#each data.playerData.athletes[1].items as players}
		{#if players.id === $page.params.player}
			<img src={players.headshot.href} alt="" />
			{#if players.displayName === 'Jordan Love'}
				<p>{players.displayName}<span class="text-6xl">🐐</span></p>
			{:else}
				<p>{players.displayName}</p>
			{/if}
			<p>{players.jersey}</p>
			<p>{players.position.abbreviation}</p>
			<p>{players.age}</p>
			<p>{players.displayHeight}</p>
			<p>{players.displayWeight}</p>
		{/if}
	{/each}
	{#each data.playerData.athletes[2].items as players}
		{#if players.id === $page.params.player}
			<img src={players.headshot.href} alt="" />
			{#if players.displayName === 'Jordan Love'}
				<p>{players.displayName}<span class="text-6xl">🐐</span></p>
			{:else}
				<p>{players.displayName}</p>
			{/if}
			<p>{players.jersey}</p>
			<p>{players.position.abbreviation}</p>
			<p>{players.age}</p>
			<p>{players.displayHeight}</p>
			<p>{players.displayWeight}</p>
		{/if}
	{/each}
</div> -->

<style>
	.banner-green {
		background-color: #203731;
		height: 500px;
		width: 100%;
		position: absolute;
		z-index: 3;
		top: -35%;
		left: 0%;
		transform: skewY(10deg);
	}

	.banner-white {
		background-color: #fff;
		height: 500px;
		width: 100%;
		position: absolute;
		z-index: 2;
		top: -30%;
		left: 0%;
		transform: skewY(10deg);
		border-bottom: 2px solid white;
	}

	.banner-yellow {
		background-color: #ffb612;
		height: 500px;
		width: 100%;
		position: absolute;
		top: 10%;
		border-bottom: 2px solid white;
	}

	.logo {
		position: absolute;
		top: 55%;
		right: 20%;
		transform: translateX(50%);
		z-index: 1;
		height: 100px;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		height: 600px;
	}

	.headshot-container {
		position: relative;
		width: 100%;
		height: 150px;
	}

	.jersey-stat-mobile {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 11rem;
		font-weight: 800;
		color: rgba(255, 255, 255, 0.3);
		z-index: 3;
	}

	.position-stat-mobile {
		position: absolute;
		top: 45.5%;
		right: 20%;
		transform: translate(50%, -50%);
		font-size: 2rem;
		font-weight: 800;
		background: var(--packer-yellow);
		border-radius: 100vh;
		padding: 0.25rem 1.5rem;
		z-index: 3;
	}

	.player-info-container {
		position: absolute;
		bottom: 10%;
		left: 5%;

		z-index: 3;
		display: flex;
		font-size: 1.5rem;
		font-weight: 800;
		flex-direction: column;
		justify-content: start;
		align-items: start;
	}
	.player-container {
		position: absolute;
		top: 3%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 4;
		border: 1px solid rgba(255, 255, 255, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 85%;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(10px);
		padding: 0.25rem;
	}

	.headshot {
		width: 200px;
		height: 150px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
	.player-name {
		font-size: 2.5rem;
		font-weight: 800;
		width: 100%;
	}
	.age-stat,
	.height-stat,
	.weight-stat {
		font-size: 1.5rem;
		font-weight: 700;
		display: none;
	}

	.jersey-stat,
	.position-stat {
		font-size: 5rem;
		font-weight: 700;
		margin: 0;
		display: none;
	}
</style>
