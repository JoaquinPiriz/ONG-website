import "@/app/globals.css"; // al inicio del archivo
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ONG Ayuda',
  description: 'Juntos podemos hacer la diferencia en nuestras comunidades.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
