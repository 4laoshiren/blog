<template>
    <NuxtLoadingIndicator color="#2e4c72" />
    <NuxtLayout>
        <div class="flex min-h-screen">
            <AppNavbar />
            <div class="flex flex-col flex-1">
                <UContainer class="flex-1 pt-20 max-w-6xl">
                    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
                </UContainer>
                <AppFooter class="text-center py-4" />
            </div>
        </div>
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
