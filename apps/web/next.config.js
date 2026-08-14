/** @type {import('next').NextConfig} */
import { fileURLToPath } from "node:url";

process.loadEnvFile(
  fileURLToPath(new URL("../../packages/prisma/.env", import.meta.url)),
);

const nextConfig = {};

export default nextConfig;
