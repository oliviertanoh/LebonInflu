import { MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="font-display font-bold text-xl tracking-tight">
                    Lebon<span className="text-primary">Influ</span>
                    </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    La première plateforme française dédiée au marketing d'influence local. Simple, direct, efficace.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                </div>
            </div>

            {/* Links */}
            <div className="col-span-1">
                <h4 className="font-bold mb-4">Plateforme</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground">Comment ça marche</a></li>
                    <li><a href="#" className="hover:text-foreground">Tarifs</a></li>
                    <li><a href="#" className="hover:text-foreground">Pour les influenceurs</a></li>
                    <li><a href="#" className="hover:text-foreground">Se connecter</a></li>
                </ul>
            </div>

            <div className="col-span-1">
                <h4 className="font-bold mb-4">Légal</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground">Mentions légales</a></li>
                    <li><a href="#" className="hover:text-foreground">CGU / CGV</a></li>
                    <li><a href="#" className="hover:text-foreground">Confidentialité</a></li>
                    <li><a href="#" className="hover:text-foreground">Contact</a></li>
                </ul>
            </div>

            <div className="col-span-1">
                <h4 className="font-bold mb-4">Villes populaires</h4>
                <div className="flex flex-wrap gap-2">
                    {["Paris", "Lyon", "Marseille", "Bordeaux", "Lille", "Nantes", "Toulouse", "Nice"].map(city => (
                        <span key={city} className="text-xs bg-background border border-border px-2 py-1 rounded text-muted-foreground">
                            {city}
                        </span>
                    ))}
                </div>
            </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} LebonInflu. Fait avec ❤️ en France.</p>
            <p>Pas d'affiliation avec Leboncoin. Juste de l'inspiration :)</p>
        </div>
      </div>
    </footer>
  );
}
