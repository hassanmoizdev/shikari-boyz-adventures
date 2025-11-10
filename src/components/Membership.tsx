import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

export const Membership = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "We'll get back to you soon about joining our brotherhood.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const benefits = [
    "Exclusive access to prime hunting locations",
    "Expert training and skills development sessions",
    "Community meetups and social gatherings",
    "Conservation initiative participation",
    "Seasonal group expeditions",
    "Member-only gear discounts",
  ];

  return (
    <section id="membership" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our Brotherhood
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Become part of a community that shares your passion for ethical hunting, 
              outdoor adventure, and wildlife conservation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Membership Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-forest">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Apply to Join
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your hunting experience and why you'd like to join..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full min-h-32"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};