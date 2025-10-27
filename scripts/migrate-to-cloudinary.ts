import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// ------------------------------
// ⚙️ Configure Cloudinary
// ------------------------------
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME!,
  api_key: process.env.CLOUDINARY_KEY!,
  api_secret: process.env.CLOUDINARY_SECRET!,
});

const UPLOADS_DIR = path.join(process.cwd(), "public/uploads");

// ------------------------------
// ⚙️ Load Strapi properly with DB config
// ------------------------------
async function loadStrapi() {
  process.env.NODE_ENV = process.env.NODE_ENV || "development";

  // ✅ Resolve absolute path to your Strapi root
  const strapiRoot = path.resolve(__dirname, "..");

  // Dynamically import the Strapi factory
  const strapiModule = await import("@strapi/strapi");
  const strapi = await strapiModule.createStrapi({
    distDir: strapiRoot, // ensures it finds /config + /database files
  });

  await strapi.start(); // ✅ starts DB + ORM connection
  return strapi;
}

// ------------------------------
// 🚀 Migration
// ------------------------------
async function migrate() {
  console.log("🚀 Starting migration...");

  const strapi = await loadStrapi();

  const files = await strapi.db.query("plugin::upload.file").findMany();

  for (const file of files) {
    if (file.url.includes("res.cloudinary.com")) {
      console.log(`⏭️ Already migrated: ${file.name}`);
      continue;
    }

    const localPath = path.join(UPLOADS_DIR, `${file.hash}${file.ext}`);
    if (!fs.existsSync(localPath)) {
      console.warn(`⚠️ File not found locally: ${file.name}`);
      continue;
    }

    const result = await cloudinary.uploader.upload(localPath, {
      folder: "strapi_uploads",
    });

    await strapi.db.query("plugin::upload.file").update({
      where: { id: file.id },
      data: {
        url: result.secure_url,
        provider: "cloudinary",
      },
    });

    console.log(`✅ Migrated: ${file.name}`);
  }

  console.log("🎉 Migration complete!");
  await strapi.destroy(); // clean shutdown
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
