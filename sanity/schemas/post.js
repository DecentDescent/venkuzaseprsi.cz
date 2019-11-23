export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "order",
      title: "Order ID",
      type: "number"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text"
    },
    {
      name: "category",
      title: "Category",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Image Link",
      type: "string"
    },
    {
      name: "imageLink",
      title: "Image Author Link",
      type: "string"
    },
    {
      name: "imageAuthor",
      title: "Image Author",
      type: "string"
    },
    {
      name: "imagePosition",
      title: "Image Position",
      type: "string"
    },
    {
      name: "song",
      title: "Song",
      type: "string"
    },
    {
      name: "songURL",
      title: "Song Spotify URL",
      type: "string"
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }
  ],

  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
