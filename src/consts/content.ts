export enum COMPONENTS {
  NAV = "nav",
  SCHEDULE = "schedule",

  MAIN = "main",
  ABOUT = "about",
  EVENTS = "events",
}

export enum LANGUAGES {
  EN = "en",
  UA = "ua",
}

export const LANGUAGE_KEY = "lang";
export const LANGUAGES_TO_UA = ["ua", "uk", "ru", "be", "by"];

export type TranslationContentType = {
  [COMPONENTS.MAIN]: {
    title: string;
    description: string;
    action: string;
  };
  [COMPONENTS.NAV]: {
    home: string;
    about: string;
    events: string;
    donate: string;
  };
  [COMPONENTS.ABOUT]: {
    title: string;
    description: string;
    action: string;
  };
  [COMPONENTS.SCHEDULE]: {
    title: string;
    events: {
      title: string;
      day: string;
      time: string;
    }[];
    action: string;
  };
};

export type ContentType = {
  [LANGUAGES.UA]: TranslationContentType;
  [LANGUAGES.EN]: TranslationContentType;
};
