import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CityHouse PMS Demo V2",
  description: "Hotel, room, availability, rates, channels and reservation calendar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi"><body>{children}</body></html>;
}
