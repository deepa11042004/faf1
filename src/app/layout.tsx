import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family Anchor Facilities Pvt. Ltd. | Premium Security Services",
  description:
    "Your Trusted Partner in Comprehensive Security & Facilities. We provide advanced CCTV surveillance, fire alarm systems, access control, public address systems, and professional security guard services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
