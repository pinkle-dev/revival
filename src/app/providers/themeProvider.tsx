import type { PropsWithChildren } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { theme } from "@/consts";
import { GlobalStyles } from "@/app/styles";
import { useRecoilValue } from "recoil";
import { appState } from "@/state";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const isScroll = useRecoilValue(appState).popup;
  return (
    <Provider theme={theme}>
      <GlobalStyles $scroll={isScroll} />
      {children}
    </Provider>
  );
};
