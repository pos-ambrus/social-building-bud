"use client";

import { useSyncExternalStore } from "react";

const ORIGINAL_HOST = "www.sociallybudapest.hu";
const TRANSLATE_HOST = "www-sociallybudapest-hu.translate.goog";

function subscribe() {
  // The URL never changes without a full navigation/reload, so there is
  // nothing to subscribe to — this only needs a snapshot at mount.
  return () => {};
}

function getSnapshot() {
  return window.location.href;
}

function getServerSnapshot() {
  return "";
}

/**
 * Toggles between the real site and Google's translate.goog proxy of it.
 * No translation API, no maintenance, no duplicated content to keep in sync:
 * Google renders a machine-translated copy of whatever page you're on,
 * keeping the layout and internal links intact. Quality is machine-translation
 * grade, not hand-written, and the brand name gets translated too
 * ("Budapesti Közösségek" -> "Budapest Communities") — a deliberate trade-off
 * for zero-cost, always-current coverage of all 90+ pages.
 */
export default function TranslateToggle() {
  const href = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!href) return null;

  const url = new URL(href);
  const isTranslated = url.hostname === TRANSLATE_HOST;

  const targetHref = isTranslated
    ? `https://${ORIGINAL_HOST}${url.pathname}`
    : (() => {
        const params = "_x_tr_sl=hu&_x_tr_tl=en&_x_tr_hl=en";
        const search = url.search ? `${url.search}&${params}` : `?${params}`;
        return `https://${TRANSLATE_HOST}${url.pathname}${search}`;
      })();

  return (
    <a
      href={targetHref}
      className="hidden shrink-0 items-center gap-1 whitespace-nowrap rounded-full border-2 border-ink/15 px-3 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-pin-blue hover:text-pin-blue sm:inline-flex sm:px-4 sm:py-2 sm:text-sm"
      title={
        isTranslated
          ? "Vissza a magyar oldalra"
          : "Machine-translated by Google — layout stays the same, quality is automatic, not hand-written"
      }
    >
      {isTranslated ? "🇭🇺 Magyar" : "🇬🇧 English"}
    </a>
  );
}
