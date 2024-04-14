<template>
	<div>
		<!-- Start The First Game -->
		<StartButton v-if="!initClick" @click="ButtonClick" :disabled="clicked">
			Start Game
		</StartButton>

		<!-- Start a New Game -->
		<StartButton
			v-show="initClick"
			@click="ButtonClick"
			:disabled="clicked">
			Start a New Game
		</StartButton>
	</div>

	<Box v-show="toggle" @BoxClick="BoxClick" />

	<ScoreDisplay v-show="score" :score="score" />
</template>

<script setup>
import { ref } from "vue";
import { getRandomInt } from "../lib/Helpers";
import Box from "./Box.vue";
import ScoreDisplay from "./ScoreDisplay.vue";
import StartButton from "./StartButton.vue";

// reactive state
const initClick = ref(false);
const toggle = ref(false);
const clicked = ref(false);
const score = ref(0);

// defining vars
let time;

// methods
const ButtonClick = () => {
	if (initClick.value) score.value = 0;
	if (toggle.value) return;
	const randomTime = getRandomInt(1000, 3000);

	setTimeout(() => {
		toggle.value = !toggle.value;
		time = new Date().getTime();
	}, randomTime);

	clicked.value = !clicked.value;
};

const BoxClick = () => {
	if (!initClick.value) {
		initClick.value = true;
	}
	score.value = new Date().getTime() - time;
	toggle.value = !toggle.value;
	clicked.value = !clicked.value;
};
</script>
