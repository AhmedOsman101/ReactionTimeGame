<template>
	<div class="text-center mt-5">
		<h1>
			Your Score is: <span class="font-bold">{{ score }}</span>
		</h1>
		<h2>
			your evaluation is: <span class="font-bold">{{ evaluation }}</span>
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
