<script setup></script>

<template>
    <nav class="sticky top-0 h-screen flex flex-col px-8 pt-20 gap-3">
        <NuxtLink class="text-3xl" to="/">zz4zz</NuxtLink>
        <NuxtLink class="hover:underline" to="/">Home</NuxtLink>
        <NuxtLink class="hover:underline" to="/articles">Articles</NuxtLink>
        <NuxtLink class="hover:underline" to="/projects">Projects</NuxtLink>
        <NuxtLink class="hover:underline" to="/bookmarks">Bookmarks</NuxtLink>
    </nav>
</template>

<!-- 仅字体使用原生css实现 -->
<style scoped>
nav {
    font-family: DM Serif Display;
}
</style>
