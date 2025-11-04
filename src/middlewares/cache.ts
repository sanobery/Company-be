import Redis from "ioredis";

/**
 * Global cache middleware for Strapi v5
 * Must export a factory function that returns the actual middleware.
 */
const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT || 6379),
  db: Number(process.env.REDIS_DB || 0),
});

const cacheMiddleware = async (ctx, next) => {
  if (ctx.method !== "GET") {
    await next();
    return;
  }

  const key = `cache:${ctx.request.url}`;
  const cached = await redis.get(key);

  if (cached) {
    ctx.set("X-Cache", "HIT");
    ctx.body = JSON.parse(cached);
    return;
  }

  await next();

  if (ctx.status === 200 && ctx.body) {
    await redis.setex(key, 60, JSON.stringify(ctx.body)); // 60 seconds
    ctx.set("X-Cache", "MISS");
  }
};

/**
 * 👇 This default export MUST be a function that returns another function.
 * Strapi calls this factory with the middleware config.
 */
export default () => cacheMiddleware;
