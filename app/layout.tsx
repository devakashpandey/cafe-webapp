import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TawkChat } from "@/components/widgets/TawkChat";

export const metadata: Metadata = {
  title: "CAFÉ RAMNA - Authentic Chai & Delicious Food Experience",
  description: "Welcome to CAFÉ RAMNA! Experience the authentic taste of India with our premium masala chai, gourmet burgers, stone-baked pizzas, and refreshing mocktails. Your favorite cafe destination.",
  keywords: "ramna cafe, chai, coffee, tea, masala chai, kulhad chai, burger, pizza, mocktail, indian cafe, restaurant, food",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CAFÉ RAMNA",
  },
  openGraph: {
    title: "CAFÉ RAMNA - Authentic Chai & Delicious Food Experience",
    description: "Experience the authentic taste of India at CAFÉ RAMNA",
    images: ["/hero_chai_1769890121689.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAFÉ RAMNA - Authentic Chai & Delicious Food Experience",
    description: "Experience the authentic taste of India at CAFÉ RAMNA",
  },
};

export const viewport: Viewport = {
  themeColor: "#EA580C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/hero_chai_1769890121689.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <TawkChat />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful');
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
