import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Building2, Users, Shield } from "lucide-react";

export default function DashboardViewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent">
      {/* Header */}
      <div className="border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center">
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
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Pages de Démonstration</h1>
            <p className="text-lg text-muted-foreground">Accédez aux différents dashboards</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Company Dashboard */}
            <Link href="/dashboard/company">
              <a className="group">
                <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/50 transition-all h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Dashboard Entreprise</h2>
                    <p className="text-sm text-muted-foreground mb-4">Parcourez et contactez les influenceurs</p>
                  </div>
                  <Button className="w-full">Voir le dashboard</Button>
                </div>
              </a>
            </Link>

            {/* Influencer Dashboard */}
            <Link href="/dashboard/influencer">
              <a className="group">
                <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/50 transition-all h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Dashboard Influenceur</h2>
                    <p className="text-sm text-muted-foreground mb-4">Gérez votre profil et découvrez d'autres créateurs</p>
                  </div>
                  <Button className="w-full">Voir le dashboard</Button>
                </div>
              </a>
            </Link>

            {/* Admin Dashboard */}
            <Link href="/admin/dashboard">
              <a className="group">
                <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/50 transition-all h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Dashboard Admin</h2>
                    <p className="text-sm text-muted-foreground mb-4">Gérez la plateforme et les utilisateurs</p>
                  </div>
                  <Button className="w-full">Voir le dashboard</Button>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
