import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { MapPin, ArrowLeft, Plus, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

export default function InfluencerOnboardingPage() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    niche: "",
    bio: "",
    tiktok: "",
    instagram: "",
    youtube: "",
    portfolio: ["", "", ""],
    stats: {
      tiktokFollowers: "",
      instagramFollowers: "",
      engagement: ""
    },
    pricing: {
      story: "",
      post: "",
      video: ""
    }
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const availableTags = ["UGC", "Reels", "TikTok", "Stories", "Shorts", "Carousel", "Coaching", "Unboxing"];
  
  const niches = ["Food", "Sport", "Mode", "Beauté", "Tech", "Lifestyle", "Gaming", "Voyage", "Maison", "Autre"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStatsChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      stats: { ...prev.stats, [field]: value }
    }));
  };

  const handlePricingChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      pricing: { ...prev.pricing, [field]: value }
    }));
  };

  const handlePortfolioChange = (index: number, value: string) => {
    const newPortfolio = [...formData.portfolio];
    newPortfolio[index] = value;
    setFormData(prev => ({ ...prev, portfolio: newPortfolio }));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form submitted:", { ...formData, tags: selectedTags });
    }
  };

  const isStepComplete = () => {
    if (currentStep === 1) return formData.name && formData.city;
    if (currentStep === 2) return formData.niche && selectedTags.length > 0 && formData.bio;
    if (currentStep === 3) return true;
    if (currentStep === 4) return true;
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
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step <= currentStep
                      ? "bg-primary text-white"
                      : "bg-border/50 text-muted-foreground"
                  }`}>
                    {step}
                  </div>
                  {step < 4 && <div className={`w-12 h-0.5 ${step < currentStep ? "bg-primary" : "bg-border/50"}`} />}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Étape {currentStep} sur 4
            </div>
          </div>

          {/* Card */}
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50">
            
            {/* Step 1: Profil de base */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Votre profil</h2>
                  <p className="text-muted-foreground">Informations de base visibles par les marques.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom / Pseudo public *</label>
                    <Input
                      placeholder="Ex: Marie Foodie"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-11 bg-background border-input/50"
                      data-testid="input-influencer-name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Ville *</label>
                    <Input
                      placeholder="Ex: Nantes"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="h-11 bg-background border-input/50"
                      data-testid="input-influencer-city"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Niche & Bio */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Votre niche & spécialités</h2>
                  <p className="text-muted-foreground">Aidez les marques à vous trouver facilement.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Niche principale *</label>
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
                    <label className="block text-sm font-medium mb-2">Formats que vous proposez *</label>
                    <div className="flex flex-wrap gap-2">
                      {availableTags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`px-3 py-2 rounded-lg border transition-all font-medium text-sm ${
                            selectedTags.includes(tag)
                              ? "bg-primary text-white border-primary"
                              : "bg-background border-border hover:border-primary"
                          }`}
                          data-testid={`tag-${tag}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Bio courte *</label>
                    <Textarea
                      placeholder="Décrivez-vous en quelques mots... (max 150 caractères)"
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value.slice(0, 150))}
                      className="bg-background border-input/50 resize-none"
                      rows={3}
                      data-testid="textarea-bio"
                    />
                    <p className="text-xs text-muted-foreground mt-1">{formData.bio.length} / 150</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Réseaux & Portfolio */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Vos réseaux & portfolio</h2>
                  <p className="text-muted-foreground">Liens vers vos profils et exemples de travaux.</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">TikTok</label>
                      <Input
                        placeholder="@votreusername"
                        value={formData.tiktok}
                        onChange={(e) => handleInputChange("tiktok", e.target.value)}
                        className="h-11 bg-background border-input/50"
                        data-testid="input-tiktok"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Instagram</label>
                      <Input
                        placeholder="@votreusername"
                        value={formData.instagram}
                        onChange={(e) => handleInputChange("instagram", e.target.value)}
                        className="h-11 bg-background border-input/50"
                        data-testid="input-instagram"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">YouTube</label>
                      <Input
                        placeholder="votrech"
                        value={formData.youtube}
                        onChange={(e) => handleInputChange("youtube", e.target.value)}
                        className="h-11 bg-background border-input/50"
                        data-testid="input-youtube"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Portfolio (exemples de pubs)</label>
                    <p className="text-xs text-muted-foreground mb-3">3 liens vers vos meilleures vidéos/posts (URLs)</p>
                    {formData.portfolio.map((url, idx) => (
                      <Input
                        key={idx}
                        placeholder={`Lien ${idx + 1}`}
                        value={url}
                        onChange={(e) => handlePortfolioChange(idx, e.target.value)}
                        className="h-11 bg-background border-input/50 mb-3"
                        data-testid={`input-portfolio-${idx}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Stats & Tarifs */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Vos stats & tarifs</h2>
                  <p className="text-muted-foreground">Tous les champs sont optionnels pour le MVP.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Statistiques</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Followers TikTok</label>
                        <Input
                          placeholder="Ex: 12000"
                          type="number"
                          value={formData.stats.tiktokFollowers}
                          onChange={(e) => handleStatsChange("tiktokFollowers", e.target.value)}
                          className="h-11 bg-background border-input/50"
                          data-testid="input-tiktok-followers"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Followers Instagram</label>
                        <Input
                          placeholder="Ex: 8500"
                          type="number"
                          value={formData.stats.instagramFollowers}
                          onChange={(e) => handleStatsChange("instagramFollowers", e.target.value)}
                          className="h-11 bg-background border-input/50"
                          data-testid="input-instagram-followers"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Taux d'engagement (%)</label>
                        <Input
                          placeholder="Ex: 4.8"
                          type="number"
                          step="0.1"
                          value={formData.stats.engagement}
                          onChange={(e) => handleStatsChange("engagement", e.target.value)}
                          className="h-11 bg-background border-input/50"
                          data-testid="input-engagement"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Tarifs (EUR)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Story</label>
                        <div className="flex items-center gap-2">
                          <Input
                            placeholder="Ex: 60"
                            type="number"
                            value={formData.pricing.story}
                            onChange={(e) => handlePricingChange("story", e.target.value)}
                            className="h-11 bg-background border-input/50 flex-1"
                            data-testid="input-price-story"
                          />
                          <span className="text-sm font-medium">€</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Post / Reel</label>
                        <div className="flex items-center gap-2">
                          <Input
                            placeholder="Ex: 100"
                            type="number"
                            value={formData.pricing.post}
                            onChange={(e) => handlePricingChange("post", e.target.value)}
                            className="h-11 bg-background border-input/50 flex-1"
                            data-testid="input-price-post"
                          />
                          <span className="text-sm font-medium">€</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Vidéo longue</label>
                        <div className="flex items-center gap-2">
                          <Input
                            placeholder="Ex: 250"
                            type="number"
                            value={formData.pricing.video}
                            onChange={(e) => handlePricingChange("video", e.target.value)}
                            className="h-11 bg-background border-input/50 flex-1"
                            data-testid="input-price-video"
                          />
                          <span className="text-sm font-medium">€</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/30 border border-primary/20 rounded-2xl p-4">
                    <p className="text-sm"><strong>Récapitulatif :</strong></p>
                    <div className="mt-3 space-y-2 text-sm">
                      <p><strong>{formData.name}</strong> • {formData.city}</p>
                      <p>{formData.niche} • {selectedTags.join(", ")}</p>
                      {(formData.stats.tiktokFollowers || formData.stats.instagramFollowers) && (
                        <p>📊 {formData.stats.tiktokFollowers ? `TikTok: ${formData.stats.tiktokFollowers}` : ""} {formData.stats.instagramFollowers ? `Instagram: ${formData.stats.instagramFollowers}` : ""}</p>
                      )}
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
                {currentStep === 4 ? "Terminer" : "Continuer"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
