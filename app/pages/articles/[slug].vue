<script setup>
const route = useRoute();
const { data } = await useAsyncData(() =>
    queryCollection("content").path(route.path).first()
);
</script>

<template>
    <ContentRenderer :value="data" />
</template>

<style scoped></style>
