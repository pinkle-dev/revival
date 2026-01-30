import type { COMPONENTS } from "@/consts";
import c from "@/content/index.json";
import { appState } from "@/state";
import { useRecoilValue } from "recoil";

export const useTranslation = (page: COMPONENTS) => {
  const lang = useRecoilValue(appState).lang;

  const content = JSON.parse(JSON.stringify(c));

  return content[lang][page];
};
