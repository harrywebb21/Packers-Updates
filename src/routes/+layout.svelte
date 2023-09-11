<script lang="ts">
	import Navbar from '$lib/components/nav/Navbar.svelte';
	import Nfl from '$lib/components/logos/NFL.svelte';
	import '../app.postcss';
	import GlassCard from '$lib/components/cards/GlassCard.svelte';

	export let data;

	function date(date: any) {
		const completeDate = new Date(date);
		return (
			(completeDate.toDateString() + ' ' + completeDate.toLocaleTimeString()).slice(0, 21) + ' PM'
		);
	}
	const packersGames = data.nflData.events.filter((event: any) => {
		return event.name.includes('Green Bay Packers');
	});

	const packersLastGame = packersGames.length - 1;
</script>

<Navbar teamLogo={data.packerData.team.logos[0].href} teamName="Frozen Tundra News" />

<div class=" w-full px-5 pt-2 text-white flex flex-col gap-6 justify-center items-center">
	<div class="banners flex justify-between items-center">
		<!-- <div class="nfl-banner">
			{#each data.nflData.leagues as nfl}
				<Nfl title={nfl.name} src={nfl.logos[0].href} />
			{/each}
		</div> -->
		<!-- <GlassCard width="fit">
			<div class="p-2 px-3 w-full flex items-center justify-center">
				{#each data.standingsData.content.standings.groups[1].groups[1].standings.entries as nfcNorthTeams}
					{#if nfcNorthTeams.team.displayName === 'Green Bay Packers'}
						<div class="record uppercase flex gap-6">
							<div class=" flex gap-3 items-center">
								<p>{nfcNorthTeams.stats[0].displayName}</p>
								<p class="record-score">{nfcNorthTeams.stats[0].displayValue}</p>
							</div>
							<div class="flex gap-3 items-center">
								<p>{nfcNorthTeams.stats[1].displayName}</p>
								<p class="record-score">{nfcNorthTeams.stats[1].displayValue}</p>
							</div>
							<div class="flex gap-3 items-center">
								<p>{nfcNorthTeams.stats[2].displayName}</p>
								<p class="record-score">{nfcNorthTeams.stats[2].displayValue}</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</GlassCard> -->
	</div>
	<slot />
</div>

<style>
	.record {
		padding: 0.5rem 1rem;
		font-size: 1.5vw;
		font-weight: 700;
		background: #ffb612;
		border-radius: 0.5rem;
		color: #203731;

		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}
	.record-score {
		font-size: 2.25vw;
		color: white;
	}
	.nfl-banner {
		display: none;
	}

	@media (min-width: 975px) {
		.nfl-banner {
			display: flex;
		}
	}
</style>
