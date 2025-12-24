import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { MapPin, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function CompanyOnboardingPage() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    niche: "",
    phone: "",
    website: "",
    objective: ""
  });

  const [currentStep, setCurrentStep] = useState(1);

  const niches = [
    "Restaurant",
    "Bar / Café",
    "Salon de beauté",
    "Salle de sport",
    "Boutique mode",
    "Coiffeur",
    "Photographe",
    "Agence immobilière",
    "Événement",
    "Autre"
  ];

  const objectives = [
    "Augmenter la visibilité",
    "Générer des ventes",
    "Lancement de produit",
    "Community building",
    "Tester les partenariats"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  const isStepComplete = () => {
    if (currentStep === 1) return formData.name && formData.city;
    if (currentStep === 2) return formData.niche && formData.objective;
    if (currentStep === 3) return true;
    return false;
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
          <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="button-back">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step <= currentStep
                      ? "bg-primary text-white"
                      : "bg-border/50 text-muted-foreground"
                  }`}>
                    {step}
                  </div>
                  {step < 3 && <div className={`w-12 h-0.5 ${step < currentStep ? "bg-primary" : "bg-border/50"}`} />}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Étape {currentStep} sur 3
            </div>
          </div>

          {/* Card */}
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50">
            
            {/* Step 1: Info de base */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Parlez-nous de votre entreprise</h2>
                  <p className="text-muted-foreground">Ces infos nous aident à vous proposer les bons influenceurs.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom de l'entreprise *</label>
                    <Input
                      placeholder="Ex: Mon Restaurant"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-11 bg-background border-input/50"
                      data-testid="input-company-name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Ville *</label>
                    <Input
                      placeholder="Ex: Nantes"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="h-11 bg-background border-input/50"
                      data-testid="input-company-city"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Niche & Objectifs */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Votre secteur d'activité</h2>
                  <p className="text-muted-foreground">Cela nous aide à filtrer les profils les plus pertinents.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Secteur / Niche *</label>
                    <Select value={formData.niche} onValueChange={(value) => handleInputChange("niche", value)}>
                      <SelectTrigger className="h-11 bg-background border-input/50" data-testid="select-niche">
                        <SelectValue placeholder="Sélectionnez votre niche" />
                      </SelectTrigger>
                      <SelectContent>
                        {niches.map(niche => (
                          <SelectItem key={niche} value={niche}>{niche}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Objectif principal *</label>
                    <Select value={formData.objective} onValueChange={(value) => handleInputChange("objective", value)}>
                      <SelectTrigger className="h-11 bg-background border-input/50" data-testid="select-objective">
                        <SelectValue placeholder="Sélectionnez un objectif" />
                      </SelectTrigger>
                      <SelectContent>
                        {objectives.map(obj => (
                          <SelectItem key={obj} value={obj}>{obj}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Infos complémentaires */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Infos de contact (optionnel)</h2>
                  <p className="text-muted-foreground">Pour que les influenceurs vous retrouvent facilement.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input
                      placeholder="+33 6 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-11 bg-background border-input/50"
                      data-testid="input-phone"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Site web</label>
                    <Input
                      placeholder="https://monrestaurant.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="h-11 bg-background border-input/50"
                      data-testid="input-website"
                    />
                  </div>

                  <div className="bg-accent/30 border border-primary/20 rounded-2xl p-4">
                    <p className="text-sm"><strong>Récapitulatif :</strong></p>
                    <div className="mt-3 space-y-2 text-sm">
                      <p><strong>{formData.name}</strong> — {formData.city}</p>
                      <p>{formData.niche} • {formData.objective}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-8 pt-8 border-t border-border/50">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  data-testid="button-previous"
                >
                  Précédent
                </Button>
              )}
              <Button
                size="lg"
                className={`flex-1 shadow-lg shadow-primary/20 ${!isStepComplete() ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!isStepComplete()}
                onClick={handleContinue}
                data-testid="button-next"
              >
                {currentStep === 3 ? "Terminer" : "Continuer"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
