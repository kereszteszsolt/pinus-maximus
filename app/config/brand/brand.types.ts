export interface BrandConfig {
  appName: string;
  shortName: string;
  description: string;
  companyName: string;
  supportEmail: string;
  storagePrefix: string;
  defaultLanguage: string;
  theme: {
    primaryColor: string;
    accentColor: string;
  };
  links: {
    website: string;
    privacy: string;
    terms: string;
  };
}
