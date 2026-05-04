import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Minimal config for free-tier deployment.
  // No KV cache binding — relies on edge cache + browser cache for static pages.
  // Add `kv-incremental-cache` later when scaling beyond 100k req/day.
});
