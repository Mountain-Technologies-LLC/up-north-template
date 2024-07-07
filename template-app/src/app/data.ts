export type Data = {
  companyName: string;
  email: string;
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
  sectionContact?: SectionContact | null;
  sectionGrid?: SectionGrid | null;
  sectionHeroCentered?: SectionHeroCentered | null;
  sectionHeroWithSocialAndContact?: SectionHeroWithSocialAndContact | null;
  sectionImage?: SectionImage | null;
  offerSection?: OfferSection | null;
  sectionText?: SectionText | null;
}

export type SectionContact = {
  email: string;
  phoneNumber: string;
  phoneTel: string;
  socialLink: string;
  socialName: string;
  socialUsername: string;
  subText: string;
  text: string;
}

export type SectionGrid = {
  sectionGridCols: SectionGridCol[];
}

export type SectionGridCol = {
  subText: string;
  text: string;
}

export type SectionHeroCentered = {
  subText: string;
  text: string;
}

export type SectionHeroWithSocialAndContact = {
  socialLink: string;
  socialName: string;
  socialUsername: string;
  subText: string;
  text: string;
}

export type SectionImage = {
  imageFileName: string;
  imageFirst?: boolean | null;
  subText?: string | null;
  text?: string | null;
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

export type SectionText = {
  subText: string;
  text: string;
}
