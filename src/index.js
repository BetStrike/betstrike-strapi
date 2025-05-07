"use strict";
const bootstrap = require("./bootstrap");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    if (strapi.plugin("documentation")) {
      const override = {
        paths: {
          "/i18n/locales": {
            get: {
              responses: {
                200: {
                  description: "OK",
                  content: {
                    "application/json": {
                      schema: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            name: {
                              type: "string",
                              required: true,
                            },
                            code: {
                              type: "string",
                              required: true,
                            },
                            isDefault: {
                              type: "boolean",
                              required: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      };

      strapi
        .plugin("documentation")
        .service("override")
        .registerOverride(override, {
          // Specify the origin in case the user does not want this plugin documented
          pluginOrigin: "i18n",
          // The override provides everything don't generate anything
          excludeFromGeneration: ["i18n"],
        });
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap,
};
