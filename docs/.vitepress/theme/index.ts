import DefaultTheme from "vitepress/theme"
import layout from "./layout.vue"
import "./styles"

export default {
    ...DefaultTheme,
    Layout: layout,
}
