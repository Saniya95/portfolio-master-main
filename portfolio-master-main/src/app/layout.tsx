
import type { Metadata } from 'next';
import { poppins, inter } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
// import { GenkitAnalytics } from "@genkit-ai/next/plugin"; // Temporarily commented out

export const metadata: Metadata = {
  title: 'Portfolio Pro | Saniya Ahmed',
  description: 'Full-Stack Developer & Pixel-Perfect Frontend Aficionado. Discover my projects and skills.',
  openGraph: {
    title: 'Portfolio Pro | Saniya Ahmed',
    description: 'Full-Stack Developer & Pixel-Perfect Frontend Aficionado. Discover my projects and skills.',
    type: 'website',
    // TODO: Add a URL for your site and an image for Open Graph
    // url: 'https://yourportfolio.com',
    // images: [{ url: 'https://yourportfolio.com/og-image.png' }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        {/* <GenkitAnalytics /> // Temporarily commented out */}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
