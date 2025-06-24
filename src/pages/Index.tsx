import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  Sparkles,
  Palette,
  Layers,
  Zap,
  Users,
  TrendingUp,
  Eye,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const skills = [
    "Diseño UI/UX",
    "Estrategia de Producto",
    "Sistemas de Diseño",
    "Investigación de Usuarios",
    "Prototipado",
    "Figma",
    "Sketch",
    "Adobe Creative Suite",
  ];

  const stats = [
    { label: "Años de Experiencia", value: "5+", icon: TrendingUp },
    { label: "Proyectos Completados", value: "120+", icon: Layers },
    { label: "Clientes Felices", value: "50+", icon: Users },
    { label: "Premios de Diseño", value: "8", icon: Sparkles },
  ];

  const features = [
    {
      icon: Palette,
      title: "Visión Creativa",
      description:
        "Me encanta explorar la intersección entre lógica y creatividad, donde la ingeniería se encuentra con la estética para dar forma a ideas que resuelven problemas reales.",
    },
    {
      icon: Users,
      title: "Centrado en el Usuario",
      description:
        "Aquí podrás descubrir una colección de ideas hechas realidad, nacidas desde mi estudio —el laboratorio donde la intuición, la razón y la pasión se fusionan.",
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description:
        "Flujo de trabajo eficiente que garantiza la finalización oportuna de los proyectos",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar className="glass" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Eye className="w-3 h-3 mr-1" />
                  Disponible para nuevos proyectos
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                  Mi nombre es,
                  <span className="block gradient-text">FRANCO LI</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Soy Diseñador de Productos y me encanta crear experiencias
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.slice(0, 4).map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 transition-colors group"
                >
                  Ver mi trabajo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Ponerse en contacto
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative animate-fade-in">
              <div className="relative">
                {/* Main Profile Card */}
                <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                  <div className="relative aspect-[4/5]">
                    <img
                      src="/franco.png"
                      alt="Franco Li"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                    <div className="relative p-8 flex items-end h-full">
                      <div className="w-full">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                          <h3 className="font-semibold text-lg">Franco Li</h3>
                          <p className="text-white/90">Diseñador de Producto</p>
                          <p className="text-white/80 text-sm mt-1">Lima, Pe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 animate-float">
                  <Card className="p-4 bg-white shadow-lg border-0">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          Calificación 5.0
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Reseñas de Clientes
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-display font-bold leading-tight">
                Bienvenidos!
              </h2>
              <p className="mt-4 text-muted-foreground">
                Soy Franco Li Garrido, Una mente curiosa, aventurera y
                apasionada por la innovación.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {features.slice(0, 2).map((feature) => (
                <div key={feature.title}>
                  <div className="p-4 inline-block bg-gray-100 rounded-lg">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              ¿Listo para crear algo increíble?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Colaboremos y demos vida a tu visión con un diseño excepcional que
              los usuarios amen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className=" text-black  ">
                <Mail className="w-5 h-5 mr-2" />
                Iniciar un Proyecto
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Ver Portafolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl gradient-text">
                Franco Li
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-3">
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                © 2025 Franco Li. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
