import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, MapPin, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Comment ça marche", href: "#how-it-works" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Pour les influenceurs", href: "#for-influencers" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              Lebon<span className="text-primary">Influ</span>
            </span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="font-medium">
              Se connecter
            </Button>
            <Button className="font-medium shadow-lg shadow-primary/20">
              Créer un compte
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full justify-center">
                    Se connecter
                  </Button>
                  <Button className="w-full justify-center">
                    Créer un compte
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
