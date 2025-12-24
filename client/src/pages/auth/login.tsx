import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
            <h1 className="text-3xl font-display font-bold">Connexion</h1>
            <p className="text-muted-foreground">Accédez à votre compte LebonInflu</p>
          </div>

          <div className="space-y-4">
            {/* Google Button */}
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full h-12 border-2 hover:bg-muted flex items-center justify-center gap-3"
              data-testid="button-google-login"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-medium">Continuer avec Google</span>
            </Button>

            {/* Divider */}
            <div className="relative flex items-center gap-3">
              <div className="flex-1 h-px bg-border"></div>
              <span className="text-xs text-muted-foreground font-medium">OU</span>
              <div className="flex-1 h-px bg-border"></div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="vous@exemple.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 bg-background border-input/50"
                data-testid="input-email"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Mot de passe</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 bg-background border-input/50"
                  data-testid="input-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? "Masquer" : "Voir"}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              size="lg"
              className="w-full h-11 font-medium shadow-lg shadow-primary/20"
              data-testid="button-login"
            >
              Se connecter
            </Button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="pt-4 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Pas encore inscrit ?{" "}
              <Link href="/auth/register">
                <a className="text-primary font-semibold hover:underline" data-testid="link-register">
                  Créer un compte
                </a>
              </Link>
            </p>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-xs text-muted-foreground text-center">
          En vous connectant, vous acceptez nos{" "}
          <a href="#" className="hover:text-foreground">conditions d'utilisation</a>
        </p>
      </div>
    </div>
  );
}
