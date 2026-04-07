<script setup>
const props = defineProps(["title", "description"]);
</script>

<template>
    <h1 class="mb-1">{{ props.title }}</h1>
    <p class="mb-6">{{ props.description }}</p>
</template>
