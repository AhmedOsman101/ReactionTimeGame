<template>
	<div class="text-center mt-5">
		<h1>
			You Clicked it in: <span class="font-bold">{{ score }}</span
			>ms
		</h1>
		<h2>
			Your Evaluation is: <span class="font-bold">{{ evaluation }}</span>
		</h2>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { evaluateScore } from "../lib/Helpers";

// props
const props = defineProps({
	score: Number,
});
// add a computed property evaluation to evaluate the player's score
// the score is based on a scoring system
const evaluation = computed(() => evaluateScore(props.score));
</script>
