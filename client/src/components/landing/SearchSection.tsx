import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SearchSection() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl shadow-lg border border-border/50 p-6 md:p-8 max-w-5xl mx-auto">
            <div className="flex flex-col gap-6">
                
                {/* Search Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold font-display">Recherche simple</h2>
                        <p className="text-muted-foreground text-sm">Trouvez la perle rare sans perdre de temps</p>
                    </div>
                    <Badge variant="outline" className="w-fit bg-primary/5 text-primary border-primary/20">
                        <span className="mr-1.5">⚡️</span> 450+ nouveaux profils cette semaine
                    </Badge>
                </div>

                {/* Filters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Ville</label>
                        <Select>
                            <SelectTrigger className="bg-background border-input/50 h-11">
                                <SelectValue placeholder="Toute la France" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="paris">Paris</SelectItem>
                                <SelectItem value="lyon">Lyon</SelectItem>
                                <SelectItem value="marseille">Marseille</SelectItem>
                                <SelectItem value="nantes">Nantes</SelectItem>
                                <SelectItem value="bordeaux">Bordeaux</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Niche</label>
                        <Select>
                            <SelectTrigger className="bg-background border-input/50 h-11">
                                <SelectValue placeholder="Toutes les niches" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="food">Food & Restaurant</SelectItem>
                                <SelectItem value="sport">Sport & Fitness</SelectItem>
                                <SelectItem value="fashion">Mode & Lifestyle</SelectItem>
                                <SelectItem value="beauty">Beauté</SelectItem>
                                <SelectItem value="tech">High-Tech</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium text-muted-foreground">Budget max</label>
                            <span className="text-xs font-bold text-primary">500€</span>
                        </div>
                        <div className="h-11 flex items-center px-2 bg-background border border-input/50 rounded-md">
                             <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground hidden md:block">&nbsp;</label>
                        <Button className="w-full h-11 text-base shadow-md">
                            <Search className="w-4 h-4 mr-2" />
                            Rechercher
                        </Button>
                    </div>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 items-center pt-2">
                    <span className="text-sm font-medium text-muted-foreground mr-2">Populaire :</span>
                    {["Instagram", "TikTok", "UGC", "YouTube Shorts", "Micro-influenceur"].map((chip) => (
                        <Badge key={chip} variant="secondary" className="hover:bg-muted cursor-pointer font-normal">
                            {chip}
                        </Badge>
                    ))}
                </div>

                <div className="text-center pt-2">
                     <p className="text-sm text-muted-foreground">
                        ✨ Pas d’agence, pas de blabla : vous contactez <strong className="text-foreground">directement</strong> les créateurs.
                     </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
