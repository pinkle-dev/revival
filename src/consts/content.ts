export const COMPONENTS = {
  NAV: "nav",
  SCHEDULE: "schedule",

  MAIN: "main",
  ABOUT: "about",
  EVENTS: "events",
  CONTACTS: "contacts",
} as const;

export type COMPONENTS = (typeof COMPONENTS)[keyof typeof COMPONENTS];

export const LANGUAGES = {
  EN: "en",
  UA: "ua",
} as const;

export type LANGUAGES = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export const LANGUAGE_KEY = "lang";
export const LANGUAGES_TO_UA = ["ua", "uk", "ru", "be", "by"];
