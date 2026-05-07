<script setup>
// 使用queryCollection的.select方法查询具体collection中的属性
const { data: articles } = await useAsyncData("articles", () => {
    return queryCollection("articles")
        .order("published", "ASC")
        .select("title", "description", "published", "path")
        .all();
});
</script>

<template>
    <div>
        <AppHeader title="Articles" description="Things I want to share." />
        <AppArticleCard
            v-for="article in articles"
            :article_virtual_path="article.path"
            :article_title="article.title"
            :article_description="article.description"
            :article_created_time="article.published"
        />
    </div>
</template>
