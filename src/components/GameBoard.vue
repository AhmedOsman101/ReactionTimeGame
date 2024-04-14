<template>
	<div>
		<!-- <button
			v-if="!initClick"
			@click="handleButtonClick"
			class="bg-green-900 hover:bg-green-700 transition-all duration-[400ms] ease-in-out text-white font-bold py-2 px-4 rounded"
			:disabled="clicked">
			Start the Game
		</button> -->
		<StartButton
			v-if="!initClick"
			@click="handleButtonClick"
			:disabled="clicked">
			start the game</StartButton
		>
		<StartButton
			v-if="initClick"
			@click="handleButtonClick"
			:disabled="clicked">
			Start a New Game
		</StartButton>
	</div>

	<Box v-show="toggle" @BoxClick="handleBoxClick" />

	<ScoreDisplay v-show="score" :score="score" />
</template>

<script setup>
import { ref } from "vue";
import { getRandomInt } from "../lib/Helpers";
import Box from "./Box.vue";
import ScoreDisplay from "./ScoreDisplay.vue";
import StartButton from "./StartButton.vue";

const initClick = ref(false);
const toggle = ref(false);
const clicked = ref(false);
const score = ref(0);

let time;

const handleButtonClick = () => {
	if (initClick.value) score.value = 0;
	if (toggle.value) return;
	const randomTime = getRandomInt(1000, 3000);

	setTimeout(() => {
		toggle.value = !toggle.value;
		time = new Date().getTime();
	}, randomTime);

	console.log("clicked");
	clicked.value = !clicked.value;
};

const handleBoxClick = () => {
	if (!initClick.value) {
		initClick.value = true;
	}
	score.value = new Date().getTime() - time;
	toggle.value = !toggle.value;
	clicked.value = !clicked.value;
};
</script>
