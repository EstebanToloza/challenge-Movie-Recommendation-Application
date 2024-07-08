import { Providers } from './Providers'
import NavBar from './components/NavBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body /* className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" */>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}