# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

🧠 1️⃣ Install dependencies

Run this in your Strapi project root:

```bash
npm install axios cloudinary dotenv
npm install -D @types/node @types/cloudinary
```

## Redis in Strapi?

Strapi by default doesn’t cache queries — every API hit goes straight to the database.
If your content doesn’t change often, caching responses (or query results) in Redis can cut response times from ~100ms → ~5ms 🚀.

```bash
npm install ioredis strapi-plugin-redis
```

## Installation of Prettier

Install Prettier as a development dependency:

```bash
# Using npm
npm install --save-dev prettier
```

## Creating Prettier Configuration File

Instead of relying on IDE formatting, create a configuration file in the project root:

.prettierrc (JSON format)

{
"semi": true,
"singleQuote": true,
"trailingComma": "es5",
"tabWidth": 2,
"printWidth": 80,
"endOfLine": "lf"
}

## Using Prettier

Format all files

```bash
npx prettier --write .
npx prettier --check .
```

## Adding Prettier Scripts to package.json

"scripts": {
"format": "prettier --write .",
"format:check": "prettier --check ."
}

Now you can run:

```bash
npm run format
npm run format:check
```

## Swagger / OpenAPI Documentation Setup for Strapi v5

🧩 Overview

Strapi v5 supports auto-generation of OpenAPI (Swagger) documentation through the official @strapi/plugin-documentation.
This plugin creates both a Swagger UI and an OpenAPI specification file, making it easy to explore, test, and share your API.

```bash
npm run strapi openapi generate
npm install @strapi/plugin-documentation
```

Then open the following URL in your browser:

👉 http://localhost:1337/documentation

You’ll see a Swagger UI interface listing all available API endpoints with descriptions, request parameters, and response schemas.
