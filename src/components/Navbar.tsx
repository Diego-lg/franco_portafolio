import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl gradient-text">
              PORTAFOLIO
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#work"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Trabajo
            </a>
            <a
              href="/product"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Producto
            </a>
            <a
              href="/#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="/#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </a>
            <Button
              size="sm"
              className="bg-black hover:bg-gray-800 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Currículum
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
