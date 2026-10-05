import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Montserrat,
  Mrs_Saint_Delafield,
} from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";

// Client brand type system: Cormorant Garamond headlines, Montserrat
// subheadings + body, and a thin script for accents. (The inspiration board
// specifies "Austie Script", a licensed face — Mrs Saint Delafield is the
// closest free Google font; swap the import if the licence is obtained.)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-mrs-saint",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ninezerofourbeautybar.com"),
  title: {
    default: `${site.name} ${site.tagline} — Hair Restoration, Color & Extensions`,
    template: `%s — ${site.name} ${site.tagline}`,
  },
  description: site.descriptor,
  openGraph: {
    title: `${site.name} ${site.tagline}`,
    description: site.descriptor,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <MotionProvider>
          <SmoothScroll>
            <ScrollProgressBar />
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
