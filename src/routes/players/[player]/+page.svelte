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
	console.log('player Data', data.playerData);
</script>

<div class="wrapper w-screen relative overflow-hidden -mt-8">
	{#each data.playerData.athletes[0].items as players}
		{#if players.id === $page.params.player}
			<div class="banner-green">
				<img class="logo" src={data.packerData.team.logos[0].href} alt="" />
				<div class="headshot-container">
					<p class="jersey-stat">{players.jersey}</p>
					<img class="headshot" src={players.headshot.href} alt="" />
				</div>
				<div class="position-status-container">
					<p class="position-stat">{players.position.abbreviation}</p>

					{#if !players.injuries[0]}
						<p class="status-stat-active">ACTIVE</p>
					{:else}
						<p class="status-stat-inactive">INACTIVE</p>
					{/if}
				</div>
			</div>

			<div class="banner-white">
				<p class="player-name">{players.displayName}</p>
			</div>

			<div class="banner-yellow">
				<div class="flex w-full justify-center items-center gap-8 text-center border-b p-2 pb-3">
					<p class="player-info">
						<span class="player-info-title">AGE</span><br />{players.age}
					</p>
					<p class="player-info">
						<span class="player-info-title">HEIGHT</span><br />{players.displayHeight}
					</p>
					<p class="player-info">
						<span class="player-info-title">WEIGHT</span><br />{players.displayWeight}
					</p>
					<p class="player-info">
						<span class="player-info-title">EXPERIENCE</span><br />{players.experience.years} Years
					</p>
				</div>
				<div class="flex w-full justify-center items-center gap-10 text-center p-2 pb-3">
					<p class="player-info">
						<span class="player-info-title">COLLEGE</span><br />{players.college.shortName}
					</p>
					<p class="player-info">
						<span class="player-info-title"> HOMETOWN</span><br />{players.birthPlace.city}, {players
							.birthPlace.state}
					</p>
				</div>
			</div>
		{/if}
	{/each}
	{#each data.playerData.athletes[1].items as players}
		{#if players.id === $page.params.player}
			<div class="banner-green">
				<img class="logo" src={data.packerData.team.logos[0].href} alt="" />
				<div class="headshot-container">
					<p class="jersey-stat">{players.jersey}</p>
					<img class="headshot" src={players.headshot.href} alt="" />
				</div>
				<div class="position-status-container">
					<p class="position-stat">{players.position.abbreviation}</p>

					{#if !players.injuries[0]}
						<p class="status-stat-active">ACTIVE</p>
					{:else}
						<p class="status-stat-inactive">INACTIVE</p>
					{/if}
				</div>
			</div>

			<div class="banner-white">
				<p class="player-name">{players.displayName}</p>
			</div>

			<div class="banner-yellow">
				<div class="flex w-full justify-center items-center gap-8 text-center border-b p-2 pb-3">
					<p class="player-info">
						<span class="player-info-title">AGE</span><br />{players.age}
					</p>
					<p class="player-info">
						<span class="player-info-title">HEIGHT</span><br />{players.displayHeight}
					</p>
					<p class="player-info">
						<span class="player-info-title">WEIGHT</span><br />{players.displayWeight}
					</p>
					<p class="player-info">
						<span class="player-info-title">EXPERIENCE</span><br />{players.experience.years} Years
					</p>
				</div>

				<div class="flex w-full justify-center items-center gap-10 text-center p-2 pb-3">
					{#if !players.college}{:else}
						<p class="player-info">
							<span class="player-info-title">COLLEGE</span><br />
							{players.college.shortName}
						</p>
					{/if}
					<p class="player-info">
						<span class="player-info-title"> HOMETOWN</span><br />{players.birthPlace
							.city}{#if !players.birthPlace.state}{:else}, {players.birthPlace.state}{/if}
					</p>
				</div>
			</div>
		{/if}
	{/each}
	{#each data.playerData.athletes[2].items as players}
		{#if players.id === $page.params.player}
			<div class="banner-green">
				<img class="logo" src={data.packerData.team.logos[0].href} alt="" />
				<div class="headshot-container">
					<p class="jersey-stat">{players.jersey}</p>
					<img class="headshot" src={players.headshot.href} alt="" />
				</div>
				<div class="position-status-container">
					<p class="position-stat">{players.position.abbreviation}</p>

					{#if !players.injuries[0]}
						<p class="status-stat-active">ACTIVE</p>
					{:else}
						<p class="status-stat-inactive">INACTIVE</p>
					{/if}
				</div>
			</div>

			<div class="banner-white">
				<p class="player-name">{players.displayName}</p>
			</div>

			<div class="banner-yellow">
				<div class="flex w-full justify-center items-center gap-8 text-center border-b p-2 pb-3">
					<p class="player-info">
						<span class="player-info-title">AGE</span><br />{players.age}
					</p>
					<p class="player-info">
						<span class="player-info-title">HEIGHT</span><br />{players.displayHeight}
					</p>
					<p class="player-info">
						<span class="player-info-title">WEIGHT</span><br />{players.displayWeight}
					</p>
					<p class="player-info">
						<span class="player-info-title">EXPERIENCE</span><br />{players.experience.years} Years
					</p>
				</div>
				<div class="flex w-full justify-center items-center gap-10 text-center p-2 pb-3">
					<p class="player-info">
						<span class="player-info-title">COLLEGE</span><br />{players.college.shortName}
					</p>
					<p class="player-info">
						<span class="player-info-title"> HOMETOWN</span><br />{players.birthPlace.city}, {players
							.birthPlace.state}
					</p>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.banner-green {
		background-color: #203731;
		height: 255px;
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 3;
		overflow: hidden;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}

	.banner-white {
		background-color: #fff;
		height: 62px;
		width: 100%;
		position: absolute;
		top: 255px;
		z-index: 2;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}

	.banner-yellow {
		background-color: #ffb612;
		height: fit-content;
		width: 100%;
		position: absolute;
		top: 317px;
		border-bottom: 2px solid #fff;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}

	.logo {
		position: absolute;
		top: 25%;
		left: 15%;
		transform: translate(-35%, -45%);
		z-index: 10;
		height: 130px;
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
		height: 100%;
	}

	.jersey-stat {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 400px;
		font-weight: 800;
		color: rgba(255, 255, 255, 0.3);
		z-index: 3;
	}

	.player-info {
		font-size: 1.5rem;
		font-weight: 900;
		line-height: 100%;
	}

	.player-info-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--packer-green);
	}

	.position-stat {
		position: absolute;
		top: 25%;
		right: 15%;
		height: 48px;
		width: 93px;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translate(50%, -50%);
		font-size: 2rem;
		font-weight: 800;
		background: var(--packer-yellow);
		border-radius: 50px;
		padding-inline: 1.25rem;
		z-index: 3;
		border: 1px solid white;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}

	.status-stat-active {
		position: absolute;
		top: 45%;
		right: 15%;
		transform: translate(50%, -50%);
		font-size: 1rem;
		font-weight: 600;
		background: #25b456;
		border-radius: 100vh;
		padding: 0.25rem 1rem;
		z-index: 3;
		border: 1px solid #43c870;
		box-shadow: 0px 0px 4px 0px #43c870;
	}
	.status-stat-inactive {
		position: absolute;
		top: 43%;
		right: 15%;
		transform: translate(50%, -50%);
		font-size: 0.8rem;
		font-weight: 600;
		background: rgb(240, 61, 48);
		border-radius: 100vh;
		padding: 0.25rem 0.75rem;
		z-index: 3;
		border: 1px solid rgb(245, 110, 110);
		box-shadow: 0px 0px 4px 0px rgba(231, 58, 58, 1);
	}

	.headshot {
		height: 213px;
		width: 308px;
		position: absolute;
		bottom: 0%;
		left: 50%;
		z-index: 10;
		transform: translate(-50%, 0%);
	}
	.player-name {
		color: var(--packer-green);
		font-size: 2.5rem;
		font-weight: 800;
		width: 100%;
		text-align: center;
	}
</style>
