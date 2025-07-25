export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}
