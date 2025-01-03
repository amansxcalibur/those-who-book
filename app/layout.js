import localFont from 'next/font/local'
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const myFont = localFont({ src: './VCR_OSD_MONO_1.001.ttf' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
