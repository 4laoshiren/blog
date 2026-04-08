<script setup>
const props = defineProps(["title", "description"]);
</script>

<template>
    <h1 class="mb-1 text-2xl">{{ props.title }}</h1>
    <p class="mb-6 italic">{{ props.description }}</p>
</template>
