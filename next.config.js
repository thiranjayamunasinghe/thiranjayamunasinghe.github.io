const path = require("path");
const isProd = process.env.NODE_ENV === "production";
const repoName = "thiranjayamunasinghe.github.io";

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
  assetPrefix: isProd ? `/${repoName}/` : "",
  basePath: isProd ? `/${repoName}` : "",
  trailingSlash: true,
  output: 'export',
};
