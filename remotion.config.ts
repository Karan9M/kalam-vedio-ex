/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig((config) => {
  const withTailwind = enableTailwind(config);
  return {
    ...withTailwind,
    output: {
      ...withTailwind.output,
      hashFunction: "sha256",
    },
    cache: false,
    snapshot: {
      module: { timestamp: true, hash: false },
      resolve: { timestamp: true, hash: false },
      resolveBuildDependencies: { timestamp: true, hash: false },
      buildDependencies: { timestamp: true, hash: false },
    },
  };
});
