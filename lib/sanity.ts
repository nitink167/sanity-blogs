import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: "2024-01-06",
    dataset: "production",
    projectId: "l2qn7nez",
    useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}