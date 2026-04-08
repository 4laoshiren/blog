<script setup>
const props = defineProps([
    "article_virtual_path",
    "article_title",
    "article_description",
]);
</script>

<template>
    <NuxtLink class="hover:underline" :to="props.article_virtual_path">
            <span>{{ props.article_title }}</span>
            <br>
            <span>{{ props.article_description }}</span>
            <br>
            <br>
    </NuxtLink>
</template>
