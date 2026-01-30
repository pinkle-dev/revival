import { atom } from "recoil";

export const appState = atom({
  key: "applState",
  default: {
    scroll: false,
    lang: "en",
    loading: true,
    bar: false,
    popup: false,
  },
});
