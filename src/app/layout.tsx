import "./globals.css";

import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BitDevs México",
  description: "Directorio de seminarios en México",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
