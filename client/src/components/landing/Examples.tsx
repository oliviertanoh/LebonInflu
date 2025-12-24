import { Play } from "lucide-react";

export function Examples() {
  const examples = [
    { niche: "Food", city: "Lyon", desc: "Dégustation burger", color: "bg-orange-100 text-orange-700" },
    { niche: "Sport", city: "Paris", desc: "Séance CrossFit", color: "bg-blue-100 text-blue-700" },
    { niche: "Mode", city: "Bordeaux", desc: "Haul friperie", color: "bg-pink-100 text-pink-700" },
    { niche: "Déco", city: "Nantes", desc: "Rénovation salon", color: "bg-green-100 text-green-700" },
    { niche: "Sortie", city: "Lille", desc: "Bar caché", color: "bg-purple-100 text-purple-700" },
    { niche: "Beauté", city: "Nice", desc: "Routine soin", color: "bg-rose-100 text-rose-700" },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-display font-bold mb-4">Exemples de réalisations</h2>
           <p className="text-muted-foreground">Ce que nos créateurs peuvent faire pour votre marque.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {examples.map((ex, i) => (
                <div key={i} className="group relative aspect-[9/16] bg-muted rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors" />
                    <img 
                      src={`https://images.unsplash.com/photo-${1610000000000 + i}?q=80&w=300&auto=format&fit=crop`} 
                      alt={ex.desc}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center">
                            <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm ${ex.color} mb-1 inline-block`}>
                            {ex.niche}
                        </span>
                        <p className="text-white text-xs font-medium truncate">{ex.desc}</p>
                        <p className="text-white/70 text-[10px]">{ex.city}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
