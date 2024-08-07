export interface SearchDataModel {
  ModuleRes: ModuleRe[];
  SessionRes: SessionRe[];
  WisdomStoriesRes: WisdomStoriesRe[];
  BlogRes: any[];
  JournalRes: any[];
  PodCastRes: PodCastRe[];
  WisdomShortsRes: WisdomShortsRe[];
  FeelBetterNowRes:string;
}

interface WisdomShortsRe {
  RowID: number;
  Title: string;
  VideoUrl: string;
}

interface PodCastRe {
  PodcastID: number;
  Title: string;
  URL: any;
  iframeURL:any;
}

interface WisdomStoriesRe {
  ScenarioID: number;
  Title: string;
  Message: string;
  url: string;
}

interface SessionRe {
  SessionID: number;
  SessionNo: string;
  SessionName: string;
  ModuleId: number;
  ModuleName: string;
  ModuleUrl: string;
  ScrPrcnt: string;
  MediaPrcnt: string;
  Screen: string;
}

interface ModuleRe {
  ModuleId: number;
  ModuleName: string;
  ModuleUrl: string;
  ScrPrcnt: string;
  MediaPrcnt: string;
  Screen: string;
}

export interface paymentIntentModel {
  ProgID:string;
  PlanID:string;
  RateID:string;
  UserID:string;
  DiscountCode:string;
  AffReferralCode:string;
}

export interface StripeModel {
  stripeKey : string;
  clientSecretId: string;
}