import duckSeasonOpener from "@/assets/blog/duck-season-opener.jpg";
import trackingBasics from "@/assets/blog/tracking-basics.jpg";
import conservation from "@/assets/blog/conservation.jpg";
import mentorship from "@/assets/blog/mentorship.jpg";
import gearGuide from "@/assets/blog/gear-guide.jpg";
import treePlanting from "@/assets/blog/tree-planting.jpg";

export type BlogCategory = "Hunt Reports" | "Hunting Tips" | "Conservation" | "Member Stories";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  date: string;
  image: string;
  featured: boolean;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Opening Day Success: A Duck Season to Remember",
    excerpt: "Our annual duck season opener delivered exceptional results as members gathered at Miller's Marsh for an unforgettable morning hunt.",
    content: "The crisp autumn air and perfect weather conditions set the stage for one of our most successful opening days in recent memory. With over 20 members in attendance, we witnessed incredible waterfowl activity across all hunting zones.",
    category: "Hunt Reports",
    author: "Marcus Johnson",
    date: "2024-11-05",
    image: duckSeasonOpener,
    featured: true,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Mastering Deer Tracking: Reading the Signs",
    excerpt: "Learn essential tracking techniques that will help you locate and successfully hunt whitetail deer in various terrain conditions.",
    content: "Understanding deer behavior and reading tracks is fundamental to becoming a successful hunter. In this guide, we'll cover the basics of track identification, aging signs, and interpreting deer movement patterns.",
    category: "Hunting Tips",
    author: "Sarah Mitchell",
    date: "2024-11-01",
    image: trackingBasics,
    featured: true,
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Conservation First: Our Commitment to Wildlife Preservation",
    excerpt: "Shikari Boyz takes pride in our active role in local conservation efforts, ensuring sustainable hunting practices for future generations.",
    content: "This month, our club participated in a major habitat restoration project, planting over 500 native trees and shrubs to improve wildlife corridors. Our commitment to ethical hunting goes hand-in-hand with preserving the environments we cherish.",
    category: "Conservation",
    author: "David Chen",
    date: "2024-10-28",
    image: conservation,
    featured: false,
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Passing Down the Tradition: Youth Mentorship Program",
    excerpt: "How our mentorship initiative is introducing the next generation to ethical hunting practices and outdoor stewardship.",
    content: "Our youth mentorship program has been a cornerstone of Shikari Boyz for over five years. This season, we welcomed 15 new junior hunters who learned firearm safety, tracking skills, and the importance of conservation under the guidance of experienced club members.",
    category: "Member Stories",
    author: "Robert 'Bear' Thompson",
    date: "2024-10-25",
    image: mentorship,
    featured: true,
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Essential Gear Guide for Your First Deer Hunt",
    excerpt: "A comprehensive breakdown of must-have equipment for novice deer hunters, from optics to clothing layers.",
    content: "Preparing for your first deer hunt can be overwhelming with countless gear options available. We've compiled a practical guide covering the essentials: quality optics, appropriate camouflage, scent control products, and safety equipment.",
    category: "Hunting Tips",
    author: "Jennifer Adams",
    date: "2024-10-20",
    image: gearGuide,
    featured: false,
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Giving Back: Our Annual Habitat Restoration Drive",
    excerpt: "Club members joined forces with local conservation groups to plant 1,000 trees in degraded hunting areas.",
    content: "Last weekend, Shikari Boyz members demonstrated their dedication to conservation by participating in our largest habitat restoration project to date. Working alongside state wildlife officials, we planted native species that will provide food and cover for deer, turkey, and other wildlife.",
    category: "Conservation",
    author: "Michael Rodriguez",
    date: "2024-10-15",
    image: treePlanting,
    featured: false,
    readTime: "5 min read",
  },
];

export const categories: BlogCategory[] = [
  "Hunt Reports",
  "Hunting Tips",
  "Conservation",
  "Member Stories",
];
