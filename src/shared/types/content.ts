export type NavItem = {
  label: string;
  href: string;
};

export type VisualAsset = {
  src: string;
  alt: string;
  category: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type ServiceCategory = {
  title: string;
  description: string;
  href: string;
  image: VisualAsset;
};

export type ProductCard = {
  name: string;
  benefit: string;
  application: string;
  image: VisualAsset;
};

export type NeedOption = {
  label: string;
  recommendation: string;
  products: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProjectImage = VisualAsset & {
  title: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type QuoteFormValues = {
  fullName: string;
  phone: string;
  email: string;
  spaceType: string;
  productInterest: string;
  location: string;
  message: string;
  photo: File | null;
  consent: boolean;
  companyWebsite: string;
};
