export default ({ env }) => ({
  documentation: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  //   redis: {
  //     config: {
  //       connections: {
  //         default: {
  //           connection: {
  //             host: env("REDIS_HOST", "127.0.0.1"),
  //             port: env.int("REDIS_PORT", 6379),
  //             db: env.int("REDIS_DB", 0),
  //             password: env("REDIS_PASSWORD", undefined),
  //           },
  //         },
  //       },
  //     },
  //   },
});
