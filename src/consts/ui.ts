export const TextElements = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  P1: "p1",
  P2: "p2",
  P3: "p3",
  P4: "p4",
  P5: "p5",
} as const;

export type TextElements = (typeof TextElements)[keyof typeof TextElements];

export const ButtonVariants = {
  LINK: "LINK",
  FILLED: "FILLED",
  GHOST: "GHOST",
  LANGUAGE: "LANGUAGE",
} as const;

export type ButtonVariants =
  (typeof ButtonVariants)[keyof typeof ButtonVariants];

export const Directions = {
  END: "flex-end",
  START: "flex-start",
  BETWEEN: "space-between",
  CENTER: "center",
} as const;

export type Directions = (typeof Directions)[keyof typeof Directions];
