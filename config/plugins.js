module.exports = () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        "tin-tuc": {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
