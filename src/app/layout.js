import "./globals.css"
import { Playfair_Display, Open_Sans } from "next/font/google"
import AnimationScript from "./animation"

// Load fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans"
})

export const metadata = {
  title: "Top Notch Salon | Premium Hairdressing in Denton, TX",
  description:
    "Top Notch Salon offers premium hairdressing services in Denton, TX. Book your appointment today!"
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${openSans.variable}`}
    >
      <body className="font-sans">
        {children}
        <AnimationScript />
      </body>
    </html>
  )
}
