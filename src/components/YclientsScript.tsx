import Script from "next/script";

export function YclientsScript() {
  return (
    <Script
      src="https://w2235642.yclients.com/widgetJS"
      strategy="afterInteractive"
      charSet="UTF-8"
    />
  );
}
