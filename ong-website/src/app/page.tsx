import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Globe, Users } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import DonationForm from "../../components/donation-form"
import DonationTracker from "../../components/donation-tracker"
import ImpactSection from "../../components/impact-section"
import ScrollToSection from "../../components/scroll-to-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToSection />
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ONG Ayuda</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#inicio" className="font-medium">
              Inicio
            </Link>
            <Link href="#nosotros" className="font-medium">
              Nosotros
            </Link>
            <Link href="#proyectos" className="font-medium">
              Proyectos
            </Link>
            <Link href="#transparencia" className="font-medium">
              Transparencia
            </Link>
            <Link href="#contacto" className="font-medium">
              Contacto
            </Link>
          </nav>
          <Button asChild>
            <Link href="#donar">Donar Ahora</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Juntos podemos hacer la diferencia</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cada donación tiene un impacto directo en nuestras comunidades. Transparencia total en cómo utilizamos tus
              contribuciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#donar">
                  Donar Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#proyectos">Conoce Nuestros Proyectos</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
  <Image
    src="/images/hero2.jpg"
    alt="Voluntarios trabajando en la comunidad"
    layout="fill"
    objectFit="contain"
  />
</div>

        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">5,000+</h3>
              <p className="text-muted-foreground">Personas ayudadas</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">20+</h3>
              <p className="text-muted-foreground">Comunidades impactadas</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">$250,000</h3>
              <p className="text-muted-foreground">Donaciones recibidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nosotros</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce nuestra misión, visión y el equipo detrás de ONG Ayuda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground mb-6">
                Trabajamos para mejorar la calidad de vida de las comunidades más vulnerables a través de proyectos
                sostenibles y transparentes que generan un impacto real y medible.
              </p>

              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Un mundo donde todas las personas tengan acceso a sus necesidades básicas y oportunidades para
                desarrollar su potencial, en comunidades autosuficientes y prósperas.
              </p>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
  <Image
    src="/images/nosotros-collage.jpg"
    alt="Collage de proyectos y beneficiarios de ONG Ayuda"
    fill
    style={{ objectFit: "contain" }}
  />
</div>


          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Nuestro Equipo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Ana Rodríguez", role: "Directora Ejecutiva", image: "/images/Ana.jpg" },
                { name: "Carlos Méndez", role: "Director de Proyectos", image: "/images/carlos.jpg" },
                { name: "Laura Torres", role: "Coordinadora de Voluntarios", image: "/images/Laura.jpg" },
                { name: "Miguel Sánchez", role: "Director Financiero", image: "/images/miguel.jpg" },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h4 className="font-bold">{member.name}</h4>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section id="proyectos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyectos Actuales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce nuestros proyectos activos y cómo tus donaciones están siendo utilizadas para generar un impacto
              positivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Agua Limpia",
                description: "Llevando agua potable a comunidades rurales",
                progress: 75,
                goal: "$15,000",
                raised: "$11,250",
                image: "/images/proyecto_agua.jpg",
              },
              {
                title: "Educación para Todos",
                description: "Construyendo escuelas y proporcionando materiales educativos",
                progress: 45,
                goal: "$25,000",
                raised: "$11,250",
                image: "/images/proyecto_educacion.jpg",
              },
              {
                title: "Salud Comunitaria",
                description: "Clínicas móviles y programas de prevención",
                progress: 60,
                goal: "$20,000",
                raised: "$12,000",
                image: "/images/proyecto_salud.jpg",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="h-48 mb-4 rounded-md overflow-hidden relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Recaudado: {project.raised}</span>
                      <span>Meta: {project.goal}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground text-right">{project.progress}% completado</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="#donar">Apoyar este proyecto</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="#proyectos">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donation and Tracking Section */}
      <section id="donar" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <DonationForm />
            <DonationTracker />
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <ImpactSection />

      {/* Transparency Section */}
      <section id="transparencia" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparencia Total</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creemos en la transparencia completa. Cada donación es rastreada y puedes ver exactamente cómo se utiliza
              tu contribución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Informes Financieros",
                description: "Accede a nuestros informes financieros detallados y auditados.",
              },
              {
                title: "Seguimiento de Proyectos",
                description: "Monitorea el progreso de cada proyecto en tiempo real.",
              },
              {
                title: "Impacto Directo",
                description: "Conoce a las personas beneficiadas por tu donación.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#transparencia">Saber más</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes preguntas o quieres colaborar con nosotros? Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <Button className="w-full">Enviar mensaje</Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
                <address className="not-italic space-y-2 text-muted-foreground">
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Calle Principal 123, Ciudad, País
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@ongayuda.org
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +123 456 7890
                  </p>
                </address>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Horario de atención</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Sábados: 9:00 AM - 1:00 PM</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">ONG Ayuda</span>
              </div>
              <p className="text-muted-foreground">
                Trabajando juntos para crear un mundo mejor a través de la transparencia y el impacto directo.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-muted-foreground hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="text-muted-foreground hover:text-foreground">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#proyectos" className="text-muted-foreground hover:text-foreground">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="#transparencia" className="text-muted-foreground hover:text-foreground">
                    Transparencia
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#donar" className="text-muted-foreground hover:text-foreground">
                    Donar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Términos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <address className="not-italic text-muted-foreground">
                <p>Calle Principal 123</p>
                <p>Ciudad, País</p>
                <p className="mt-2">info@ongayuda.org</p>
                <p>+123 456 7890</p>
              </address>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} ONG Ayuda. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      {/* Botón flotante de donación */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full shadow-lg" asChild>
          <Link href="#donar">
            <Heart className="mr-2 h-4 w-4" />
            Donar Ahora
          </Link>
        </Button>
      </div>
    </div>
  )
}

