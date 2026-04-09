<script setup>
const props = defineProps(["href"]);
</script>

<template>
    <a :href="props.href" target="_blank" class="hover:underline text-[#2e4c72]">
        <slot />
    </a>
</template>
