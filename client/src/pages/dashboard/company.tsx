import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { MapPin, MessageCircle, Search, Filter, Heart } from "lucide-react";
import { useState } from "react";

// Mock data
const mockInfluencers = [
  {
    id: 1,
    name: "Marie L.",
    handle: "@marie_foodies",
    niche: "Food & Restos",
    location: "Nantes",
    followers: "12k",
    engagement: "4.8%",
    price: "80€",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    tags: ["Reels", "TikTok"],
    bio: "Foodie passionnée par les restaurants locaux"
  },
  {
    id: 2,
    name: "Thomas Fit",
    handle: "@thomas_coach",
    niche: "Sport & Bien-être",
    location: "Paris 11e",
    followers: "45k",
    engagement: "3.2%",
    price: "150€",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    tags: ["Coaching", "Story"],
    bio: "Coach fitness & créateur UGC"
  },
  {
    id: 3,
    name: "Chloé Style",
    handle: "@chloe_mode",
    niche: "Lifestyle & Mode",
    location: "Lyon",
    followers: "8.5k",
    engagement: "6.1%",
    price: "60€",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    tags: ["UGC", "Haul"],
    bio: "Créatrice de contenu mode et lifestyle"
  },
  {
    id: 4,
    name: "Laurent Tech",
    handle: "@laurent_reviews",
    niche: "Tech",
    location: "Bordeaux",
    followers: "23k",
    engagement: "5.2%",
    price: "120€",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    tags: ["Reviews", "Unboxing"],
    bio: "Critiques de produits tech"
  },
  {
    id: 5,
    name: "Sophie Beauté",
    handle: "@sophie_makeup",
    niche: "Beauté",
    location: "Marseille",
    followers: "35k",
    engagement: "7.3%",
    price: "100€",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    tags: ["Makeup", "Tutorial"],
    bio: "Makeup artist & beauty influencer"
  },
  {
    id: 6,
    name: "Alex Voyage",
    handle: "@alex_travels",
    niche: "Voyage",
    location: "Nice",
    followers: "18k",
    engagement: "4.5%",
    price: "90€",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    tags: ["Travel", "Stories"],
    bio: "Découverte des plus beaux endroits"
  }
];

export default function CompanyDashboard() {
  const [filters, setFilters] = useState({
    search: "",
    niche: "",
    city: ""
  });
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredInfluencers = mockInfluencers.filter(inf => {
    const matchSearch = inf.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                       inf.handle.toLowerCase().includes(filters.search.toLowerCase());
    const matchNiche = !filters.niche || inf.niche.includes(filters.niche);
    const matchCity = !filters.city || inf.location.includes(filters.city);
    return matchSearch && matchNiche && matchCity;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
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
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Connecté en tant qu'Entreprise</span>
            <Button variant="ghost" size="sm">Déconnexion</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search & Filters */}
        <div className="bg-card rounded-3xl p-6 shadow-lg border border-border/50 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Rechercher</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Nom, pseudo..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-10 h-11 bg-background border-input/50"
                  data-testid="input-search"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Niche</label>
                <Select value={filters.niche} onValueChange={(value) => setFilters(prev => ({ ...prev, niche: value }))}>
                  <SelectTrigger className="h-11 bg-background border-input/50" data-testid="select-niche">
                    <SelectValue placeholder="Toutes les niches" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Toutes les niches</SelectItem>
                    <SelectItem value="Food">Food & Restos</SelectItem>
                    <SelectItem value="Sport">Sport & Bien-être</SelectItem>
                    <SelectItem value="Mode">Lifestyle & Mode</SelectItem>
                    <SelectItem value="Tech">Tech</SelectItem>
                    <SelectItem value="Beauté">Beauté</SelectItem>
                    <SelectItem value="Voyage">Voyage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ville</label>
                <Select value={filters.city} onValueChange={(value) => setFilters(prev => ({ ...prev, city: value }))}>
                  <SelectTrigger className="h-11 bg-background border-input/50" data-testid="select-city">
                    <SelectValue placeholder="Toutes les villes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Toutes les villes</SelectItem>
                    <SelectItem value="Paris">Paris</SelectItem>
                    <SelectItem value="Lyon">Lyon</SelectItem>
                    <SelectItem value="Nantes">Nantes</SelectItem>
                    <SelectItem value="Bordeaux">Bordeaux</SelectItem>
                    <SelectItem value="Marseille">Marseille</SelectItem>
                    <SelectItem value="Nice">Nice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground text-sm">
            {filteredInfluencers.length} influenceur(s) trouvé(s)
          </p>
        </div>

        {/* Influencer Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInfluencers.map((influencer) => (
            <div key={influencer.id} className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-xl transition-all group">
              {/* Header with Favorite */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={influencer.image} 
                  alt={influencer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(influencer.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
                  data-testid={`button-favorite-${influencer.id}`}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(influencer.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">{influencer.name}</h3>
                  <p className="text-muted-foreground text-sm">{influencer.handle}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{influencer.niche}</span>
                  <span className="text-muted-foreground">{influencer.location}</span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{influencer.bio}</p>

                <div className="flex gap-3 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Abonnés</p>
                    <p className="font-bold">{influencer.followers}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Engagement</p>
                    <p className="font-bold text-green-600">{influencer.engagement}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold">À partir de</p>
                    <p className="font-bold text-primary">{influencer.price}</p>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {influencer.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full" size="sm" data-testid={`button-contact-${influencer.id}`}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contacter
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredInfluencers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun influenceur ne correspond à vos critères.</p>
          </div>
        )}
      </div>
    </div>
  );
}
