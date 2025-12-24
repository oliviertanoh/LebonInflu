import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function ForInfluencers() {
  return (
    <section id="for-influencers" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span>Espace Créateurs</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                    Monétisez votre audience locale simplement.
                </h2>
                
                <div className="space-y-6 text-slate-300 text-lg">
                    <p>
                        Vous avez une communauté engagée à Nantes, Bordeaux ou Lille ? 
                        Les commerces de votre ville cherchent des gens comme vous.
                    </p>
                    <ul className="space-y-3">
                        {["Créez votre profil en 2 minutes", "Fixez vos propres tarifs", "Recevez des demandes directes", "0% de commission sur vos collabs"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <Button size="lg" className="h-14 px-8 text-lg bg-white text-slate-900 hover:bg-white/90">
                    Créer mon profil influenceur
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>

            <div className="flex-1 w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                        <div>
                            <div className="h-3 w-32 bg-white/20 rounded mb-2" />
                            <div className="h-2 w-20 bg-white/10 rounded" />
                        </div>
                    </div>
                    <div className="space-y-3 mb-6">
                        <div className="h-2 w-full bg-white/10 rounded" />
                        <div className="h-2 w-full bg-white/10 rounded" />
                        <div className="h-2 w-3/4 bg-white/10 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="h-20 bg-white/5 rounded-lg" />
                        <div className="h-20 bg-white/5 rounded-lg" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Recevoir une proposition</Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
