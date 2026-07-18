export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUs {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  linkedin: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface TrustedCompany {
  id: number;
  name: string;
  logo: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
