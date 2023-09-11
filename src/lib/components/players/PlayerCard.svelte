<script>
	export let playerHeadshot = '';
	export let playerName = '';
	export let kitNumber = '';
	export let position = '';
	export let age = '';
	export let height = '';
	export let weight = '';
	export let packersLogo = '';
	export let redirect = '';
</script>

<a href={redirect}>
	<div class="card-border w-[300px] h-[400px]">
		<div class="player-card h-full w-full">
			<div class="img-box h-3/5 w-full">
				<img class="headshot" src={playerHeadshot} alt="" />
				<img class="packersLogo" src={packersLogo} alt="" />
				<p class="kit-number text-center">{kitNumber}</p>
				<p class="position text-center">{position}</p>
			</div>
			<div class="name-box">
				<h1 class="first-name">{playerName.split(' ')[0]}</h1>
				<h1 class="surname">
					{#if playerName.split(' ')[1] === 'Odumegwu'}
						<span class=" text-[45px]">{playerName.split(' ')[1]}</span>
					{:else}
						{playerName.split(' ')[1]}
					{/if}
					{#if playerName.split(' ')[2]}
						{#if playerName.split(' ')[2] === 'Jr.' || playerName.split(' ')[2] === 'Sr.'}
							<span class="text-xl">{playerName.split(' ')[2]}</span>
						{:else}
							{playerName.split(' ')[2]}
						{/if}
					{/if}
				</h1>
			</div>
			<div class="stats-box font-semibold text-xl text-center relative">
				<p>AGE: {age}</p>
				<p>HEIGHT: {height}</p>
				<p>WEIGHT: {weight}</p>
				<p class="kit-number-dark">{kitNumber}</p>
			</div>
		</div>
		<div class="glow-strip" />
	</div>
</a>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
	.card-border {
		border-radius: 20px;
		background: linear-gradient(180deg, #274e41 0%, #0a2322 100%);
		box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.25);
		padding: 10px;
		position: relative;
		overflow: hidden;
	}
	.player-card {
		border: 5px solid white;
		border-radius: 15px;
		background: linear-gradient(180deg, #274e41 0%, #0a2322 100%);
		box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.25);
		z-index: 10;
		position: relative;
	}
	.img-box {
		border-radius: 10px 10px 15px 15px;
		overflow: hidden;
		position: relative;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.packersLogo {
		position: absolute;
		top: -40%;
		left: -50%;
		width: 400px;
		height: 400px;
		object-fit: contain;
		z-index: 5;
	}
	.headshot {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 9;
	}
	.img-box::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 10px 10px 15px 15px;
		background: linear-gradient(
			180deg,
			rgba(39, 78, 65, 0) 0%,
			rgba(24, 57, 49, 0) 48.44%,
			#082221 100%
		);
		z-index: 10;
	}
	.first-name {
		font-family: Cedarville Cursive;
		font-size: 48px;
		font-weight: 900;
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.surname {
		font-size: 48px;
		font-weight: 900;
		color: #ffb612;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.stats-box {
		position: relative;
		top: -8%;
		z-index: 10;
	}
	.kit-number {
		position: absolute;
		font-size: 96px;
		font-weight: 900;
		top: -10%;
		right: 5%;
		text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
	}
	.kit-number-dark {
		position: absolute;
		font-size: 96px;
		font-weight: 900;
		bottom: 20%;
		left: 2%;
		opacity: 0.1;
		text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
	}
	.name-box {
		position: relative;
		top: -10%;
		z-index: 10;
		text-align: center;
	}
	.position {
		position: absolute;
		font-size: 24px;
		font-weight: 900;
		top: 40%;
		right: 8%;
		text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
	}
	.holographic {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 15px;
		opacity: 1;
		z-index: 1;
		background-image: linear-gradient(45deg, rgba(255, 182, 18, 0.5), rgba(255, 255, 255, 0.1));
	}
	.glow-strip {
		width: 2%;
		height: 200%;
		border-radius: 15px;
		background-image: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
		position: absolute;
		top: -50%;
		left: -100%;
		opacity: 0.7;
		box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 0.1), 0px 0px 5px 4px rgba(255, 255, 255, 0.5);
		transform: rotate(-45deg);
		filter: blur(1px);
		z-index: 100;
	}
	.card-border:hover > .glow-strip {
		animation: glowTransition 3s linear forwards;
	}
	@keyframes glowTransition {
		from {
			left: 170%;
		}
		to {
			left: -100%;
		}
	}
</style>
