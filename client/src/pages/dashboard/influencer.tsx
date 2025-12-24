import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { MapPin, MessageCircle, Search, Edit2, BarChart3, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  },
];

export default function InfluencerDashboard() {
  const [activeTab, setActiveTab] = useState("my-profile");
  const [searchInfluencers, setSearchInfluencers] = useState("");
  const [profileVisible, setProfileVisible] = useState(true);

  const filteredInfluencers = mockInfluencers.filter(inf =>
    inf.name.toLowerCase().includes(searchInfluencers.toLowerCase())
  );

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
            <span className="text-sm font-medium">Connecté en tant qu'Influenceur</span>
            <Button variant="ghost" size="sm">Déconnexion</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-2 mb-8">
            <TabsTrigger value="my-profile">Mon Profil</TabsTrigger>
            <TabsTrigger value="discover">Découvrir d'autres créateurs</TabsTrigger>
          </TabsList>

          {/* Tab 1: My Profile */}
          <TabsContent value="my-profile" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-3xl shadow-lg border border-border/50 overflow-hidden">
                  {/* Cover */}
                  <div className="h-40 bg-gradient-to-r from-primary to-primary/50"></div>

                  {/* Content */}
                  <div className="px-8 pb-8">
                    <div className="flex items-start justify-between -mt-24 mb-6 relative z-10">
                      <div className="w-32 h-32 rounded-2xl border-4 border-white bg-muted overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Button className="mt-4">
                        <Edit2 className="w-4 h-4 mr-2" />
                        Modifier le profil
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold">Marie L. (@marie_foodies)</h2>
                        <p className="text-muted-foreground">Nantes • Food & Restos</p>
                      </div>

                      <p className="text-foreground">Foodie passionnée par les restaurants locaux et la découverte culinaire.</p>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-muted p-4 rounded-lg text-center">
                          <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">TikTok</p>
                          <p className="text-2xl font-bold">12k</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg text-center">
                          <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Engagement</p>
                          <p className="text-2xl font-bold text-green-600">4.8%</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg text-center">
                          <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Demandes</p>
                          <p className="text-2xl font-bold">12</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3">Formats & Prix</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Story</p>
                            <p className="text-2xl font-bold text-primary">60€</p>
                          </div>
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Post / Reel</p>
                            <p className="text-2xl font-bold text-primary">80€</p>
                          </div>
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Vidéo longue</p>
                            <p className="text-2xl font-bold text-primary">150€</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3">Visibilité du profil</h3>
                        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                          <div>
                            <p className="font-medium">Profil visible pour les entreprises</p>
                            <p className="text-sm text-muted-foreground">Les marques peuvent vous trouver et vous contacter</p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setProfileVisible(!profileVisible)}
                            data-testid="button-toggle-visibility"
                          >
                            {profileVisible ? (
                              <>
                                <Eye className="w-4 h-4 mr-2" />
                                Visible
                              </>
                            ) : (
                              <>
                                <EyeOff className="w-4 h-4 mr-2" />
                                Caché
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <h3 className="font-bold">Statistiques</h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Visites ce mois</span>
                      <span className="font-bold">234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Demandes</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Collaborations</span>
                      <span className="font-bold">5</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                  <h3 className="font-bold mb-2">💡 Conseil</h3>
                  <p className="text-sm text-muted-foreground">Complétez votre portfolio pour augmenter vos chances de collaboration.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Discover Other Influencers */}
          <TabsContent value="discover" className="space-y-6">
            <div className="bg-card rounded-2xl p-4 shadow-lg border border-border/50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Rechercher des créateurs..."
                  value={searchInfluencers}
                  onChange={(e) => setSearchInfluencers(e.target.value)}
                  className="pl-10 h-11 bg-background border-input/50"
                  data-testid="input-search-influencers"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInfluencers.map((inf) => (
                <div key={inf.id} className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-xl transition-all">
                  <div className="h-40 bg-muted overflow-hidden">
                    <img 
                      src={inf.image}
                      alt={inf.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-bold">{inf.name}</h3>
                      <p className="text-sm text-muted-foreground">{inf.handle}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{inf.location} • {inf.niche}</p>
                    <div className="flex gap-2 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Followers</p>
                        <p className="font-bold">{inf.followers}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Engagement</p>
                        <p className="font-bold text-green-600">{inf.engagement}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {inf.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
