export type Data = {
  companyName: string;
  email: string;
  footerImageFileName?: string | null;
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
  gridColsSection: GridColSection[];
}

export type GridColSection = {
  subText: string;
  text: string;
}

export type ImageSection = {
  imageFileName: string;
  imageFirst?: boolean | null;
  subText?: string | null;
  text?: string | null;
}

export type MainCenteredSection = {
  subText: string;
  text: string;
}

export type MainImageSection = {
  imageFileName: string;
}

export type MainSocialAndContactSection = {
  socialLink: string;
  socialName: string;
  socialUsername: string;
  subText: string;
  text: string;
}

export type OfferSection = {
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
  subText: string;
  text: string;
}
