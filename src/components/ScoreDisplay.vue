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

const props = defineProps({
	score: Number,
});

const evaluation = computed(() => {
	return evaluateScore(props.score);
});

evaluateScore;
</script>
