import { Target, Users, Leaf } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded by a group of lifelong hunters, Shikari Boyz represents tradition, adventure, and friendship. 
            Our mission is to uphold ethical hunting practices, promote wildlife conservation, and pass on the art 
            of hunting to the next generation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
            <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center shadow-golden">
              <Target className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Tradition</h3>
            <p className="text-muted-foreground">
              Honoring time-tested hunting practices passed down through generations
            </p>
          </div>
          
          <div className="text-center space-y-4 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
            <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center shadow-golden">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Brotherhood</h3>
            <p className="text-muted-foreground">
              Building lasting bonds through shared adventures and mutual respect
            </p>
          </div>
          
          <div className="text-center space-y-4 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
            <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center shadow-golden">
              <Leaf className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Conservation</h3>
            <p className="text-muted-foreground">
              Committed to ethical practices and preserving wildlife for future generations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};