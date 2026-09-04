import Script from "next/script";

export function DikidiScript() {
  return (
    <Script
      src="https://dikidi.net/assets/js/widget_record/widget2.min.js?v=1773811740"
      strategy="afterInteractive"
      charSet="UTF-8"
    />
  );
}
