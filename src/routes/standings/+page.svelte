<script lang="ts">
	import GlassCard from '$lib/components/cards/GlassCard.svelte';

	export let data;

	console.log('standings:', data.standingsData);
</script>

<GlassCard>
	<div class="flex flex-col gap-5">
		{#each data.standingsData.content.standings.groups as regions}
			<p class=" text-4xl">{regions.abbreviation}</p>

			{#each regions.groups as locations}
				<table>
					<tr>
						<td colspan="2">
							<p>{locations.name}</p>
						</td>
						{#each locations.standings.entries[0].stats as stats}
							<td>
								<p>{stats.shortDisplayName}</p>
							</td>
						{/each}
					</tr>
					{#each locations.standings.entries as teams}
						<tr>
							<td colspan="2">
								<div class="flex items-center gap-3">
									<img class=" w-10" src={teams.team.logos[0].href} alt="" />
									<p>{teams.team.displayName}</p>
								</div>
							</td>
							{#each teams.stats as stats}
								<td>
									<p>{stats.displayValue}</p>
								</td>
							{/each}
						</tr>
					{/each}
				</table>
			{/each}
		{/each}
	</div>
</GlassCard>

<style>
	table {
		border-collapse: collapse;
	}
	td {
		padding: 5px;
		text-align: center;
	}
</style>
