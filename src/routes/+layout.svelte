<script lang="ts">
	import { onMount } from 'svelte';
	import Konva from 'konva';
	import ChristmasTree from 'src/components/ChristmasTree/ChristmasTree.svelte';
	import House from 'src/components/House/House.svelte';

	import '../app.css';
	import { initKakao } from '../services/Kakao/kakao';
	import BelowBanner from 'src/components/BelowBanner/BelowBanner.svelte';

	export const prerender = true;

	let width: number;
	let height: number;

	const createCircle = (x: number, y: number) => {
		const circle = new Konva.Circle({
			x,
			y,
			radius: 3,
			fill: '#ffffff'
		});
		circle.attrs['amplitude'] = getRandomNumberInRange(8, 5);
		circle.attrs['period'] = getRandomNumberInRange(8000, 5000);
		circle.attrs['multiplyBy'] = getRandomNumberInRange(100, 0) > 50 ? 1 : -1;
		return circle;
	};

	const getRandomNumberInRange = (max: number, min: number) =>
		Math.floor(Math.random() * (max - min + 1) + min);

	onMount(() => {
		initKakao();
		let stage = new Konva.Stage({
			container: 'container',
			width: width,
			height: height
		});

		let layer = new Konva.Layer();

		const randomCircles = Array(50)
			.fill(0)
			.map((_) => {
				return createCircle(getRandomNumberInRange(width, 0), getRandomNumberInRange(height, 0));
			});

		randomCircles.forEach((circle) => {
			layer.add(circle);
		});

		stage.add(layer);

		var anim = new Konva.Animation((frame) => {
			if (frame) {
				randomCircles.forEach((circle) => {
					circle.x(
						circle.attrs['multiplyBy'] *
							circle.attrs['amplitude'] *
							Math.sin((frame.time * 3 * Math.PI) / circle.attrs['period']) +
							circle.x()
					);
					if (circle.y() > height) {
						circle.y(0);
					} else {
						circle.y(circle.y() + getRandomNumberInRange(5, 1));
					}
				});
			}
		}, layer);

		anim.start();
	});
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<main>
	<slot />
	<div id="container" />
	<div id="tree-container">
		<ChristmasTree />
	</div>
	<div id="houses-container">
		<House />
		<House />
		<House />
		<House />
	</div>
	<div id="sky" />
</main>
<footer>
	<BelowBanner />
</footer>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		min-height: 100vh;
		position: relative;
		overflow-x: hidden;
	}
	#container {
		width: 100%;
		min-width: 1600px;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 2;
	}
	#tree-container {
		width: 27%;
		max-width: 90%;

		position: absolute;
		z-index: 1;
		bottom: 0;
		@apply left-[20%] md:left-[50%];
		transform: translateX(-50%);
	}
	#houses-container {
		width: 100%;
		min-width: 1600px;
		height: 100%;
		min-height: 100vh;

		position: absolute;
		z-index: 0;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
	}
	#sky {
		width: 100%;
		height: 100%;
		background-color: black;

		position: fixed;
		top: 0;
		z-index: -1;
	}

	header {
		width: 100%;
		padding: 1em 1.5em;

		position: absolute;
		z-index: 100;

		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		gap: 1em;

		a {
			color: #5e5e5e;
		}
	}
	footer {
		padding: 1em;
		@apply px-[5%] md:px-[25%] lg:px-[30%];
	}
</style>
