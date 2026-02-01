"use client";

import Script from "next/script";

export function TawkChat() {
    return (
        <Script
            id="tawk-chat"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
                __html: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                        s1.async=true;
                        s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
                        s1.charset='UTF-8';
                        s1.setAttribute('crossorigin','*');
                        s0.parentNode.insertBefore(s1,s0);
                    })();
                `,
            }}
        />
    );
}

// Note: Replace YOUR_PROPERTY_ID and YOUR_WIDGET_ID with actual Tawk.to credentials
// You can get these from: https://dashboard.tawk.to/
