import type { COMPONENTS } from "@/consts";
import type { AboutSubtitles, HistoryEvent, Minister } from "./about";

export interface TranslationData {
  ua: LanguageContent;
  en: LanguageContent;
}
export type TranslationDataT = Record<"ua" | "en" | string, LanguageContent>;

export interface LanguageContent {
  [COMPONENTS.MAIN]: MainSection;
  [COMPONENTS.NAV]: Navigation;
  [COMPONENTS.ABOUT]: AboutSection;
  [COMPONENTS.EVENTS]: EventsSection;
  [COMPONENTS.SCHEDULE]: ScheduleSection;
  [COMPONENTS.CONTACTS]: ContactsSection;
}

export interface MainSection {
  title: string;
  description: string;
  action: string;
}

export interface NavigationSection {
  home: string;
  about: string;
  events: string;
  donate: string;
  contacts: string;
}

export interface AboutSection {
  title: string;
  description: string;
  action: string;
  subtitles: AboutSubtitles;
  ministers: Minister[];
  history: HistoryEvent[];
}

export interface EventsSection {
  title: string;
  subtitles: EventSubtitles;
  actions: EventActions;
}

export interface EventSubtitles {
  upcoming: string;
  past: string;
}

export interface EventActions {
  all: string;
  more: string;
}

export interface ScheduleSection {
  title: string;
  short_title: string;
  action: string;
  events: ScheduleEvent[];
}

export interface ScheduleEvent {
  title: string;
  day: string;
  time: string;
}
interface ContactItem {
  title: string;
  description: string;
}

interface SocialNetwork {
  content: string;
  type: string; // You could also use a union type like 'instagram' | 'facebook'
  link: string;
}

interface SocialSection {
  title: string;
  description: SocialNetwork[];
}

interface AddressSection {
  title: string;
  description: string;
  link: string;
}

export interface ContactsSection {
  title: string;
  action: string;
  contacts: ContactItem[];
  social: SocialSection;
  address: AddressSection;
}
