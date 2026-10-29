import { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    additionalData: `@use "styles/prepend" as *;`,
  },
  // Send the legacy vercel.app domain to the canonical one so Google consolidates on it.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "portefolio-benoit-havet.vercel.app" }],
        destination: "https://www.hblabstudio.com/:path*",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
