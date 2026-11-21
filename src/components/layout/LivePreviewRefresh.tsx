"use client";
import { useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";

const subscribe = () => () => {};
/** Origin when running inside the admin's Live Preview iframe, otherwise null. */
const getPreviewOrigin = () => (window.self !== window.top ? window.location.origin : null);
const getServerSnapshot = () => null;

/**
 * When the site is shown inside the admin's Live Preview, refresh the page
 * every time the editor saves. Does nothing for normal visitors.
 */
export function LivePreviewRefresh() {
  const router = useRouter();
  const origin = useSyncExternalStore(subscribe, getPreviewOrigin, getServerSnapshot);
  if (!origin) return null;
  return <RefreshRouteOnSave refresh={() => router.refresh()} serverURL={origin} />;
}
