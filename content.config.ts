import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
    collections: {
        // 定义articles集合, 将使用useAsyncData('articles', () => {})进行查询后列表渲染的渲染方式
        articles: defineCollection({
            type: "page",
            source: "articles/*.md",
            // 使用zod为article collection添加自定义属性published, 其余title description path均为内置属性
            schema: z.object({
                published: z.date(),
            }),
        }),
    },
});
