import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";
import shikariLogo from "@/assets/shikari-logo.jpg";

export const Hero = () => {
  const scrollToMembership = () => {
    document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroForest})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <img 
            src={shikariLogo} 
            alt="Shikari Boyz Logo" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight leading-tight">
            SHIKARI BOYZ
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-semibold tracking-wide">
            Brothers of the Hunt
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed px-4">
            Welcome to Shikari Boyz, a brotherhood bound by the thrill of the hunt and respect for nature. 
            From the quiet stillness of dawn duck hunts to the adrenaline of tracking deer in the wild, 
            we celebrate the spirit of true hunting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToMembership}
              className="text-lg px-8 py-6"
            >
              Join the Hunt <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};