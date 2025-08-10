import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore the specific warning from @supabase/realtime-js
    config.ignoreWarnings = [
      {
        module: /node_modules\/@supabase\/realtime-js\/dist\/module\/lib\/websocket-factory\.js/,
        message: /Critical dependency: the request of a dependency is an expression/,
      },
    ];

    return config;
  },
};

export default nextConfig;