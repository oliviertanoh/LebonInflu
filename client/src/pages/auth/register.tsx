import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { MapPin, Building2, Users } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<"company" | "influencer" | null>(null);
  const [, setLocation] = useLocation();

  const handleContinue = () => {
    if (accountType === "company") {
      setLocation("/onboarding/company");
    } else if (accountType === "influencer") {
      setLocation("/onboarding/influencer");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center justify-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-foreground">
              Lebon<span className="text-primary">Influ</span>
            </span>
          </a>
        </Link>

        {/* Card */}
        <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-display font-bold">Création de compte</h1>
            <p className="text-muted-foreground">Quelle est votre profil ?</p>
          </div>

          <div className="space-y-4">
            {/* Company Option */}
            <button
              onClick={() => setAccountType("company")}
              className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                accountType === "company"
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border/50 bg-background hover:border-border hover:bg-muted/30"
              }`}
              data-testid="button-account-company"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Je suis une entreprise</h3>
                  <p className="text-sm text-muted-foreground">Restaurant, salon, boutique, événement...</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                  accountType === "company"
                    ? "border-primary bg-primary"
                    : "border-border/50"
                }`}>
                  {accountType === "company" && <div className="w-full h-full rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>}
                </div>
              </div>
            </button>

            {/* Influencer Option */}
            <button
              onClick={() => setAccountType("influencer")}
              className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                accountType === "influencer"
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border/50 bg-background hover:border-border hover:bg-muted/30"
              }`}
              data-testid="button-account-influencer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Je suis influenceur / créateur</h3>
                  <p className="text-sm text-muted-foreground">TikTok, Instagram, YouTube, UGC...</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                  accountType === "influencer"
                    ? "border-primary bg-primary"
                    : "border-border/50"
                }`}>
                  {accountType === "influencer" && <div className="w-full h-full rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>}
                </div>
              </div>
            </button>
          </div>

          {/* Continue Button */}
          <Button
            size="lg"
            className="w-full h-11 font-medium shadow-lg shadow-primary/20"
            disabled={!accountType}
            onClick={handleContinue}
            data-testid="button-continue"
          >
            Continuer
          </Button>

          {/* Login Link */}
          <div className="pt-4 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <Link href="/auth/login">
                <a className="text-primary font-semibold hover:underline" data-testid="link-login">
                  Se connecter
                </a>
              </Link>
            </p>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-xs text-muted-foreground text-center">
          En créant un compte, vous acceptez nos{" "}
          <a href="#" className="hover:text-foreground">conditions d'utilisation</a>
        </p>
      </div>
    </div>
  );
}
