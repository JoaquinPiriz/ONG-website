import Link from "next/link"
import { ArrowRight, Heart, Globe, Users } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import DonationForm from "../../components/donation-form"
import DonationTracker from "../../components/donation-tracker"
import ImpactSection from "../../components/impact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ONG Ayuda</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium">
              Inicio
            </Link>
            <Link href="/about" className="font-medium">
              Nosotros
            </Link>
            <Link href="/projects" className="font-medium">
              Proyectos
            </Link>
            <Link href="/transparency" className="font-medium">
              Transparencia
            </Link>
            <Link href="/contact" className="font-medium">
              Contacto
            </Link>
          </nav>
          <Button>Donar Ahora</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Juntos podemos hacer la diferencia</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cada donación tiene un impacto directo en nuestras comunidades. Transparencia total en cómo utilizamos tus
              contribuciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Donar Ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Conoce Nuestros Proyectos
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Voluntarios trabajando en la comunidad"
              className="object-cover w-full h-full"
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

      {/* Current Projects */}
      <section className="py-16">
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
              },
              {
                title: "Educación para Todos",
                description: "Construyendo escuelas y proporcionando materiales educativos",
                progress: 45,
                goal: "$25,000",
                raised: "$11,250",
              },
              {
                title: "Salud Comunitaria",
                description: "Clínicas móviles y programas de prevención",
                progress: 60,
                goal: "$20,000",
                raised: "$12,000",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="h-48 mb-4 rounded-md overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=Proyecto ${index + 1}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
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
                  <Button className="w-full">Apoyar este proyecto</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Donation and Tracking Section */}
      <section className="py-16 bg-muted">
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
      <section className="py-16 bg-primary/5">
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
                  <Button variant="outline" className="w-full">
                    Saber más
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/transparency" className="text-muted-foreground hover:text-foreground">
                    Transparencia
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contacto
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
    </div>
  )
}

