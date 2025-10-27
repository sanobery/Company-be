export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  app: {
    keys: env.array("APP_KEYS"),
  },
  // ✅ Tell Strapi it's behind a trusted proxy (Render uses HTTPS → proxy → Strapi)
  proxy: true,

  // Public URL for Strapi
  url: env("PUBLIC_URL", "https://company-be.onrender.com"),

  // ✅ Explicitly enable secure cookies for admin (important for HTTPS)
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    // 👇 This ensures cookies are sent correctly via HTTPS on Render
    cookie: {
      secure: true,
    },
  },
});
