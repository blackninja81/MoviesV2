import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import styles from './styles.module.scss'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    template: '%s | MovieHub',
    default: 'MovieHub - Get All the Latest Movies',
  },
  description: 'Get All the latest Movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <div className={styles.mainSection}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}