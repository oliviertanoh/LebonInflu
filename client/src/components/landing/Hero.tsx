import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Heart, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-6 max-w-2xl lg:max-w-none mx-auto text-center lg:text-left">
            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 bg-white/50 backdrop-blur border-primary/20 text-primary px-4 py-1.5 text-sm font-medium rounded-full shadow-sm">
              <span className="mr-2">🇫🇷</span> Le n°1 du marketing local
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-foreground leading-[1.15]">
              Trouvez des influenceurs <br className="hidden lg:block"/>
              <span className="text-primary relative inline-block">
                locaux
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> en quelques minutes.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Par ville, par niche, par budget. Contact direct avec les meilleurs créateurs de votre région. Simple, transparent et sans frais cachés.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
              <Link href="/auth/register" className="w-full sm:w-auto">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 w-full">
                  Trouver un influenceur
                </Button>
              </Link>
              <Link href="/auth/register" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/50 backdrop-blur w-full hover:bg-white/80">
                  Je suis influenceur
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start mt-8 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  +2k
                </div>
              </div>
              <p>Rejoignez 2,000+ entreprises locales</p>
            </div>
          </div>

          {/* Right Column: Mockup */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none perspective-[1000px]">
             {/* Mockup Container */}
             <motion.div 
               initial={{ opacity: 0, y: 20, rotateY: -5 }}
               animate={{ opacity: 1, y: 0, rotateY: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative z-10 flex flex-col gap-4"
             >
                {/* Floating Card 1 */}
                <InfluencerCard 
                  name="Marie L."
                  handle="@marie_foodies"
                  niche="Food & Restos"
                  location="Nantes"
                  stats={{ followers: "12k", engagement: "4.8%" }}
                  price="80€"
                  image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                  tags={["Reels", "TikTok"]}
                  highlight
                />
                
                {/* Floating Card 2 (Offset) */}
                <div className="lg:ml-12 opacity-90 scale-95">
                  <InfluencerCard 
                    name="Thomas Fit"
                    handle="@thomas_coach"
                    niche="Sport & Bien-être"
                    location="Paris 11e"
                    stats={{ followers: "45k", engagement: "3.2%" }}
                    price="150€"
                    image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                    tags={["Coaching", "Story"]}
                  />
                </div>

                {/* Floating Card 3 (Offset more) */}
                <div className="lg:ml-24 opacity-80 scale-90">
                  <InfluencerCard 
                    name="Chloé Style"
                    handle="@chloe_mode"
                    niche="Lifestyle & Mode"
                    location="Lyon"
                    stats={{ followers: "8.5k", engagement: "6.1%" }}
                    price="60€"
                    image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    tags={["UGC", "Haul"]}
                  />
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfluencerCard({ name, handle, niche, location, stats, price, image, tags, highlight = false }: any) {
  return (
    <div className={`bg-card rounded-2xl p-4 shadow-xl border border-border/50 transition-all hover:shadow-2xl hover:-translate-y-1 ${highlight ? 'ring-2 ring-primary/20 shadow-primary/10' : ''}`}>
      <div className="flex gap-4">
        <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-primary fill-current" />
            </div>
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-foreground text-lg leading-tight">{name}</h3>
                    <p className="text-muted-foreground text-sm truncate">{handle}</p>
                </div>
                <Badge variant="secondary" className="font-bold text-primary bg-primary/10 hover:bg-primary/20 border-0">
                    dès {price}
                </Badge>
            </div>
            
            <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{location}</span>
                </div>
                <div className="w-1 h-1 bg-border rounded-full" />
                <span>{niche}</span>
            </div>
        </div>
      </div>

      <hr className="my-4 border-border/50" />

      <div className="flex items-center justify-between">
         <div className="flex gap-4">
            <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Abonnés</span>
                <span className="font-bold text-foreground">{stats.followers}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Engagement</span>
                <span className="font-bold text-green-600">{stats.engagement}</span>
            </div>
         </div>
         <div className="flex gap-2">
            {tags.map((tag: string) => (
                <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md font-medium text-muted-foreground">
                    #{tag}
                </span>
            ))}
         </div>
      </div>
    </div>
  )
}
