"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"

// This would normally come from your database
const donationData = [
  { name: "Agua Limpia", value: 35 },
  { name: "Educación", value: 25 },
  { name: "Salud", value: 20 },
  { name: "Alimentación", value: 15 },
  { name: "Infraestructura", value: 5 },
]

const monthlyData = [
  { name: "Ene", donaciones: 4000 },
  { name: "Feb", donaciones: 3000 },
  { name: "Mar", donaciones: 5000 },
  { name: "Abr", donaciones: 2780 },
  { name: "May", donaciones: 1890 },
  { name: "Jun", donaciones: 2390 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function DonationTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seguimiento de Donaciones</CardTitle>
        <CardDescription>Transparencia total: mira cómo se distribuyen las donaciones y su impacto.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="distribution" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="distribution">Distribución</TabsTrigger>
            <TabsTrigger value="monthly">Mensual</TabsTrigger>
          </TabsList>

          <TabsContent value="distribution" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donationData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {donationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Desglose de Donaciones</h4>
              <ul className="space-y-1">
                {donationData.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span>{item.name}</span>
                    </div>
                    <span>${(item.value * 1000).toString()}</span>

                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, "Donaciones"]} />
                  <Legend />
                  <Bar dataKey="donaciones" fill="#8884d8" name="Donaciones ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Resumen Mensual</h4>
              <p className="text-sm text-muted-foreground">Total recaudado en los últimos 6 meses: $19,060</p>
              <p className="text-sm text-muted-foreground">Promedio mensual: $3,177</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

