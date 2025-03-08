import PropectProjectThumbnail from "@/assets/garage-main.jpg";
import EvenstonThumbnail from "@/assets/gazebo-main.jpg";
import ProsectDeckThumbnail from "@/assets/Prospect-deck-main.jpg";
import GlenviewThumbnail from "@/assets/redDoor-main.jpg";
import StCharlesThumbnail from "@/assets/stCharles-main.jpg";

const path = "/gallery?value=";

export const OUTDOOR_LINKS = [
  {
    text: "Doors",
    href: `${path}doors`,
  },
  {
    text: "Gazebos",
    href: `${path}gazebos`,
  },
  {
    text: "Gutters",
    href: `${path}gutters`,
  },
  {
    text: "Roofing",
    href: `${path}roofing`,
  },
  {
    text: "Siding",
    href: `${path}siding`,
  },
  {
    text: "Skylights",
    href: `${path}skylights`,
  },
  {
    text: "Windows",
    href: `${path}windows`,
  },
];

export const OUTDOOR_OPTIONS = [
  { value: "copper", label: "Copper" },
  { value: "deck", label: "Deck" },
  { value: "doors", label: "Doors" },
  { value: "dormer", label: "Dormer" },
  { value: "fascia", label: "Fascia" },
  { value: "fence", label: "Fence" },
  { value: "flooring", label: "Flooring" },
  { value: "gazebos", label: "Gazebos" },
  { value: "garage", label: "Garage" },
  { value: "gutters", label: "Gutters" },
  { value: "portico", label: "Portico" },
  { value: "siding", label: "Siding" },
  { value: "soffit", label: "Soffit" },
  { value: "skylights", label: "Skylights" },
  { value: "painting", label: "Painting" },
  { value: "roofing", label: "Roofing" },
  { value: "windows", label: "Windows" },
];

export const INDOOR_LINKS = [
  {
    text: "Attic",
    href: "#",
  },
  {
    text: "Bathroom",
    href: "#",
  },
  {
    text: "Boiler",
    href: "#",
  },
  {
    text: "Flooring",
    href: "#",
  },
  {
    text: "Kitchen",
    href: "#",
  },
  {
    text: "Painting",
    href: "#",
  },
];

export const CAROUSEL_ITEMS = [
  {
    id: 1,
    url: EvenstonThumbnail.src,
    category: ["Gazebo", "Roofing"],
    title: "St. Charles",
  },
  {
    id: 2,
    url: PropectProjectThumbnail.src,
    category: ["Garage", "Doors", "Windows"],
    title: "Prospect Heights",
  },
  {
    id: 3,
    url: ProsectDeckThumbnail.src,
    category: ["Deck", "Lighting", "Windows"],
    title: "Prosepct Heights",
  },
  {
    id: 4,
    url: GlenviewThumbnail.src,
    category: ["Doors"],
    title: "Glenview",
  },
  {
    id: 5,
    url: StCharlesThumbnail.src,
    category: ["Copper Elements", "Portico", "Windows"],
    title: "Evenston",
  },
];

export const TESTIMONIALS = [
  {
    name: "Jaye Bergainos",
    description: `The Hardie siding, gutters, windows, patio sliding door, 
    and front exterior entry door recently installed looks beautiful!!! 
    The grey custom color of the siding is exactly the look I wanted to 
    achieve.`,
    descriptionTwo: `The crew was hard working, clean and very careful. 
    I especially want to acknowledge Jack. 
    He was a perfectionist in the quality of work he provided.
    He was always available to listen to concerns and addressed
    them immediately and treated my home as he would his own.
    Jack was very professional and courteous. Everyone at J.D. Exterior made my personal home project a positive experience.`,
    flavorText: "He was a perfectionist in the quality of work he provided.",
    location: "Arlington Heights, IL",
  },
  {
    name: "Howard Westphal",
    description: `Each night, Jack and his crew cleaned and secured the yard areas adjacent to our home; 
    no broken materials nor debris were in sight at the end of the work day. Jack checked with us periodically 
    to ask if we had any questions or concerns for intended installations. The time estimate to do the work was accurate, 
    which entailed four days work days.`,
    flavorText: "Each night, Jack and his crew cleaned and secured the yard.",
    location: "Palatine, IL",
  },
  {
    name: "Jan & Jim Vakoc",
    description: `We wanted to thank your crew, Jack and his men, 
    for the wonderful job they did on the windows and siding on our house. 
    They worked long hours and made sure that everything was cleaned up daily. 
    The quality of the work is superb.`,
    flavorText: "The quality of the work is superb.",
    location: "Schaumburg, IL",
  },
  {
    name: "Al Nies",
    description: `Most of the credit for my satisfaction goes to Jack Dejworek. 
    Jack is a perfectionist, with great ability and talent. 
    Jack spent significant time studying the best way to handle many details. 
    When questions arose, he always consulted with us before proceeding to ensure the best possible result. 
    But perhaps Jack's best quality is that he treated our home as if he would his own. He did not sacrifice perfection for expedience, 
    a rare trait in today's high pressure environment that usually demands quantity at the expense of quality.`,
    flavorText: "He treated our home as if he would his own.",
    location: "Palatine, IL",
  },
];
