import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Users, Building2, TrendingUp, BarChart3, AlertCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminDashboard() {
  const [searchUsers, setSearchUsers] = useState("");
  const [filterType, setFilterType] = useState("");

  const mockUsers = [
    { id: 1, name: "Marie L.", type: "influencer", city: "Nantes", status: "active", followers: "12k" },
    { id: 2, name: "Restaurant XYZ", type: "company", city: "Paris", status: "active", followers: "-" },
    { id: 3, name: "Thomas Fit", type: "influencer", city: "Paris", status: "pending", followers: "45k" },
    { id: 4, name: "Salon Beauté", type: "company", city: "Lyon", status: "inactive", followers: "-" },
    { id: 5, name: "Chloé Style", type: "influencer", city: "Lyon", status: "active", followers: "8.5k" },
  ];

  const filteredUsers = mockUsers.filter(user => {
    const matchSearch = user.name.toLowerCase().includes(searchUsers.toLowerCase());
    const matchType = !filterType || filterType === "all" || user.type === filterType;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              Lebon<span className="text-primary">Influ</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Admin Panel</span>
            <Button variant="ghost" size="sm">Déconnexion</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase font-semibold mb-1">Utilisateurs</p>
                <p className="text-3xl font-bold">1,234</p>
              </div>
              <Users className="w-10 h-10 text-blue-500 opacity-20" />
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 12% ce mois</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase font-semibold mb-1">Entreprises</p>
                <p className="text-3xl font-bold">456</p>
              </div>
              <Building2 className="w-10 h-10 text-indigo-500 opacity-20" />
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 8% ce mois</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase font-semibold mb-1">Influenceurs</p>
                <p className="text-3xl font-bold">778</p>
              </div>
              <TrendingUp className="w-10 h-10 text-purple-500 opacity-20" />
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 15% ce mois</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase font-semibold mb-1">Collabs ce mois</p>
                <p className="text-3xl font-bold">89</p>
              </div>
              <BarChart3 className="w-10 h-10 text-green-500 opacity-20" />
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 22% ce mois</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-8">
            <TabsTrigger value="users">Gestion des utilisateurs</TabsTrigger>
            <TabsTrigger value="content">Modération</TabsTrigger>
            <TabsTrigger value="reports">Signalements</TabsTrigger>
          </TabsList>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-6">
            <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher un utilisateur..."
                    value={searchUsers}
                    onChange={(e) => setSearchUsers(e.target.value)}
                    className="pl-10 h-11 bg-background border-input/50"
                    data-testid="input-search-users"
                  />
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full md:w-48 h-11 bg-background border-input/50" data-testid="select-user-type">
                    <SelectValue placeholder="Tous les types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les types</SelectItem>
                    <SelectItem value="company">Entreprises</SelectItem>
                    <SelectItem value="influencer">Influenceurs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Users Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 font-semibold">Utilisateur</th>
                      <th className="text-left py-3 font-semibold">Type</th>
                      <th className="text-left py-3 font-semibold">Localisation</th>
                      <th className="text-left py-3 font-semibold">Statut</th>
                      <th className="text-left py-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="py-3">
                          <p className="font-medium">{user.name}</p>
                        </td>
                        <td className="py-3">
                          <Badge variant={user.type === "company" ? "secondary" : "outline"}>
                            {user.type === "company" ? "Entreprise" : "Influenceur"}
                          </Badge>
                        </td>
                        <td className="py-3">{user.city}</td>
                        <td className="py-3">
                          <Badge variant={
                            user.status === "active" ? "default" : user.status === "pending" ? "outline" : "secondary"
                          }>
                            {user.status === "active" ? "Actif" : user.status === "pending" ? "En attente" : "Inactif"}
                          </Badge>
                        </td>
                        <td className="py-3 flex gap-2">
                          <Button size="sm" variant="outline">Voir</Button>
                          <Button size="sm" variant="outline">Éditer</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Moderation */}
          <TabsContent value="content" className="space-y-6">
            <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-6">Contenus en attente de validation</h3>
              
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border border-border/50 rounded-lg p-4 flex justify-between items-center hover:bg-muted/30 transition-colors">
                    <div>
                      <p className="font-medium">Portfolio - Chloé Style</p>
                      <p className="text-sm text-muted-foreground">Vidéo TikTok ajoutée il y a 2h</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Refuser</Button>
                      <Button size="sm">Approuver</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports" className="space-y-6">
            <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-6">Signalements en attente</h3>
              
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="border border-red-200 bg-red-50 rounded-lg p-4 flex justify-between items-start">
                    <div className="flex gap-3 flex-1">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Profil suspect - Thomas F.</p>
                        <p className="text-sm text-muted-foreground">Signalé par: Utilisateur #4521</p>
                        <p className="text-sm text-muted-foreground mt-1">Raison: Compte potentiellement fake</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Ignorer</Button>
                      <Button size="sm" variant="destructive">Suspendre</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
