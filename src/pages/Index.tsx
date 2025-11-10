import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Hunts } from "@/components/Hunts";
import { Gallery } from "@/components/Gallery";
import { FieldNotes } from "@/components/FieldNotes";
import { MerchStore } from "@/components/MerchStore";
import { Membership } from "@/components/Membership";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Hunts />
        <Gallery />
        <FieldNotes />
        <MerchStore />
        <Membership />
        <Contact />
      </main>
    </>
  );
};

export default Index;