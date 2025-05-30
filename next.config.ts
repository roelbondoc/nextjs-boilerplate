import type { NextConfig } from "next";

const HoneybadgerSourceMapPlugin = require('@honeybadger-io/webpack');
const { setupHoneybadger } = require('@honeybadger-io/nextjs');

const nextConfig: NextConfig = {
};

// Showing default values
const honeybadgerNextJsConfig = {
  // Disable source map upload (optional)
  disableSourceMapUpload: false,

  // Hide debug messages (optional)
  silent: false,

  // More information available at @honeybadger-io/webpack: https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/webpack
  webpackPluginOptions: {
    // Required if you want to upload source maps to Honeybadger
    apiKey: process.env.HONEYBADGER_API_KEY,

    // Required if you want to upload source maps to Honeybadger
    assetsUrl: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/_next`,

    revision: process.env.VERCEL_GIT_COMMIT_SHA,
    endpoint: 'https://api.honeybadger.io/v1/source_maps',
    ignoreErrors: false,
    retries: 3,
    workerCount: 5,
    deploy: {
      environment: process.env.VERCEL_TARGET_ENV,
    }
  }
}

export default setupHoneybadger(nextConfig, honeybadgerNextJsConfig);
