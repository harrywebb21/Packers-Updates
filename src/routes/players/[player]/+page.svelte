<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

	let playerStats: any;

	const getPlayerStats = async () => {
		try {
			const res = await fetch(
				`http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/types/2/athletes/${$page.params.player}/statistics/0?lang=en%C2%AEion=us`,
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
</script>

{#if playerStats}
	<p>{playerStats.$ref}</p>
{:else}
	<p>Loading player stats...</p>
{/if}

<div class="">
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
</div>
