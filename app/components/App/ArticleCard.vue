<script setup>
const props = defineProps([
    "article_virtual_path",
    "article_title",
    "article_description",
]);
</script>

<template>
    <NuxtLink :to="props.article_virtual_path">
        <div>
            <h2>{{ props.article_title }}</h2>
            <p>{{ props.article_description }}</p>
        </div>
    </NuxtLink>
</template>
