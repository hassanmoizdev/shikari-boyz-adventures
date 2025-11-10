import patchImg from "@/assets/merch/patch.jpg";
import capImg from "@/assets/merch/cap.jpg";
import tshirtImg from "@/assets/merch/tshirt.jpg";
import hoodieImg from "@/assets/merch/hoodie.jpg";
import knifeImg from "@/assets/merch/knife.jpg";
import thermosImg from "@/assets/merch/thermos.jpg";
import backpackImg from "@/assets/merch/backpack.jpg";
import stickersImg from "@/assets/merch/stickers.jpg";

export type ProductCategory = "Apparel" | "Accessories" | "Gear";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  sizes?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Club Embroidered Patch",
    description: "High-quality embroidered patch featuring our club logo. Perfect for jackets, backpacks, and gear bags.",
    price: 12.99,
    category: "Accessories",
    image: patchImg,
    inStock: true,
  },
  {
    id: 2,
    name: "Camo Trucker Cap",
    description: "Premium camouflage cap with embroidered club logo. Adjustable snapback closure for perfect fit.",
    price: 24.99,
    category: "Apparel",
    image: capImg,
    inStock: true,
  },
  {
    id: 3,
    name: "Classic Logo T-Shirt",
    description: "Comfortable cotton t-shirt with chest logo print. Available in multiple sizes.",
    price: 29.99,
    category: "Apparel",
    image: tshirtImg,
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
  },
  {
    id: 4,
    name: "Camo Hunting Hoodie",
    description: "Warm fleece hoodie with large back logo print. Perfect for cool morning hunts.",
    price: 59.99,
    category: "Apparel",
    image: hoodieImg,
    sizes: ["M", "L", "XL", "2XL"],
    inStock: true,
  },
  {
    id: 5,
    name: "Field Hunting Knife",
    description: "Premium stainless steel hunting knife with leather sheath. Club engraving included.",
    price: 89.99,
    category: "Gear",
    image: knifeImg,
    inStock: true,
  },
  {
    id: 6,
    name: "Insulated Thermos",
    description: "Stainless steel thermos with club logo. Keeps drinks hot or cold for 24 hours.",
    price: 34.99,
    category: "Gear",
    image: thermosImg,
    inStock: true,
  },
  {
    id: 7,
    name: "Tactical Backpack",
    description: "Durable camouflage backpack with multiple compartments. Includes club patches.",
    price: 79.99,
    category: "Gear",
    image: backpackImg,
    inStock: true,
  },
  {
    id: 8,
    name: "Sticker Pack",
    description: "Set of 10 weather-resistant outdoor stickers featuring various hunting club designs.",
    price: 9.99,
    category: "Accessories",
    image: stickersImg,
    inStock: true,
  },
];

export const productCategories: ProductCategory[] = ["Apparel", "Accessories", "Gear"];
