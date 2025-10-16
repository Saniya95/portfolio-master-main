// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For modal or project page
  image: string;
  dataAiHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  category: string[]; // Added mobile for more variety
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLink?: string;
  dates: string;
  location?: string;
  descriptionPoints: string[];
  tags?: string[];
  certificateLink?: string;
}
