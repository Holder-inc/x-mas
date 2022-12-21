<script lang="ts">
	export let message: string;
	export let imageSrc: string;
</script>

<div class="chat chat-start">
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img src={imageSrc} alt="profile-image" />
		</div>
	</div>
	<div class="chat-bubble chat-bubble-error">{message}</div>
</div>

<style lang="scss">
	.chat-bubble {
		word-wrap: break-word;
	}
</style>
