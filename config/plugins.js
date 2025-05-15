module.exports = () => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5
    }
  },
  documentation: {
    enabled: true,
    config: {
      "x-strapi-config": {
        plugins: ["i18n"],
      },
    },
  },
});
