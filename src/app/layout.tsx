import './globals.css'
import type { Metadata } from 'next'
import "react-multi-carousel/lib/styles.css";
import { Oswald, Roboto } from 'next/font/google'
import Footer from './(mainsite)/components/misc/Footer/Footer';
import Navbar from './(mainsite)/components/misc/Navbar/Navbar';
import Script from 'next/script';

// BUTTON STYLES - .main-button
import "./(mainsite)/components/styling_sheets/links/mainlink.css"


const primaryFont = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "900"], display: "swap", variable: "--primary-font" })
const secondaryFont = Oswald({ subsets: ['latin'], weight: ["300", "500", "700"], display: "swap", variable: "--secondary-font" })

export const metadata: Metadata = {
  title: 'Template Site Title',
  description: 'Template Site Desc'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} ${secondaryFont.variable}`}>

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>

        <Navbar />

        {children}

        <Footer />
        </body>
    </html>
  )
}
