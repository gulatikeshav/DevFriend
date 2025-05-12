import { HiEye, HiHome, HiUserGroup } from "react-icons/hi";
import { Users, Scissors, Home } from "lucide-react";

export const FAQS = [
  {
    id: 1,
    question: "Do I need an appointment or can I walk in?",
    answer:
      "We welcome both appointments and walk-ins. However, we recommend booking in advance to ensure your preferred time slot, especially on weekends. You can book through our website, by phone, or via WhatsApp.",
    category: "General",
  },
  {
    id: 2,
    question: "How long does a typical haircut take?",
    answer:
      "A standard men's haircut takes approximately 30-45 minutes. Services like beard trims add 15-20 minutes, while premium services like hot towel shaves may take up to an hour. We take our time to ensure quality results.",
    category: "Services",
  },
  {
    id: 3,
    question: "What form of payment do you accept?",
    answer:
      "We accept cash, all major credit/debit cards, Apple Pay, Google Pay, and Venmo for your convenience.",
    category: "Pricing",
  },
  {
    id: 4,
    question: "Do you offer any loyalty programs or discounts?",
    answer:
      "Yes, we offer a loyalty program where your 10th haircut is free. We also offer discounts for military personnel, first responders, seniors, and students with valid ID.",
    category: "Support",
  },
  {
    id: 5,
    question: "What hair products do you use and sell?",
    answer:
      "We use and sell premium men's grooming products from brands like Uppercut Deluxe, Layrite, and American Crew. Our barbers can recommend the best products for your hair type and style.",
    category: "Services",
  },
];

export const TESTIMONIALS = [
  {
    text: "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
    name: "Mike Johnson",
    rating: 5,
  },
  {
    text: "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
    name: "David Martinez",
    rating: 4.5,
  },
  {
    text: "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
    name: "Chris Taylor",
    rating: 4.5,
  },
];

export const GALLERY_IMAGES = [
  { src: "/gallery1.webp", alt: "Barbershop Cut 1" },
  { src: "/about.webp", alt: "Barbershop Exterior" },
  { src: "/gallery3.webp", alt: "Barbershop Trophy" },
];

export const WHY_CHOOSE_US_FEATURES = [
  {
    title: "Expert Barbers",
    description:
      "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.",
    icon: Users ,
  },
  {
    title: "Premium Tools & Products",
    description:
      "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.",
    icon: Scissors ,
  },
  {
    title: "Classic Barbershop Experience",
    description:
      "Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.",
    icon: Home,
  },
];

export const BARBERS = [
  {
    name: "Jason Rodriguez",
    title: "Owner & Master Barber",
    description:
      "With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and grooming excellence.",
    image: "/staff1.webp",
  },
  {
    name: "Marcus Williams",
    title: "Senior Barber",
    description:
      "Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal clientele.",
    image: "/staff2.webp",
  },
  {
    name: "Terrence Jackson",
    title: "Barber & Stylist",
    description:
      "Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at detailed work.",
    image: "/gallery1.webp",
  },
];

export const SERVICE_DATA = [
  {
    title: "Classic Services",
    price: 25,
    badge: "Most Popular",
    features: [
      "Men's Haircut",
      "Kids Haircut (12 & under)",
      "Senior Haircut (65+)",
      "Military/First Responder Cut",
      "Basic Beard Trim",
      "Neck & Line Cleanup (between cuts)",
    ],
  },
  {
    title: "Premium Services",
    price: 35,
    features: [
      "Haircut & Beard Combo",
      "Hot Towel Shave",
      "Full Beard Shaping & Design",
      "Color Camo (Gray Blending)",
      "Hair & Scalp Treatment",
      "Head Shave with Hot Towel",
    ],
  },
  {
    title: "Packages",
    price: 50,
    features: [
      "The Works (Cut, Shave, Treatment)",
      "Father & Son Combo",
      "Groom's Package",
      "Monthly Membership (2 cuts/mo)",
      "First-Time Client Special",
      "Loyalty Program",
    ],
  },
];

export const OUR_SERVICES = [
  {
    title: "Haircuts",
    description:
      "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    features: ["Classic Cuts", "Modern Styles"],
    icon: "https://pmcbarber.devfrend.com/images/salonCommon/hair-styling-icon.svg",
    color: "text-white",
  },
  {
    title: "Beard Services",
    description:
      "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    features: ["Beard Trims", "Beard Shaping"],
    icon: "https://pmcbarber.devfrend.com/images/salonCommon/makeup-icon.svg",
    color: "text-yellow-500 border-yellow-500",
  },
  {
    title: "Premium Services",
    description:
      "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    features: ["Hair Coloring", "Scalp Treatments"],
    icon: "https://pmcbarber.devfrend.com/images/salonCommon/skincare-icon.svg",
    color: "text-white",
  },
];
