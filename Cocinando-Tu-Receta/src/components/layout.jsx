import './globals.css'

export const metadata = {
  title: 'Cocinando tu Receta',
  description: 'Crea tus propias recetas personalizadas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}


