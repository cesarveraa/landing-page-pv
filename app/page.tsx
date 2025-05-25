import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Users, Briefcase, Mail, MapPin, ExternalLink, Crown, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PavelVeraLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Pavel Vera</h1>
              <h2 className="text-xl lg:text-2xl mb-6 font-medium">
                Maestro FIDE de Ajedrez Profesional
                <br />
                Representante de Bolivia
              </h2>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
                <p className="text-lg font-semibold">ELO Estándar: 2211 | Rapid: 2115 | Blitz: 2109</p>
              </div>
              <Link href="https://ratings.fide.com/profile/3304779" target="_blank">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3">
                  <Crown className="mr-2 h-5 w-5" />
                  Desafíame a una partida
                </Button>
              </Link>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Pavel Vera - Maestro FIDE"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-white shadow-2xl"
                />
                <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-bold">
                  FIDE Master
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Sobre mí</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde niño, el ajedrez ha sido mi pasión y mi escuela de estrategia. Como Maestro FIDE representando a
              Bolivia, he competido en torneos internacionales desarrollando un pensamiento analítico que ahora aplico
              en mi formación en Marketing en la Universidad Católica Boliviana (La Paz). Mi experiencia liderando
              campañas para empresas de todos los tamaños me ha enseñado que tanto en el tablero como en el mundo
              empresarial, la estrategia y la visión a largo plazo son clave para el éxito.
            </p>
          </div>
        </div>
      </section>

      {/* Logros Destacados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Logros Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                <CardTitle className="text-lg">ELO Estándar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">2211</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Crown className="h-12 w-12 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Campeón Nacional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Juvenil 2020</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Torneos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Mundial Juvenil
                  <br />
                  Open Internacional
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Marketing UCB</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  PYMEs a grandes
                  <br />
                  corporaciones
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clases y Entrenamiento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Clases y Entrenamiento</h2>
              <p className="text-xl text-gray-700">¿Quieres llevar tu ajedrez al siguiente nivel?</p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Solicitar Clase Personalizada
                </CardTitle>
                <CardDescription>Entrena con un Maestro FIDE y mejora tu juego estratégico</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="nivel">Nivel de juego</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu nivel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="novato">Novato</SelectItem>
                        <SelectItem value="intermedio">Intermedio</SelectItem>
                        <SelectItem value="avanzado">Avanzado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea id="mensaje" placeholder="Cuéntame sobre tus objetivos en el ajedrez..." rows={3} />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Solicitar Clase</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios de Marketing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Servicios de Marketing</h2>
              <p className="text-xl text-gray-700">
                Combino mi experiencia en ajedrez y marketing para potenciar tu marca
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle>Estrategias de Posicionamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Desarrollo estrategias digitales pensadas a largo plazo, como las mejores jugadas en ajedrez.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-8 w-8 text-yellow-500 mb-2" />
                  <CardTitle>Gestión de Redes Sociales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Manejo integral de redes sociales con contenido estratégico y engagement auténtico.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Campañas Publicitarias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Experiencia comprobada en UCB La Paz gestionando campañas para empresas de todos los tamaños.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y QR */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contacto</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <Link href="mailto:pavel.vera@chessbo.org" className="text-lg hover:underline">
                    pavel.vera@chessbo.org
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  <Link href="https://www.linkedin.com/in/vpavel" target="_blank" className="text-lg hover:underline">
                    LinkedIn: Vera Pavel
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  <Link
                    href="https://ratings.fide.com/profile/3304779"
                    target="_blank"
                    className="text-lg hover:underline"
                  >
                    Perfil FIDE Oficial
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-lg">La Paz, Bolivia</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="QR Code - Perfil FIDE Pavel Vera"
                    width={150}
                    height={150}
                    className="mx-auto mb-3"
                  />
                  <p className="text-sm text-gray-600">Escanea para ver mi perfil FIDE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© Pavel Vera 2025 | Web by v0</p>
            <div className="flex gap-6">
              <Link href="mailto:pavel.vera@chessbo.org" className="hover:text-gray-300">
                Email
              </Link>
              <Link href="https://www.linkedin.com/in/vpavel" target="_blank" className="hover:text-gray-300">
                LinkedIn
              </Link>
              <Link href="https://ratings.fide.com/profile/3304779" target="_blank" className="hover:text-gray-300">
                FIDE
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
