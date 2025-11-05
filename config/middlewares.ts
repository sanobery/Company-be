const middlewares = [
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://company-fe-mu.vercel.app",
      ], // ✅ Your frontend domain

      headers: ["*"], // allow all headers
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true, // allow cookies / auth if needed
    },
  },
  { name: "global::cache", resolve: "./src/middlewares/cache" },
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

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];

export default middlewares;
