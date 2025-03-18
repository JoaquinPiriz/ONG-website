"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function ScrollToSection() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Función para manejar clics en enlaces internos
    const handleInternalLinks = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.hash && link.origin === window.location.origin) {
        e.preventDefault()

        const id = link.hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({ behavior: "smooth" })

          // Actualizar la URL sin recargar la página
          window.history.pushState({}, "", link.hash)
        }
      }
    }

    // Verificar si hay un hash en la URL al cargar la página
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Esperar un poco para que la página se renderice completamente
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }

    // Agregar event listener para los clics en enlaces
    document.addEventListener("click", handleInternalLinks)

    // Limpiar event listener al desmontar
    return () => {
      document.removeEventListener("click", handleInternalLinks)
    }
  }, [pathname])

  return null
}

