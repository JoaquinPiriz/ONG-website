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

        // Extraer el ID de la sección (antes de cualquier parámetro)
        const hashParts = link.hash.split("?")
        const id = hashParts[0].substring(1)
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({ behavior: "smooth" })

          // Actualizar la URL sin recargar la página, manteniendo los parámetros
          window.history.pushState({}, "", link.hash)

          // Si hay un parámetro de proyecto y estamos en la sección de donación
          if (id === "donar" && hashParts.length > 1) {
            // Forzar un pequeño retraso para asegurar que el evento se procese correctamente
            setTimeout(() => {
              // Disparar un evento personalizado para notificar el cambio de hash
              window.dispatchEvent(new CustomEvent("hashchange"))
              window.dispatchEvent(new CustomEvent("customHashChange"))

              // Dar tiempo para que se cargue el formulario
              setTimeout(() => {
                const donationForm = document.getElementById("formulario-donacion")
                if (donationForm) {
                  donationForm.scrollIntoView({ behavior: "smooth" })
                }
              }, 200)
            }, 100)
          }
        }
      }
    }

    // Verificar si hay un hash en la URL al cargar la página
    if (window.location.hash) {
      const hashParts = window.location.hash.split("?")
      const id = hashParts[0].substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Esperar un poco para que la página se renderice completamente
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })

          // Si hay un parámetro de proyecto y estamos en la sección de donación
          if (id === "donar" && hashParts.length > 1) {
            // Disparar un evento personalizado para notificar el cambio de hash
            window.dispatchEvent(new CustomEvent("hashchange"))
            window.dispatchEvent(new CustomEvent("customHashChange"))

            // Dar tiempo para que se cargue el formulario
            setTimeout(() => {
              const donationForm = document.getElementById("formulario-donacion")
              if (donationForm) {
                donationForm.scrollIntoView({ behavior: "smooth" })
              }
            }, 200)
          }
        }, 200)
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

