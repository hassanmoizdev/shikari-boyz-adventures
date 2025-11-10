import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import campfire from "@/assets/gallery/campfire.jpg";
import trophyDeer from "@/assets/gallery/trophy-deer.jpg";
import elk from "@/assets/gallery/elk.jpg";
import duckBlind from "@/assets/gallery/duck-blind.jpg";
import gear from "@/assets/gallery/gear.jpg";
import turkey from "@/assets/gallery/turkey.jpg";
import trail from "@/assets/gallery/trail.jpg";
import bear from "@/assets/gallery/bear.jpg";

const galleryImages = [
  {
    src: campfire,
    title: "Brotherhood Around the Fire",
    category: "Member Moments",
  },
  {
    src: trophyDeer,
    title: "Trophy Buck Achievement",
    category: "Achievements",
  },
  {
    src: elk,
    title: "Majestic Elk in the Wild",
    category: "Wildlife",
  },
  {
    src: duckBlind,
    title: "Dawn at the Duck Blind",
    category: "Hunting Trips",
  },
  {
    src: gear,
    title: "Tools of the Trade",
    category: "Equipment",
  },
  {
    src: turkey,
    title: "Wild Turkey Encounter",
    category: "Wildlife",
  },
  {
    src: trail,
    title: "Mountain Expedition",
    category: "Hunting Trips",
  },
  {
    src: bear,
    title: "Black Bear Sighting",
    category: "Wildlife",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trophy Room
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Captured moments from our hunts, wildlife encounters, and the bonds we've forged in the wild
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-forest hover:shadow-golden transition-all duration-500 cursor-pointer transform hover:-translate-y-1 ${
                index % 7 === 0 || index % 7 === 3 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs font-semibold text-accent mb-1">{image.category}</p>
                <h3 className="text-lg font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-primary/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {selectedImage !== null && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <div className="flex flex-col items-center justify-center w-full h-full p-8">
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].title}
                    className="max-w-full max-h-[calc(100%-80px)] object-contain rounded-lg animate-scale-in"
                  />
                  <div className="mt-6 text-center">
                    <p className="text-sm font-semibold text-accent mb-2">
                      {galleryImages[selectedImage].category}
                    </p>
                    <h3 className="text-2xl font-bold text-primary-foreground">
                      {galleryImages[selectedImage].title}
                    </h3>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
