import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { format, differenceInDays, differenceInHours, differenceInMinutes } from "date-fns";
import { Event } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  const { toast } = useToast();
  const [countdown, setCountdown] = useState("");
  const [isRSVPd, setIsRSVPd] = useState(false);

  const eventDateTime = new Date(`${event.date}T${event.time}`);
  const formattedDate = format(eventDateTime, "EEEE, MMMM d, yyyy");
  const spotsRemaining = event.maxAttendees ? event.maxAttendees - event.currentAttendees : null;

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const days = differenceInDays(eventDateTime, now);
      const hours = differenceInHours(eventDateTime, now) % 24;
      const minutes = differenceInMinutes(eventDateTime, now) % 60;

      if (days > 0) {
        setCountdown(`${days}d ${hours}h`);
      } else if (hours > 0) {
        setCountdown(`${hours}h ${minutes}m`);
      } else if (minutes > 0) {
        setCountdown(`${minutes}m`);
      } else {
        setCountdown("Starting soon");
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [eventDateTime]);

  const handleRSVP = () => {
    if (!isRSVPd) {
      setIsRSVPd(true);
      toast({
        title: "RSVP Confirmed!",
        description: `You're registered for ${event.title}. Check your email for details.`,
      });
    } else {
      setIsRSVPd(false);
      toast({
        title: "RSVP Cancelled",
        description: `Your registration for ${event.title} has been cancelled.`,
        variant: "destructive",
      });
    }
  };

  const getEventTypeColor = () => {
    switch (event.type) {
      case "Hunt":
        return "bg-accent text-accent-foreground";
      case "Training":
        return "bg-secondary text-secondary-foreground";
      case "Meetup":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-forest hover:shadow-golden transition-all duration-500 transform hover:-translate-y-2 bg-card">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        
        {/* Countdown Badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-accent text-accent-foreground text-sm font-bold shadow-golden">
            <Clock className="w-3 h-3 mr-1" />
            {countdown}
          </Badge>
        </div>

        {/* Event Type Badge */}
        <div className="absolute top-3 right-3">
          <Badge className={getEventTypeColor()}>
            {event.type}
          </Badge>
        </div>

        {/* Spots Remaining */}
        {spotsRemaining !== null && (
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-primary-foreground/90 text-primary">
              {spotsRemaining > 0 ? `${spotsRemaining} spots left` : "Full"}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          {event.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-accent" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-accent" />
            <span>
              {event.currentAttendees}
              {event.maxAttendees && ` / ${event.maxAttendees}`} attending
            </span>
          </div>
        </div>

        {event.requirements && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-foreground mb-2">Required:</p>
            <div className="flex flex-wrap gap-1">
              {event.requirements.slice(0, 2).map((req, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {req}
                </Badge>
              ))}
              {event.requirements.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{event.requirements.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        )}

        <Button
          variant={isRSVPd ? "default" : "hero"}
          className="w-full"
          onClick={handleRSVP}
          disabled={spotsRemaining === 0}
        >
          {isRSVPd ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              You're Going
            </>
          ) : spotsRemaining === 0 ? (
            "Event Full"
          ) : (
            "RSVP Now"
          )}
        </Button>
      </div>
    </div>
  );
};
