import DefaultTheme from 'vitepress/theme';
import layout from './layout.vue';
import './custom.css'

export default {
    ...DefaultTheme,
    Layout: layout,
};