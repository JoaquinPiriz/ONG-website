"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export default function DonationForm() {
  const [activeTab, setActiveTab] = useState<string>("oneTime")
  const [oneTimeAmount, setOneTimeAmount] = useState<string>("")
  const [monthlyAmount, setMonthlyAmount] = useState<string>("")
  const [oneTimeCustomAmount, setOneTimeCustomAmount] = useState<string>("")
  const [monthlyCustomAmount, setMonthlyCustomAmount] = useState<string>("")
  const [oneTimeProject, setOneTimeProject] = useState<string>("any")
  const [monthlyProject, setMonthlyProject] = useState<string>("any")

  const amount = activeTab === "oneTime" ? oneTimeAmount : monthlyAmount
  const customAmount = activeTab === "oneTime" ? oneTimeCustomAmount : monthlyCustomAmount
  const project = activeTab === "oneTime" ? oneTimeProject : monthlyProject

  // Detectar proyecto seleccionado desde la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash

      if (hash.includes("?proyecto=")) {
        const projectParam = hash.split("?proyecto=")[1]

        if (["water", "education", "health"].includes(projectParam)) {
          // Actualizar inmediatamente para evitar problemas de timing
          setOneTimeProject(projectParam)
          setMonthlyProject(projectParam)

          // Forzar una actualización adicional después de un breve retraso
          setTimeout(() => {
            setOneTimeProject(projectParam)
            setMonthlyProject(projectParam)
          }, 100)
        }
      }
    }

    // Verificar al cargar el componente
    handleHashChange()

    // Escuchar cambios en el hash
    window.addEventListener("hashchange", handleHashChange)
    window.addEventListener("customHashChange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("customHashChange", handleHashChange)
    }
  }, [])

  const handleAmountChange = (value: string) => {
    if (activeTab === "oneTime") {
      setOneTimeAmount(value)
      setOneTimeCustomAmount("")
    } else {
      setMonthlyAmount(value)
      setMonthlyCustomAmount("")
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (activeTab === "oneTime") {
      setOneTimeCustomAmount(e.target.value)
      setOneTimeAmount("custom")
    } else {
      setMonthlyCustomAmount(e.target.value)
      setMonthlyAmount("custom")
    }
  }

  const handleProjectChange = (value: string) => {
    if (activeTab === "oneTime") {
      setOneTimeProject(value)
    } else {
      setMonthlyProject(value)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle id="formulario-donacion">Haz una donación</CardTitle>
        <CardDescription>
          Tu donación ayuda a financiar proyectos que tienen un impacto real en las comunidades.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="oneTime" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="oneTime">Única</TabsTrigger>
            <TabsTrigger value="monthly">Mensual</TabsTrigger>
          </TabsList>

          <TabsContent value="oneTime" className="space-y-6">
            <div className="space-y-4">
              <Label>Selecciona o ingresa un monto</Label>
              <RadioGroup value={oneTimeAmount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-4">
                {["10", "25", "50", "100", "250", "custom"].map((value) => (
                  <div key={value} className="flex items-center">
                    <RadioGroupItem value={value} id={`amount-${value}`} className="peer sr-only" />
                    <Label
                      htmlFor={`amount-${value}`}
                      className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                    >
                      {value === "custom" ? "Otro" : `$${value}`}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {oneTimeAmount === "custom" && (
                <div className="mt-4">
                  <Label htmlFor="custom-amount">Monto personalizado</Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                    <Input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Ingresa un monto"
                      value={oneTimeCustomAmount}
                      onChange={handleCustomAmountChange}
                      className="pl-8"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <Label>Selecciona un proyecto (opcional)</Label>
              <RadioGroup value={oneTimeProject} onValueChange={handleProjectChange} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="any" id="project-any" />
                  <Label htmlFor="project-any" className="cursor-pointer">
                    Donde más se necesite
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="water" id="project-water" />
                  <Label htmlFor="project-water" className="cursor-pointer">
                    Agua Limpia
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="education" id="project-education" />
                  <Label htmlFor="project-education" className="cursor-pointer">
                    Educación para Todos
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="health" id="project-health" />
                  <Label htmlFor="project-health" className="cursor-pointer">
                    Salud Comunitaria
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nombre</Label>
                  <Input id="first-name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Apellido</Label>
                  <Input id="last-name" placeholder="Tu apellido" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
            </div>

            <Button
              className="w-full"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                alert("¡Gracias por tu donación! En un entorno real, procesaríamos tu pago de forma segura.")
              }}
            >
              Donar ahora
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Tu donación es segura y procesada con encriptación. Recibirás un recibo por correo electrónico.
            </p>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <div className="space-y-4">
              <Label>Selecciona o ingresa un monto mensual</Label>
              <RadioGroup value={monthlyAmount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-4">
                {["10", "25", "50", "100", "250", "custom"].map((value) => (
                  <div key={value} className="flex items-center">
                    <RadioGroupItem value={value} id={`monthly-${value}`} className="peer sr-only" />
                    <Label
                      htmlFor={`monthly-${value}`}
                      className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                    >
                      {value === "custom" ? "Otro" : `$${value}`}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {monthlyAmount === "custom" && (
                <div className="mt-4">
                  <Label htmlFor="monthly-custom-amount">Monto personalizado</Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                    <Input
                      id="monthly-custom-amount"
                      type="number"
                      min="1"
                      placeholder="Ingresa un monto"
                      value={monthlyCustomAmount}
                      onChange={handleCustomAmountChange}
                      className="pl-8"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <Label>Selecciona un proyecto (opcional)</Label>
              <RadioGroup value={monthlyProject} onValueChange={handleProjectChange} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="any" id="monthly-project-any" />
                  <Label htmlFor="monthly-project-any" className="cursor-pointer">
                    Donde más se necesite
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="water" id="monthly-project-water" />
                  <Label htmlFor="monthly-project-water" className="cursor-pointer">
                    Agua Limpia
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="education" id="monthly-project-education" />
                  <Label htmlFor="monthly-project-education" className="cursor-pointer">
                    Educación para Todos
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="health" id="monthly-project-health" />
                  <Label htmlFor="monthly-project-health" className="cursor-pointer">
                    Salud Comunitaria
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monthly-first-name">Nombre</Label>
                  <Input id="monthly-first-name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="monthly-last-name">Apellido</Label>
                  <Input id="monthly-last-name" placeholder="Tu apellido" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthly-email">Correo electrónico</Label>
                <Input id="monthly-email" type="email" placeholder="tu@email.com" />
              </div>
            </div>

            <Button
              className="w-full"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                alert("¡Gracias por tu suscripción mensual! En un entorno real, procesaríamos tu pago de forma segura.")
              }}
            >
              Suscribirse mensualmente
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Tu donación mensual puede ser cancelada en cualquier momento. Recibirás un recibo por cada pago.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

