'use client'
import { useRouter } from 'next/navigation'
import './globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {


    const router = useRouter()
    if( typeof window !== 'undefined'){

      const logado = localStorage.getItem("logado")
      if (!logado) {
        router.replace("/login")
    }
    }
    return (


      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }