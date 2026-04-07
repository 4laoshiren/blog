<script setup>
const props = defineProps([
    "project_src",
    "project_name",
    "project_description"
]);
</script>

<template>
    <a class="block mb-3 hover:underline" target="_blank" :href="props.project_src">
        <h3>{{ props.project_name }}</h3>
        <p>{{ props.project_description }}</p>
    </a>
</template>
