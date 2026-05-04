import type { COMPONENTS } from "@/consts";
import c from "@/content/index.json";
import { appState } from "@/state";
import { useRecoilValue } from "recoil";

const content = JSON.parse(JSON.stringify(c));

export const useTranslation = (page: COMPONENTS) => {
  const lang = useRecoilValue(appState).lang;

  return content[lang][page];
};
