<script>
	import GlassCard from '$lib/components/cards/GlassCard.svelte';
	import PlayerCard from '$lib/components/players/PlayerCard.svelte';

	export let data;

	console.log('Players: ', data.playerData);
</script>

<GlassCard width="fit">
	<div class="cards-container flex flex-col items-center justify-center gap-10 px-5">
		<h1 class="cards-container-title text-5xl font-black uppercase">Offense</h1>

		<div class="layout grid grid-cols gap-5">
			{#each data.playerData.athletes[0].items as offensePlayers}
				<div class=" flex flex-col items-center justify-center">
					{#if !offensePlayers.injuries}
						<PlayerCard
							playerHeadshot={offensePlayers.headshot.href}
							playerName={offensePlayers.displayName}
							kitNumber={offensePlayers.jersey}
							position={offensePlayers.position.abbreviation}
							age={offensePlayers.age}
							height={offensePlayers.displayHeight}
							weight={offensePlayers.displayWeight}
							packersLogo={data.packerData.team.logos[0].href}
							redirect={`/players/${offensePlayers.id}`}
						/>
					{:else}
						<PlayerCard
							playerHeadshot={offensePlayers.headshot.href}
							playerName={offensePlayers.displayName}
							kitNumber={offensePlayers.jersey}
							position={offensePlayers.position.abbreviation}
							age={offensePlayers.age}
							height={offensePlayers.displayHeight}
							weight={offensePlayers.displayWeight}
							packersLogo={data.packerData.team.logos[0].href}
							redirect={`/players/${offensePlayers.id}`}
							injury={offensePlayers.injuries[0]}
						/>
					{/if}
				</div>
			{/each}
		</div>

		<h1 class="cards-container-title text-5xl font-black uppercase">Defense</h1>
		<div class="layout grid grid-cols gap-5">
			{#each data.playerData.athletes[1].items as defensePlayers}
				{#if !defensePlayers.injuries}
					<PlayerCard
						playerName={defensePlayers.displayName}
						kitNumber={defensePlayers.jersey}
						position={defensePlayers.position.abbreviation}
						age={defensePlayers.age}
						height={defensePlayers.displayHeight}
						weight={defensePlayers.displayWeight}
						packersLogo={data.packerData.team.logos[0].href}
						redirect={`/players/${defensePlayers.id}`}
					/>
				{:else}
					<PlayerCard
						playerHeadshot={defensePlayers.headshot.href}
						playerName={defensePlayers.displayName}
						kitNumber={defensePlayers.jersey}
						position={defensePlayers.position.abbreviation}
						age={defensePlayers.age}
						height={defensePlayers.displayHeight}
						weight={defensePlayers.displayWeight}
						packersLogo={data.packerData.team.logos[0].href}
						redirect={`/players/${defensePlayers.id}`}
						injury={defensePlayers.injuries[0]}
					/>
				{/if}
			{/each}
		</div>
		<h1 class="cards-container-title text-5xl font-black uppercase">Special Team</h1>
		<div class="layout grid grid-cols gap-5">
			{#each data.playerData.athletes[2].items as specialPlayers}
				<div class=" flex flex-col items-center justify-center">
					{#if !specialPlayers.injuries}
						<PlayerCard
							playerHeadshot={specialPlayers.headshot.href}
							playerName={specialPlayers.displayName}
							kitNumber={specialPlayers.jersey}
							position={specialPlayers.position.abbreviation}
							age={specialPlayers.age}
							height={specialPlayers.displayHeight}
							weight={specialPlayers.displayWeight}
							packersLogo={data.packerData.team.logos[0].href}
							redirect={`/players/${specialPlayers.id}`}
						/>
					{:else}
						<PlayerCard
							playerHeadshot={specialPlayers.headshot.href}
							playerName={specialPlayers.displayName}
							kitNumber={specialPlayers.jersey}
							position={specialPlayers.position.abbreviation}
							age={specialPlayers.age}
							height={specialPlayers.displayHeight}
							weight={specialPlayers.displayWeight}
							packersLogo={data.packerData.team.logos[0].href}
							redirect={`/players/${specialPlayers.id}`}
							injury={specialPlayers.injuries[0]}
						/>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</GlassCard>

<style>
	.cards-container {
		border-radius: 20px;
		padding-block: 50px;
	}
	.cards-container-title {
		text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
	}
	@media (min-width: 650px) {
		.layout {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1024px) {
		.layout {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 1280px) {
		.layout {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
