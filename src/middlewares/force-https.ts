export default () => {
  return async (ctx: any, next: () => Promise<any>) => {
    console.log("x-forwarded-proto:", ctx.request.header["x-forwarded-proto"]);
    console.log("ctx.secure:", ctx.secure);
    // Only redirect HTTP requests in production
    if (
      process.env.NODE_ENV === "production" &&
      ctx.request.header["x-forwarded-proto"] === "http"
    ) {
      const host = ctx.request.header.host;
      ctx.status = 301;
      ctx.redirect(`https://${host}${ctx.request.url}`);
      return;
    }
    await next();
  };
};
