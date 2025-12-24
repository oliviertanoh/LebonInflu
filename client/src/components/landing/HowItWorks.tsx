import { Search, UserCheck, MessageCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "1. Cherchez",
      description: "Filtrez par ville, niche et budget pour trouver les profils qui correspondent à votre audience locale."
    },
    {
      icon: UserCheck,
      title: "2. Comparez",
      description: "Consultez les statistiques vérifiées, les exemples de publications et les tarifs en toute transparence."
    },
    {
      icon: MessageCircle,
      title: "3. Contactez",
      description: "Envoyez un message direct pour proposer votre collaboration. Pas d'intermédiaire, pas de commission."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-lg text-muted-foreground">Une mise en relation simple et directe, pensée pour les pros locaux.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-white border border-border/50 shadow-xl shadow-primary/5 flex items-center justify-center mb-6 transform transition-transform hover:scale-105 duration-300">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
