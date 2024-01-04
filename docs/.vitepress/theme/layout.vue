<script setup>
import DefaultTheme from 'vitepress/theme';
import Suika from './components/Suika.vue';


const { Layout } = DefaultTheme;
</script>

<template>
    <Layout>
        <template #home-hero-image>
            <Suika/>
        </template>
    </Layout>
</template>