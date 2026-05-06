<script setup></script>

<template>
    <div>
        <AppHeader title="Projects" description="Some of my fantacies." />
        <AppProjectCard
            project_src="https://github.com/4laoshiren/oh-my-starship"
            project_name="oh-my-starship"
            project_description="Your easiest way to config starship"
        />
        <AppProjectCard
            project_src="https://github.com/4laoshiren/nonul"
            project_name="nonul"
            project_description='Fix "undeletable folder" on Windows caused by nul files from Claude Code'
        />
    </div>
</template>
