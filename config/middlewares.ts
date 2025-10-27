export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::session",
    config: {
      cookie: {
        secure: process.env.COOKIE_SECURE === "true",
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000,
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
