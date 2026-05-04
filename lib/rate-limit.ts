import { headers } from "next/headers";

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const MAX_BUCKETS = 5000;

function pruneIfTooLarge() {
  if (buckets.size <= MAX_BUCKETS) return;
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt < now) buckets.delete(key);
  }
  if (buckets.size > MAX_BUCKETS) {
    const excess = buckets.size - MAX_BUCKETS;
    let i = 0;
    for (const key of buckets.keys()) {
      if (i++ >= excess) break;
      buckets.delete(key);
    }
  }
}

export async function rateLimit(opts: {
  key: string;
  limit: number;
  windowMs: number;
}): Promise<{ ok: boolean; retryAfterSec?: number }> {
  const now = Date.now();
  const composite = await composeKey(opts.key);
  const existing = buckets.get(composite);

  if (!existing || existing.resetAt < now) {
    buckets.set(composite, { count: 1, resetAt: now + opts.windowMs });
    pruneIfTooLarge();
    return { ok: true };
  }

  if (existing.count >= opts.limit) {
    return {
      ok: false,
      retryAfterSec: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return { ok: true };
}

async function composeKey(scope: string): Promise<string> {
  const h = await headers();
  const ip =
    h.get("cf-connecting-ip") ??
    h.get("x-real-ip") ??
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  return `${scope}:${ip}`;
}
