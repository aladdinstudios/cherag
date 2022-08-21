const withTranspileModules = require("next-transpile-modules");
const webConfig = require("./react-native-web.config");

const isProd = process.env.NODE_ENV === "production";
const prodUrl = "https://aladdinstudios.github.io/cherag";

const withTM = withTranspileModules(webConfig.needsTranspile);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  assetPrefix: isProd ? prodUrl : undefined,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot|svg)$/,
      loader: "file-loader",
      options: {
        esModule: false,
        name: "[name].[hash].[ext]",
        outputPath: isProd ? "../../static/fonts" : "../static/fonts",
        publicPath: isProd
          ? `${prodUrl}/_next/static/fonts/`
          : "/_next/static/fonts/",
      },
    });
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = withTM(nextConfig);
