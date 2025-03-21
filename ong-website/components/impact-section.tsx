import { Card, CardContent } from "./ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import { Quote } from "lucide-react"

export default function ImpactSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Beneficiaria, Proyecto Agua Limpia",
      quote:
        "Gracias a la instalación del nuevo pozo, nuestra comunidad ahora tiene acceso a agua potable por primera vez. Esto ha cambiado nuestras vidas.",
      avatar: "/images/maria.jpg",
    },
    {
      name: "Juan Pérez",
      role: "Director de Escuela, Proyecto Educación",
      quote:
        "Los nuevos materiales educativos y la renovación de nuestras aulas han mejorado significativamente la calidad de la educación que podemos ofrecer.",
      avatar: "/images/juan.jpg",
    },
    {
      name: "Ana Martínez",
      role: "Enfermera, Proyecto Salud",
      quote:
        "La clínica móvil nos permite llegar a comunidades remotas que nunca antes habían tenido acceso a atención médica básica.",
      avatar: "/images/ana.jpg",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Historias de Impacto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce a las personas cuyas vidas han cambiado gracias a tu generosidad y apoyo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-16 w-16 mr-4 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/stories" className="text-primary font-medium hover:underline">
            Ver más historias de impacto →
          </a>
        </div>
      </div>
    </section>
  )
}

