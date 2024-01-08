export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of blog article"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug of your Blog Article",
            options: {
                source: "title"
            }
        },
        {
            name: "titleImage",
            type: "image",
            title: "Image"
        },
        {
            name: "description",
            type: "text",
            title: "Small Description"
        },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}