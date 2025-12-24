import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Tarifs simples</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Commencez sans vous ruiner</h2>
          <p className="text-lg text-muted-foreground">Pas d'abonnement caché. Vous choisissez ce qui vous arrange.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            
            {/* Card 1: Gratuit */}
            <div className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm relative order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Découverte</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold tracking-tight">0€</span>
                    <span className="text-muted-foreground">/mois</span>
                </div>
                <p className="text-muted-foreground text-sm mb-8">Pour voir à quoi ressemble la plateforme.</p>
                <Button variant="outline" className="w-full mb-8">Explorer gratuitement</Button>
                
                <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Recherche illimitée</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Voir les profils (infos masquées)</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground/50">
                        <Check className="w-5 h-5 text-muted-foreground/50 shrink-0" />
                        <span className="line-through">Contacter les influenceurs</span>
                    </li>
                </ul>
            </div>

            {/* Card 2: Pass 30 Jours (Highlight) */}
            <div className="bg-background rounded-3xl p-8 border-2 border-primary shadow-2xl relative order-1 md:order-2 transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Le plus populaire
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-primary">Pass 30 Jours</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-extrabold tracking-tight">39€</span>
                    <span className="text-muted-foreground">HT</span>
                </div>
                <p className="text-muted-foreground text-sm mb-8">Accès complet et illimité pendant un mois. Idéal pour une campagne.</p>
                <Button size="lg" className="w-full mb-8 shadow-lg shadow-primary/20">Choisir le Pass</Button>
                
                <ul className="space-y-4 text-sm font-medium">
                    <li className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-1"><Check className="w-3.5 h-3.5 text-green-600" /></div>
                        <span>Contacts illimités</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-1"><Check className="w-3.5 h-3.5 text-green-600" /></div>
                        <span>Accès complet aux stats</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-1"><Check className="w-3.5 h-3.5 text-green-600" /></div>
                        <span>Sans engagement (stop quand vous voulez)</span>
                    </li>
                </ul>
            </div>

            {/* Card 3: Pay per contact */}
            <div className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm relative order-3">
                <h3 className="text-xl font-bold mb-2">À l'unité</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold tracking-tight">9€</span>
                    <span className="text-muted-foreground">/contact</span>
                </div>
                <p className="text-muted-foreground text-sm mb-8">Payez juste pour débloquer un numéro ou email.</p>
                <Button variant="outline" className="w-full mb-8">Choisir à l'unité</Button>
                
                <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Idéal pour un besoin ponctuel</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Accès à vie au contact débloqué</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                        <Info className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>Pas d'accès aux stats détaillées</span>
                    </li>
                </ul>
            </div>

        </div>

        <div className="mt-16 bg-card rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
                <h3 className="font-bold text-lg mb-1">Vous êtes influenceur / créateur ?</h3>
                <p className="text-muted-foreground text-sm">L'inscription est 100% gratuite pour vous. Soyez visible par les marques.</p>
            </div>
            <Button variant="secondary" className="whitespace-nowrap">Créer mon profil gratuit</Button>
        </div>
      </div>
    </section>
  );
}
