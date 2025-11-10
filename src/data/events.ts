import duckHuntImg from "@/assets/events/duck-hunt.jpg";
import trainingImg from "@/assets/events/training.jpg";
import meetupImg from "@/assets/events/meetup.jpg";
import deerHuntImg from "@/assets/events/deer-hunt.jpg";

export type EventType = "Hunt" | "Training" | "Meetup";

export interface Event {
  id: number;
  title: string;
  description: string;
  type: EventType;
  date: string;
  time: string;
  location: string;
  image: string;
  maxAttendees?: number;
  currentAttendees: number;
  meetingPoint?: string;
  requirements?: string[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "Early Morning Duck Hunt",
    description: "Join us for the season's premier duck hunting expedition at Miller's Marsh. Perfect conditions expected with high waterfowl activity.",
    type: "Hunt",
    date: "2024-11-20",
    time: "4:30 AM",
    location: "Miller's Marsh Wildlife Area",
    image: duckHuntImg,
    maxAttendees: 15,
    currentAttendees: 8,
    meetingPoint: "Main parking lot",
    requirements: ["Valid hunting license", "Duck stamps", "Waders", "Decoys"],
  },
  {
    id: 2,
    title: "Rifle Safety & Marksmanship Training",
    description: "Certified instructors will cover rifle safety fundamentals, proper shooting techniques, and accuracy drills. Suitable for all skill levels.",
    type: "Training",
    date: "2024-11-16",
    time: "9:00 AM",
    location: "Pine Ridge Shooting Range",
    image: trainingImg,
    maxAttendees: 20,
    currentAttendees: 12,
    meetingPoint: "Range entrance",
    requirements: ["Eye protection", "Ear protection", "Rifle (can be provided)"],
  },
  {
    id: 3,
    title: "Monthly Club BBQ & Social",
    description: "Relax with fellow members over good food and hunting stories. Bring your family for an evening of camaraderie and outdoor cooking.",
    type: "Meetup",
    date: "2024-11-23",
    time: "5:00 PM",
    location: "Club Lodge - Cedar Creek",
    image: meetupImg,
    maxAttendees: 50,
    currentAttendees: 28,
    meetingPoint: "Main lodge",
  },
  {
    id: 4,
    title: "Whitetail Deer Expedition",
    description: "Multi-day deer hunting trip in prime whitetail territory. Experienced trackers will guide small groups through productive hunting zones.",
    type: "Hunt",
    date: "2024-12-01",
    time: "5:00 AM",
    location: "North Ridge Wilderness Area",
    image: deerHuntImg,
    maxAttendees: 10,
    currentAttendees: 7,
    meetingPoint: "North entrance gate",
    requirements: ["Deer license", "Tree stand", "Cold weather gear", "GPS device"],
  },
];

export const eventTypes: EventType[] = ["Hunt", "Training", "Meetup"];
