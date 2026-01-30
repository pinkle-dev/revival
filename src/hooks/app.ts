import { LANGUAGE_KEY, LANGUAGES, LANGUAGES_TO_UA } from "@/consts";
import { appState } from "@/state";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export const useScroll = () => {
  const setScroll = useSetRecoilState(appState);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll((prev) => ({ ...prev, scroll: true }));
      } else {
        setScroll((prev) => ({ ...prev, scroll: false }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScroll]);
};

export const useLocalStorage = () => {
  const [{ lang }, setApp] = useRecoilState(appState);

  useEffect(() => {
    const getLanguageHandler = () => {
      const data = localStorage.getItem(LANGUAGE_KEY);

      if (data) {
        const parseData = JSON.parse(data);
        return setApp((prev) => ({ ...prev, lang: parseData }));
      }

      const language = LANGUAGES_TO_UA.some((lang) =>
        navigator.language.toLowerCase().includes(lang),
      )
        ? LANGUAGES.UA
        : LANGUAGES.EN;
      return setApp((prev) => ({ ...prev, lang: language }));
    };

    getLanguageHandler();
    const timeoutId = setTimeout(() => {
      setApp((prev) => ({ ...prev, loading: false }));
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [setApp]);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, JSON.stringify(lang));
  }, [lang]);
};
