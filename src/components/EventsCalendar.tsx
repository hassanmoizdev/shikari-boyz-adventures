import { useState } from "react";
import { events, eventTypes, EventType } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export const EventsCalendar = () => {
  const [selectedType, setSelectedType] = useState<EventType | "All">("All");

  const filteredEvents =
    selectedType === "All"
      ? events
      : events.filter((event) => event.type === selectedType);

  // Sort events by date
  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalendarDays className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for hunts, training sessions, and member gatherings. RSVP to secure your spot.
          </p>
        </div>

        {/* Event Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedType === "All" ? "default" : "outline"}
            onClick={() => setSelectedType("All")}
          >
            All Events
          </Button>
          {eventTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
            >
              {type}s
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {sortedEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No events scheduled in this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
