<script setup>
const route = useRoute();
// 解包queryCollection的返回结果中的data属性, 重命名成articles, 语义上更好, 且与content.config.ts保持一致
const { data: articles } = await useAsyncData(() =>
    queryCollection("articles").path(route.path).first()
);
</script>

<template>
    <ContentRenderer :value="articles" />
</template>
