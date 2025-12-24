import { Check, ShieldCheck, Zap, Euro } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Local & Rapide",
      description: "Trouvez quelqu'un qui habite vraiment dans votre ville et peut venir dans votre établissement."
    },
    {
      icon: Euro,
      title: "Tarifs Transparents",
      description: "Fini les devis obscurs. Les prix de départ sont affichés sur chaque profil pour éviter les surprises."
    },
    {
      icon: ShieldCheck,
      title: "Vrais Profils",
      description: "Nous vérifions manuellement chaque profil pour garantir des audiences authentiques (pas de faux abonnés)."
    },
    {
      icon: Check,
      title: "Simple comme une annonce",
      description: "Pas de contrat complexe imposé par la plateforme. Vous gérez votre collaboration librement."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
                 <div className="grid sm:grid-cols-2 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-background p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                 </div>
            </div>

            <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Pourquoi choisir <span className="text-primary">LebonInflu</span> ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Les grosses agences d'influence ne sont pas adaptées aux commerçants et artisans locaux. Trop chères, trop compliquées, trop déconnectées.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Nous avons créé l'outil que nous aurions aimé avoir pour promouvoir nos propres business locaux.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
