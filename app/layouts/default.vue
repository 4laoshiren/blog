<!-- 该项目中的layout仅抽离了"背景"这一feature -->
<!-- 仅由一个iframe和slot构成，iframe置于slot图层下方 -->
<script setup></script>

<template>
    <!-- iframe不随页面滚动，置于其他图层下方，铺满，无边框 -->
    <iframe src="/sunlit/index.html" class="fixed -z-10 w-full h-full border-none"></iframe>
    <slot />
</template>

<style scoped>

</style>
