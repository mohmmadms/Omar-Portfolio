import "./globals.css";
import { Space_Grotesk, Fraunces, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import Shell from "@/components/Shell";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata = {
  title: "Kanakrieh — Quality Infrastructure, Engineered.",
  description:
    "A Jordanian consultancy & training center delivering ISO-aligned systems, accreditation readiness, and capacity building across the Middle East.",
  metadataBase: new URL("https://kanakrieh.vercel.app"),
  openGraph: {
    title: "Kanakrieh — Quality Infrastructure, Engineered.",
    description:
      "ISO/IEC 17025 · 9001 · 14001 · 45001 · 17020 — accreditation & metrology across the Middle East.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0A0C10",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${display.variable} ${serif.variable} ${mono.variable} ${arabic.variable}`}
    >
      <body suppressHydrationWarning className="font-display bg-abyss text-ivory antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
