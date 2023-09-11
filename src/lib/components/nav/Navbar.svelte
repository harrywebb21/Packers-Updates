<script lang="ts">
	import { fade } from 'svelte/transition';
	export let teamLogo = '';
	export let teamName = '';
	export let width = 50;
	export let open = false;

	const navTitles = {
		home: 'Home',
		schedule: 'Schedule',
		standings: 'Standings',
		Players: 'Players',
		news: 'News'
	};
</script>

<div class="nav-container" data-sveltekit-reload>
	<div class="nav-box flex items-center justify-between w-full text-white">
		<div class=" flex items-center w-full gap-3">
			<a class="" href="/">
				<img class="packersLogo" src={teamLogo} alt="" />
			</a>
			<h1 class="site-name">
				<a href="/">
					{teamName}
				</a>
			</h1>
		</div>
		<nav class="">
			<button
				class="hamburger"
				on:click={() => {
					open = !open;
				}}
				aria-expanded={open}
				aria-label="toggle menu"
			>
				<svg
					class:open
					viewBox="0 0 100 100"
					fill="none"
					stroke="currentColor"
					stroke-width="5"
					{width}
				>
					<path
						class="top"
						d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
					/>
					<path class="middle" d="m 30,50 h 40" />
					<path
						class="bottom"
						d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
					/>
				</svg>
			</button>
			<ul class="windows-nav">
				<li><a class="nav-title" id="home" href="/">Home</a></li>
				<li><a class="nav-title" id="schedule" href="/schedule">Schedule</a></li>
				<li><a class="nav-title" id="standings" href="/standings">Standings</a></li>
				<li><a class="nav-title" id="players" href="/players">Players</a></li>
				<li><a class="nav-title" id="news" href="/news">News</a></li>
			</ul>
		</nav>
	</div>
	{#if open}
		<div class="hamburger-menu" in:fade out:fade={{ delay: 400 }}>
			<ul class="flex flex-col gap-3 items-center justify-center">
				{#each Object.keys(navTitles) as title}
					{#if title === 'home'}
						<li>
							<a
								class="nav-title"
								id={title}
								href={`/`}
								on:click={() => {
									open = false;
								}}>{navTitles[title]}</a
							>
						</li>
					{:else}
						<li>
							<a
								class="nav-title"
								id={title}
								href={`/${title.toLowerCase()}`}
								on:click={() => {
									open = false;
								}}>{navTitles[title]}</a
							>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	@property --gradient-rotate {
		syntax: '<angle>';
		inherits: false;
		initial-value: 90deg;
	}
	.nav-container {
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.nav-box {
		background: rgba(255, 255, 255, 0.1);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		padding-inline: 1.5rem;
		border-bottom: 2px solid rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(10px);
	}

	.hamburger {
		cursor: pointer;
	}

	.windows-nav {
		display: none;
	}

	:root {
		--transition-duration: 400ms;
	}

	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	svg {
		transition: transform var(--transition-duration);
	}

	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.middle {
		transform-origin: 50%;
		transition: transform var(--transition-duration);
	}

	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.open {
		transform: rotate(45deg);
	}

	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}

	.open .middle {
		transform: rotate(90deg);
	}

	.hamburger-menu {
		padding: 3rem;
		width: 100vw;
		height: fit-content;
		background: rgba(0, 0, 0, 0.3);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		border-radius: 0 0 1rem 1rem;
		border-bottom: 2px solid rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(10px);
		z-index: 10;
	}

	.packersLogo {
		width: 12vw;
		aspect-ratio: 1/1;
	}
	.site-name {
		font-size: 4vw;
		font-weight: 900;
		text-transform: uppercase;
	}

	.nav-title {
		text-decoration: none;
		padding: 0.75rem 1rem;
		border-radius: 100vh;
		color: white;
		position: relative;
		text-transform: uppercase;
		font-weight: bold;
		transition: all 0.5s ease-in-out;
		background: rgba(18, 18, 18, 0.5);
	}

	li {
		--gradient-rotate: 45deg;
		padding: 0.75rem 0.25rem;
		background-image: linear-gradient(
			var(--gradient-rotate),
			rgba(32, 55, 49, 0),
			rgba(255, 255, 255, 0),
			rgba(255, 182, 18, 0)
		);
		border-radius: 100vh;
		animation: gradient-rotate 20s infinite;
		transition: all 0.5s ease-in-out;
	}
	li:hover {
		border: 1px solid rgba(255, 182, 18, 1);
		background-image: linear-gradient(
			var(--gradient-rotate),
			rgba(32, 55, 49, 1),
			rgba(255, 255, 255, 1),
			rgba(255, 182, 18, 1)
		);
		box-shadow: 0px 0px 10px 0px rgba(255, 182, 18, 0.5);
	}

	li:active {
		transform: scale(0.9);
	}

	@keyframes gradient-rotate {
		from {
			--gradient-rotate: 45deg;
		}
		to {
			--gradient-rotate: 405deg;
		}
	}

	@media (min-width: 975px) {
		.hamburger {
			display: none;
		}
		.windows-nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
		}
		.site-name {
			font-size: 2vw;
		}
		.packersLogo {
			width: 8vw;
		}
	}
</style>
