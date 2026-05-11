<!-- 该项目中的layout仅抽离了"背景"这一feature -->
<!-- 仅由一个iframe和slot构成，iframe置于slot图层下方 -->
<template>
    <!-- iframe不随页面滚动，置于其他图层下方，铺满，无边框 -->
    <!-- <SunlitBackground class="-z-10" /> -->
    <slot />
</template>
