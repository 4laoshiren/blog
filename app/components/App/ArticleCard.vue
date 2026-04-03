<script setup>
const props = defineProps([
    "article_path",
    "article_title",
    "article_description",
]);
</script>

<template>
    <NuxtLink to="props.article_path">
        <div>
            <time datetime="2026-04-03"></time>
            <h2>{{ props.article_title }}</h2>
            <p>{{ props.article_description }}</p>
        </div>
    </NuxtLink>
</template>

<style scoped></style>
