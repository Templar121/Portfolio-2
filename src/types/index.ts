export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface AcademicProfile {
  platform: string;
  url: string;
  icon: string;
  id?: string;
}

export interface TechStack {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 1-5
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  doi?: string;
  link?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  score?: string;
  credentialId?: string;
  credentialLink?: string;
  image?: string;
}