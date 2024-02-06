import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

export const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    quote: {
      type: "string",
      required: false,
    },
    avatar: {
      type: "string",
      required: false,
    },
    occupation: {
      type: "string",
      required: false,
    },
    email: {
      type: "string",
      required: false,
    },
    github: {
      type: "string",
      required: false,
    },
    medium: {
      type: "string",
      required: false,
    },
    twitter: {
      type: "string",
      required: false,
    },
    linkedin: {
      type: "string",
      required: false,
    },
    instagram: {
      type: "string",
      required: false,
    },
  },
}));

export const AuthorsArticle = defineNestedType(() => ({
  name: "AuthorsArticle",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    quote: {
      type: "string",
      required: false,
    },
  },
}));

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    cover: {
      type: "string",
      required: false,
    },
    imageHeader: {
      type: "string",
      required: false,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    modifiedDate: {
      type: "date",
      required: false,
    },
    channel: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: false,
      default: [],
    },
    layout: {
      type: "string",
      required: false,
    },
    typography: {
      type: "string",
      required: false,
    },
    draft: {
      type: "boolean",
      required: true,
    },
    author: {
      type: "nested",
      of: Author,
      required: true,
    },
    gallery: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Article],
});
