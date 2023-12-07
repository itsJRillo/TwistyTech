import { Inter } from 'next/font/google'
import "../../styles/globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TwistyTech - Inicio',
  description: 'Web-app of Rubik cubes',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/img/favicon.ico',
        href: '/img/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/img/favicon.ico',
        href: '/img/favicon.ico',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
