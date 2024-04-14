<template>
	<div
		class="mt-16 bg-green-900 p-36 rounded-lg cursor-pointer"
		@click="emit('BoxClick')">
		Click me!
	</div>
</template>

<script setup>
const emit = defineEmits(["BoxClick"]);
</script>
