"use client";

import Script from "next/script";

/**
 * Embeds a GoHighLevel / LeadConnector inline form.
 * `form_embed.js` auto-resizes the iframe to its content once loaded.
 */
export function GhlForm({
  formId,
  title,
  minHeight = 680,
}: {
  formId: string;
  title: string;
  minHeight?: number;
}) {
  const iframeId = `inline-${formId}`;
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        title={title}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={title}
        data-height={minHeight}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        className="block w-full rounded-md bg-panel"
        style={{ minHeight, border: "none", width: "100%" }}
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
