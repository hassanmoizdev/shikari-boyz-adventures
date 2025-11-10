import { Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-12">
          Have questions or want to learn more about Shikari Boyz? Reach out to us through any of these channels.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <Mail className="mr-2" />
            Email Us
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <MessageCircle className="mr-2" />
            WhatsApp
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Shikari Boyz. All rights reserved.
        </p>
      </div>
    </section>
  );
};