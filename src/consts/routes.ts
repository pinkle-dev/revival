export const ROUTES = {
  HOME: "/",
  ABOUT: "about-us",
  EVENTS: "events",
  EVENT: ":eid",
  DONATE: "donate",
  CONTACTS: "contacts",
} as const;

export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];

export const ANCHORS = {
  HOME: "#",
  ABOUT: "#about-us",
  EVENTS: "#events",
  DONATE: "#donate",
  CONTACTS: "#contacts",
} as const;

export type ANCHORS = (typeof ANCHORS)[keyof typeof ANCHORS];

export const IDS = {
  HOME: "main",
  ABOUT: "about-us",
  EVENTS: "events",
  DONATE: "donate",
  CONTACTS: "contacts",
} as const;

export type IDS = (typeof IDS)[keyof typeof IDS];
