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
        <!-- <AppArticleCard
            article_virtual_path="/articles/building-your-first-api-with-expressjs-a-beginners-guide"
            article_title="Building Your First API with Express.js: A Beginner's Guide"
            article_description="A beginner-friendly guide to building your first API with Express.js"
            article_created_time="2026/4/2"
        />
        <AppArticleCard
            article_virtual_path="/articles/how-to-convert-a-svg-to-png-using-canvas"
            article_title="How to convert a SVG to PNG using Canvas"
            article_description="A simple way to convert a SVG to PNG using Canvas"
            article_created_time="2026/4/2"
        />
        <AppArticleCard
            article_virtual_path="/articles/ruankao"
            article_title="软考数据库"
            article_description="软考数据库知识点"
            article_created_time="2026/4/2"
        />
        <AppArticleCard
            article_virtual_path="/articles/dom-based-xss-from-both-attckers-and-developers-view"
            article_title="DOM-based XSS Optimizing"
            article_description="Everything I know about DOM-based XSS"
            article_created_time="2026/4/2"
        />
        <AppArticleCard
            article_virtual_path="/articles/burning"
            article_title="燃烧"
            article_description="null"
            article_created_time="2026/4/27"
        /> -->
    </div>
</template>
