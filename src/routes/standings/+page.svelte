<script lang="ts">
	export let data;
</script>

<div class="page flex flex-col gap-5 w-full">
	{#each data.standingsData.content.standings.groups as regions}
		<p class="region text-4xl font-black">{regions.abbreviation}</p>
		{#each regions.groups as divisions}
			<div class="table-wrapper">
				<table>
					<tr class="header-row">
						<th>{divisions.abbreviation}</th>
						<th class="main-stat-title"
							>{divisions.standings.entries[0].stats[0].shortDisplayName}</th
						>
						<th class="main-stat-title"
							>{divisions.standings.entries[0].stats[1].shortDisplayName}</th
						>
						<th class="main-stat-title"
							>{divisions.standings.entries[0].stats[2].shortDisplayName}</th
						>
						<th class="optional-stat-title"
							>{divisions.standings.entries[0].stats[3].shortDisplayName}</th
						>
						<th class="optional-stat-title"
							>{divisions.standings.entries[0].stats[4].shortDisplayName}</th
						>
						<th class="optional-stat-title"
							>{divisions.standings.entries[0].stats[5].shortDisplayName}</th
						>
						<th class="optional-stat-title"
							>{divisions.standings.entries[0].stats[6].shortDisplayName}</th
						>
						<th class="optional-stat-title"
							>{divisions.standings.entries[0].stats[7].shortDisplayName}</th
						>
						<th class="optional-stat-title"
							>{divisions.standings.entries[0].stats[8].shortDisplayName}</th
						>
						<th class="optional-stat-title"
							>{divisions.standings.entries[0].stats[9].shortDisplayName}</th
						>
						<th class="optional-stat-title"
							>{divisions.standings.entries[0].stats[10].shortDisplayName}</th
						>
						<th class="main-stat-title"
							>{divisions.standings.entries[0].stats[11].shortDisplayName}</th
						>
					</tr>

					{#each divisions.standings.entries as teams}
						<tr class="team-row">
							<th class="team-header items-center">
								<img class="team-logo" src={teams.team.logos[0].href} alt="" />

								<p class="desktop-teams">
									{teams.team.displayName}
								</p>
								<p class="mobile-teams">
									{teams.team.name}
								</p>
							</th>
							<td class="main-stat">{teams.stats[0].displayValue}</td>
							<td class="main-stat">{teams.stats[1].displayValue}</td>
							<td class="main-stat">{teams.stats[2].displayValue}</td>
							<td class="optional-stat">{teams.stats[3].displayValue}</td>
							<td class="optional-stat">{teams.stats[4].displayValue}</td>
							<td class="optional-stat">{teams.stats[5].displayValue}</td>
							<td class="optional-stat">{teams.stats[6].displayValue}</td>
							<td class="optional-stat">{teams.stats[7].displayValue}</td>
							<td class="optional-stat">{teams.stats[8].displayValue}</td>
							<td class="optional-stat">{teams.stats[9].displayValue}</td>
							<td class="optional-stat">{teams.stats[10].displayValue}</td>
							<td class="main-stat">{teams.stats[11].displayValue}</td>
						</tr>
					{/each}
				</table>
			</div>
		{/each}
	{/each}
</div>

<style>
	.region {
		background: var(--packer-yellow);
		padding: 0.5rem 1rem;
		border-radius: 20px 20px 0 0;
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	.team-row {
		border: 1px solid rgba(255, 255, 255, 0.3);
		background: rgba(255, 255, 255, 0.1);
	}
	.team-row > td {
		padding: 0.5rem 1rem;
		text-align: center;
	}
	.table-wrapper {
		width: 100%;
		border-collapse: collapse;
		background: var(--packer-green);
		border: 1px solid rgba(255, 255, 255, 0.3);
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	th {
		padding: 0.5rem 1rem;
		text-align: center;
	}

	.optional-stat-title {
		display: none;
	}

	.optional-stat {
		display: none;
	}

	.team-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: clamp(0.75rem, 1vw, 1rem);
	}

	.desktop-teams {
		display: none;
	}

	.team-logo {
		width: 30px;
		height: 30px;
	}

	@media (min-width: 768px) {
		.team-header {
			flex-direction: row;
			justify-content: start;
			gap: 1rem;
			font-size: clamp(0.75rem, 1vw + 1rem, 1.5rem);
		}
		.desktop-teams {
			display: block;
		}
		.mobile-teams {
			display: none;
		}
	}

	@media (min-width: 1024px) {
		.optional-stat-title {
			display: table-cell;
		}

		.optional-stat {
			display: table-cell;
		}
		.team-header {
			flex-direction: row;
			justify-content: start;
			gap: 1rem;
			font-size: clamp(0.75rem, 1vw + 1rem, 1.5rem);
		}
		.desktop-teams {
			display: block;
		}
		.mobile-teams {
			display: none;
		}
	}
</style>
