import { defineConfig } from "vitepress"
import { withMermaid } from "vitepress-plugin-mermaid"
import mathjax3 from "markdown-it-mathjax3"
import { readdir } from "node:fs/promises"

const base = "/notebook/"
const logo = "/favicon.png"
enum nav {
    py = "/python/",
    js = "/javascript/",
}
const a = (thisSidebar: nav, dirName: string, fileName: string) => {
    const [_, num, title] = fileName.split(/^(\d+)-/)
    const text = `${[...num].reduce(
        (t, n) => t + ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"][n],
        ""
    )}﹒${title}`.replace(/\.md$/, "")
    let link: string = thisSidebar
    if (num !== "0") link += `${dirName}/${fileName}`
    return { text, link }
}
const aaa = async (thisSidebar: nav, dirName: string) => {
    const [_, num, text] = dirName.split(/^(\d+)-/)
    if (_) return null
    const files = await readdir(`docs${thisSidebar}${dirName}`)
    if (num === "0") files.unshift("0-准备环境")
    const items = files.map((_) => a(thisSidebar, dirName, _))
    return { text, items }
}

export default withMermaid({
    ...defineConfig({
        base,
        lang: "zh-CN",
        title: "notebook",
        lastUpdated: true,
        head: [
            ["link", { rel: "icon", href: (base ?? "/").replace(/\/$/, logo) }],
        ],
        themeConfig: {
            logo,
            socialLinks: [
                { icon: "github", link: "https://github.com/nanarino" },
                { icon: "twitter", link: "https://twitter.com/kogawananari" },
            ],
            nav: [
                {
                    text: "JavaScript",
                    link: nav.js,
                    activeMatch: nav.js,
                },
                {
                    text: "Python",
                    link: nav.py,
                    activeMatch: nav.py,
                },
            ],
            sidebar: {
                [nav.py]: await Promise.all(
                    (
                        await readdir(`docs${nav.py}`)
                    ).map(async (dir) => aaa(nav.py, dir))
                ),
                [nav.js]: await Promise.all(
                    (
                        await readdir(`docs${nav.js}`)
                    ).map(async (dir) => aaa(nav.js, dir))
                ),
            },
        },
        markdown: {
            config: (md) => md.use(mathjax3),
        },
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) =>
                        [
                            "math",
                            "maction",
                            "maligngroup",
                            "malignmark",
                            "menclose",
                            "merror",
                            "mfenced",
                            "mfrac",
                            "mi",
                            "mlongdiv",
                            "mmultiscripts",
                            "mn",
                            "mo",
                            "mover",
                            "mpadded",
                            "mphantom",
                            "mroot",
                            "mrow",
                            "ms",
                            "mscarries",
                            "mscarry",
                            "mscarries",
                            "msgroup",
                            "mstack",
                            "mlongdiv",
                            "msline",
                            "mstack",
                            "mspace",
                            "msqrt",
                            "msrow",
                            "mstack",
                            "mstack",
                            "mstyle",
                            "msub",
                            "msup",
                            "msubsup",
                            "mtable",
                            "mtd",
                            "mtext",
                            "mtr",
                            "munder",
                            "munderover",
                            "semantics",
                            "math",
                            "mi",
                            "mn",
                            "mo",
                            "ms",
                            "mspace",
                            "mtext",
                            "menclose",
                            "merror",
                            "mfenced",
                            "mfrac",
                            "mpadded",
                            "mphantom",
                            "mroot",
                            "mrow",
                            "msqrt",
                            "mstyle",
                            "mmultiscripts",
                            "mover",
                            "mprescripts",
                            "msub",
                            "msubsup",
                            "msup",
                            "munder",
                            "munderover",
                            "none",
                            "maligngroup",
                            "malignmark",
                            "mtable",
                            "mtd",
                            "mtr",
                            "mlongdiv",
                            "mscarries",
                            "mscarry",
                            "msgroup",
                            "msline",
                            "msrow",
                            "mstack",
                            "maction",
                            "semantics",
                            "annotation",
                            "annotation-xml",
                            "mjx-container",
                            "mjx-assistive-mml",
                        ].includes(tag),
                },
            },
        },
    }),
})
