import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Hunts } from "@/components/Hunts";
import { Membership } from "@/components/Membership";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Hunts />
      <Membership />
      <Contact />
    </main>
  );
};

export default Index;