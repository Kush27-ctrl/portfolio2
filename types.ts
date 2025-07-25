
export interface Handle {
  name: string;
  engagement: string;
  reach: string;
}

export interface SocialMediaMetrics {
  engagement: string;
  reach: string;
  impressions: string;
  growth: string;
}

export interface SocialMedia {
  info: string;
  handles: Handle[];
  metrics: SocialMediaMetrics;
  links: string[];
  media: Media[];
}

export interface Platform {
  name: string;
  desc: string;
}

export interface ContentMarketingMetrics {
  traffic: string;
  time: string;
  bounce: string;
  leads: string;
}

export interface ContentMarketing {
  info: string;
  platforms: Platform[];
  metrics: ContentMarketingMetrics;
  links: string[];
  media: Media[];
}

export interface Tool {
  name: string;
  proficiency: string;
}

export interface DesigningMetrics {
  performance: string;
  awareness: string;
  engagement: string;
}

export interface Designing {
  info: string;
  tools: Tool[];
  metrics: DesigningMetrics;
  links: string[];
  media: Media[];
}

export interface AdCopies {
  headline: string;
  description: string;
  cta: string;
}

export interface CampaignDetails {
  platform: string;
  duration: string;
  budget: string;
  audience: string;
}

export interface PaidMetrics {
  ctr: string;
  cpa: string;
  cpc: string;
  roas: string;
  conversion: string;
  impressions: string;
}

export interface Paid {
  info: string;
  adCopies: AdCopies;
  campaignDetails: CampaignDetails;
  goals: string[];
  metrics: PaidMetrics;
  links: string[];
  media: Media[];
}

export interface Media {
    src: string;
    name: string;
    uploadDate: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  category: string;
  duration: string;
  type: string;
  socialMedia: SocialMedia;
  contentMarketing: ContentMarketing;
  designing: Designing;
  paid: Paid | null;
}
