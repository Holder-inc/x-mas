<script lang="ts">
	import { base } from '$app/paths';
	import ChatBubble from 'src/components/ChatBubble/ChatBubble.svelte';

	const imageSrc = 'https://avatars.githubusercontent.com/u/54804279?v=4';
</script>

<div id="outer-container">
	<div class="artboard phone-1">
		<a href={base} class="link link-hover">
			<div class="btn btn-sm btn-circle absolute right-2 top-2">✕</div>
		</a>
		<div id="avatar-container">
			<div class="avatar">
				<div class="w-36 rounded-full">
					<img src={imageSrc} />
				</div>
			</div>
		</div>
		<div id="chat-screen" class="artboard">
			<ChatBubble message="hello" {imageSrc} />
			<ChatBubble message="I'm swimmingkiim" {imageSrc} />
			<ChatBubble message="Hope you have a merry little christmas!" {imageSrc} />
			<ChatBubble message="Checkout my github!" {imageSrc} />
			<div id="social-link-container">
				<a href="https://github.com/swimmingkiim" target="__blank">
					<div class="badge badge-info gap-2">#Github</div>
				</a>
				<a href="https://www.linkedin.com/in/sooyoung-kim-424b51213/" target="__blank">
					<div class="badge badge-success gap-2">#Linkedin</div>
				</a>
				<a href="https://dev.to/swimmingkiim" target="__blank">
					<div class="badge badge-warning gap-2">#Blog</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#outer-container {
		position: fixed;
		z-index: 110;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		& > .artboard {
			min-width: 330px;
			min-height: 400px;
		}
	}
	.artboard {
		padding: 1em;
		background-color: #ffffff;

		border-radius: 1.5em;
	}
	#avatar-container {
		min-height: 40%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	#chat-screen {
		min-width: 100%;
		min-height: 60%;
		background-color: #103d37;
	}
	#social-link-container {
		margin-top: 1.5em;
	}
	.badge {
		padding: 0.5em 1em;
	}
</style>
