const middlewares = [
  // Custom HTTPS enforcement middleware
  {
    name: "global::force-https",
    resolve: "./src/middlewares/force-https",
  },

  // Default Strapi middlewares
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::session",
    config: {
      cookie: {
        secure: process.env.NODE_ENV === "production", // ✅ only secure in prod
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
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

export default middlewares;
