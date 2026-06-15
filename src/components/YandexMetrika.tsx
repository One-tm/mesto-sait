"use client";

import Script from "next/script";
import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const COUNTER_ID = 109840408;

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...params: unknown[]) => void;
  }
}

function YandexMetrikaPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialHit = useRef(true);

  useEffect(() => {
    if (!window.ym) {
      return;
    }

    if (isInitialHit.current) {
      isInitialHit.current = false;
      return;
    }

    const query = searchParams.toString();
    const url = `${pathname}${query ? `?${query}` : ""}`;
    window.ym(COUNTER_ID, "hit", url, { referrer: document.referrer });
  }, [pathname, searchParams]);

  return null;
}

export function YandexMetrika() {
  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}', 'ym');

          ym(${COUNTER_ID}, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: "dataLayer",
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce: true,
            trackLinks: true
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <YandexMetrikaPageView />
      </Suspense>
    </>
  );
}
