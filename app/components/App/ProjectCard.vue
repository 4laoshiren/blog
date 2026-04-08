<script setup>
const props = defineProps([
    "project_src",
    "project_name",
    "project_description"
]);
</script>

<template>
    <div class="mb-3">
        <a class="hover:underline" target="_blank" :href="props.project_src">
            <span>{{ props.project_name }}</span>
            <br>
            <span>{{ props.project_description }}</span>
        </a>
    </div>
</template>
