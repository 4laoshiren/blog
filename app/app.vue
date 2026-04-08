<template>
    <NuxtLayout>
        <div class="flex min-h-screen">
            <AppNavbar />
            <div class="flex flex-col flex-1">
                <UContainer class="flex-1 pt-20 max-w-6xl">
                    <NuxtPage />
                </UContainer>
                <AppFooter class="text-center py-4" />
            </div>
        </div>
    </NuxtLayout>
</template>
