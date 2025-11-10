import duckHunting from "@/assets/duck-hunting.jpg";
import deerHunting from "@/assets/deer-hunting.jpg";
import expedition from "@/assets/expedition.jpg";

const huntTypes = [
  {
    title: "Duck Hunts",
    description: "Lakes, marshlands, and the sound of wings cutting through morning fog. Experience the thrill of waterfowl hunting at its finest.",
    image: duckHunting,
  },
  {
    title: "Deer Hunts",
    description: "Silent forests, patience, and precision. Track majestic deer through pristine wilderness with skill and respect.",
    image: deerHunting,
  },
  {
    title: "Seasonal Expeditions",
    description: "Group trips into mountain or forest regions. Join our brotherhood for unforgettable adventures in the wild.",
    image: expedition,
  },
];

export const Hunts = () => {
  return (
    <section id="hunts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Hunts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each hunt tells a story — of skill, respect, and adventure
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {huntTypes.map((hunt, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-forest hover:shadow-golden transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={hunt.image} 
                  alt={hunt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">{hunt.title}</h3>
                <p className="text-primary-foreground/90 text-sm leading-relaxed">
                  {hunt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};