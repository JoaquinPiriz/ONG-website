"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export default function DonationForm() {
  const [amount, setAmount] = useState<string>("")
  const [customAmount, setCustomAmount] = useState<string>("")

  const handleAmountChange = (value: string) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount("custom")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Haz una donación</CardTitle>
        <CardDescription>
          Tu donación ayuda a financiar proyectos que tienen un impacto real en las comunidades.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="oneTime" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="oneTime">Única</TabsTrigger>
            <TabsTrigger value="monthly">Mensual</TabsTrigger>
          </TabsList>

          <TabsContent value="oneTime" className="space-y-6">
            <div className="space-y-4">
              <Label>Selecciona o ingresa un monto</Label>
              <RadioGroup value={amount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-4">
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

              {amount === "custom" && (
                <div className="mt-4">
                  <Label htmlFor="custom-amount">Monto personalizado</Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                    <Input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Ingresa un monto"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="pl-8"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <Label>Selecciona un proyecto (opcional)</Label>
              <RadioGroup defaultValue="any" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="any" id="project-any" />
                  <Label htmlFor="project-any">Donde más se necesite</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="water" id="project-water" />
                  <Label htmlFor="project-water">Agua Limpia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="education" id="project-education" />
                  <Label htmlFor="project-education">Educación para Todos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="health" id="project-health" />
                  <Label htmlFor="project-health">Salud Comunitaria</Label>
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

            <Button className="w-full">Donar ahora</Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Tu donación es segura y procesada con encriptación. Recibirás un recibo por correo electrónico.
            </p>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            {/* Similar content as oneTime but with monthly subscription messaging */}
            <div className="space-y-4">
              <Label>Selecciona o ingresa un monto mensual</Label>
              <RadioGroup defaultValue="25" className="grid grid-cols-3 gap-4">
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
            </div>

            <div className="space-y-4">
              <Label>Selecciona un proyecto (opcional)</Label>
              <RadioGroup defaultValue="any" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="any" id="monthly-project-any" />
                  <Label htmlFor="monthly-project-any">Donde más se necesite</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="water" id="monthly-project-water" />
                  <Label htmlFor="monthly-project-water">Agua Limpia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="education" id="monthly-project-education" />
                  <Label htmlFor="monthly-project-education">Educación para Todos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="health" id="monthly-project-health" />
                  <Label htmlFor="monthly-project-health">Salud Comunitaria</Label>
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

            <Button className="w-full">Suscribirse mensualmente</Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Tu donación mensual puede ser cancelada en cualquier momento. Recibirás un recibo por cada pago.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

