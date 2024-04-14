<script setup>
import GameBoard from "./components/GameBoard.vue";
import Welcome from "./components/Welcome.vue";
</script>

<template>
	<div class="flex flex-col justify-center items-center">
		<Welcome />

		<GameBoard />
	</div>
</template>
