<script setup>
const props = defineProps(["title", "description"]);
</script>

<template>
    <h1>{{ props.title }}</h1>
    <p>{{ props.description }}</p>
</template>
