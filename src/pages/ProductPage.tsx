import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Menu } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const ProductPage = () => {
  const products = [
    {
      title: "Madera",
      description: "Madera",
      image: "/PITCH 1_page-0004.jpg",
      category: "Madera",
      nextUp: "Crucios",
    },
    {
      title: "Madera",
      description: "Madera",
      image: "/PITCH 1_page-0005.jpg",
      category: "Metal",
      nextUp: "Fierro",
    },
    {
      title: "Fierro",
      description: "Fierro",
      image: "/PITCH 1_page-0006.jpg",
      category: "Fierro",
      nextUp: "Plastico",
    },
    {
      title: "Plastico",
      description: "Estructura de alambre de acero",
      image: "/PITCH 1_page-0007.jpg",
      category: "Plastico",
      nextUp: "Moco",
    },
    {
      title: "Moco",
      description: "Moco",
      image: "/PITCH 1_page-0008.jpg",
      category: "Moco",
      nextUp: "Ventana",
    },
    {
      title: "Ventana",
      description: "Ventana",
      image: "/PLANOS ISOMETRICOS MODULO 24_page-0001.jpg",
      category: "Ventana",
      nextUp: "Sol",
    },
    {
      title: "Sol",
      description: "Sol",
      image: "/RENDER 2 (2).png",
      category: "Sol",
      nextUp: "Sol",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-black overflow-hidden">
      <Navbar className="bg-transparent" />

      <Carousel className="w-full h-screen">
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="relative w-full h-screen">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-1/4 left-8 text-left">
                <h1 className="text-8xl font-bold lowercase">
                  {product.title}
                </h1>
              </div>

              <div className="absolute top-1/2 left-48 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-start text-left space-y-4">
                <Card className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gray-200">
                      <img
                        src="/fierro.jpg"
                        alt={product.category}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between flex-grow">
                      <div>
                        <h4 className="font-bold">{product.category}</h4>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-black"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/4 space-y-2 text-left">
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-sm text-gray-500">Test</p>
              </div>

              <div className="absolute bottom-1/4 right-8 transform translate-y-1/2">
                <Card className="bg-gray-100/80 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-24 h-24 bg-white">
                      <img
                        src="/fierro.jpg"
                        alt={product.nextUp}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Siguiente</p>
                      <h4 className="font-bold">{product.nextUp}</h4>
                      <p className="text-xs text-gray-500">Test</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 right-8 flex items-center">
          <CarouselPrevious className="relative -left-0 top-auto" />
          <CarouselNext className="relative -left-0 top-auto" />
        </div>

        <div className="absolute left-8 bottom-8 flex items-center space-x-2">
          <span className="text-gray-400 text-sm">01</span>
          <div className="w-16 h-px bg-gray-400" />
          <span className="text-gray-400 text-sm">03</span>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductPage;
