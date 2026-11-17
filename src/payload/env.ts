/** Shared environment decisions for the Payload config (DB + media storage). */
import os from "os";
import path from "path";

export const dbUri = process.env.DATABASE_URI || process.env.POSTGRES_URL || "file:./data/hello-kids.db";
export const isPostgres = dbUri.startsWith("postgres");

export const useS3 = !!process.env.S3_BUCKET;
/** Vercel Blob in production (Postgres + token), unless S3/R2 is configured. */
export const useBlob = isPostgres && !!process.env.BLOB_READ_WRITE_TOKEN && !useS3;
export const useCloudStorage = useBlob || useS3;

/**
 * Where Payload writes upload files. Locally: ./media.
 * With cloud storage, files live in Blob/S3 — use a temp folder so local files
 * never cause filename clashes (e.g. "photo-1.webp" renames).
 */
export const mediaStaticDir = useCloudStorage ? path.join(os.tmpdir(), "hello-kids-media") : "media";
