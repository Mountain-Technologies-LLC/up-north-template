export type Schema = {
  companyName: string;
  email: string;
  footerImageFileName?: string | null;
  logoFileName?: string | null;
  pageHome: PageHome;
  pages: Page[];
  phoneNumber: string;
  phoneTel: string;
  socialLink: string;
  socialName: string;
  socialUsername: string;
  tagline: string;
  theme: string;
}

export type PageHome = {
  sections: Section[];
}

export type Page = {
  pageId: string;
  name: string;
  link?: string | null;
  pages?: Page[] | null;
  sections?: Section[] | null;
}

export type Section = {
  contactSection?: ContactSection | null;
  gridSection?: GridSection | null;
  imageSection?: ImageSection | null;
  mainCenteredSection?: MainCenteredSection | null;
  mainImageSection?: MainImageSection | null;
  mainSocialAndContactSection?: MainSocialAndContactSection | null;
  offerSection?: OfferSection | null;
  textSection?: TextSection | null;
}

export type ContactSection = {
  sectionId: string;
  email: string;
  phoneNumber: string;
  phoneTel: string;
  socialLink: string;
  socialName: string;
  socialUsername: string;
  subText: string;
  text: string;
}

export type GridSection = {
  sectionId: string;
  gridColsSection: GridColSection[];
}

export type GridColSection = {
  subText: string;
  text: string;
}

export type ImageSection = {
  sectionId: string;
  imageFileName: string;
  imageFirst?: boolean | null;
  subText?: string | null;
  text?: string | null;
}

export type MainCenteredSection = {
  sectionId: string;
  subText: string;
  text: string;
}

export type MainImageSection = {
  sectionId: string;
  imageFileName: string;
}

export type MainSocialAndContactSection = {
  sectionId: string;
  socialLink: string;
  socialName: string;
  subText: string;
  text: string;
}

export type OfferSection = {
  sectionId: string;
  offers: OfferSectionOffer[];
}

export type OfferSectionOffer = {
  badge?: string | null;
  buttonLink?: string | null;
  buttonMailTo?: string | null;
  buttonText?: string | null;
  moreGuarantees?: OfferSectionOfferGuarantees[] | null;
  guarantees?: OfferSectionOfferGuarantees[] | null;
  price?: string | null;
  priceText?: string | null;
  isSkeleton?: boolean | null;
  subOfferLink?: string | null;
  subOfferMailTo?: string | null;
  subOfferText?: string | null;
  subPrice?: string | null;
  subText: string;
  text: string;
}

export type OfferSectionOfferGuarantees = {
  bold?: boolean | null;
  text: string;
}

export type TextSection = {
  sectionId: string;
  subText: string;
  text: string;
}
