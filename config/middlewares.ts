export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::session",
    config: {
      cookie: {
        secure: process.env.COOKIE_SECURE === "true", // set to false in dev
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
