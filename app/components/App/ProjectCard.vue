<script setup>
const props = defineProps([
    "project_src",
    "project_name",
    "project_description",
    "project_img",
]);
</script>

<template>
    <a target="_blank" :href="props.project_src">
        <h3>{{ props.project_name }}</h3>
        <p>{{ props.project_description }}</p>
        <img :src="props.project_img" width="48" height="48" />
    </a>
</template>

<style scoped></style>
