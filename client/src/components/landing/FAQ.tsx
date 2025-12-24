import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Est-ce que LebonInflu est une agence ?",
      answer: "Non, nous sommes une plateforme de mise en relation. Comme Leboncoin, nous connectons les gens. Vous gérez ensuite la relation, le contrat et le paiement directement avec l'influenceur, sans intermédiaire."
    },
    {
      question: "Comment sont vérifiés les influenceurs ?",
      answer: "Nous analysons manuellement chaque inscription. Nous vérifions le taux d'engagement, la qualité des commentaires et la localisation de l'audience pour éviter les 'faux influenceurs'."
    },
    {
      question: "Puis-je filtrer par ville précise ?",
      answer: "Oui ! C'est le cœur de notre concept. Vous pouvez chercher 'Nantes', 'Lyon 6ème', ou même par département."
    },
    {
      question: "Comment se passe le paiement ?",
      answer: "Le paiement de la prestation se fait directement entre vous et l'influenceur (virement, facture, etc.). Nous ne prenons aucune commission sur vos collaborations."
    },
    {
      question: "Puis-je voir des exemples de leurs posts ?",
      answer: "Bien sûr. Chaque profil influenceur contient un portfolio avec ses meilleures vidéos (Reels, TikToks) et photos."
    },
    {
      question: "Je suis influenceur, comment je fixe mes tarifs ?",
      answer: "Vous êtes libre ! Nous vous donnons des fourchettes recommandées selon votre nombre d'abonnés, mais c'est vous qui décidez de vos prix."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted-foreground">Tout ce que vous devez savoir avant de vous lancer.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
