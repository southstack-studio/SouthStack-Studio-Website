import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  type: "tech" | "non-tech";
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string; // Used to look up the LucideIcon dynamically or render
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "tech" | "design" | "full-stack";
  image: string;
  description: string;
  tags: string[];
  clientType: "Business" | "Student Startup" | "Enterprise";
  demoUrl: string;
}

export interface Stat {
  id: string;
  value: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrSchool: string;
  avatar: string;
  quote: string;
  rating: number;
}
