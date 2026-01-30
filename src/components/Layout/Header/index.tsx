import { Wrapper, Container, LanguageButton, ScheduleWrapper } from "./styles";
import { ButtonVariants, LANGUAGES, ROUTES } from "@/consts";
import { useRecoilState } from "recoil";
import { appState } from "@/state";
import { useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { ScheduleInfo } from "@/components/Home//Schedule/Info";

export const Header = () => {
  const [{ lang, scroll, popup }, setApp] = useRecoilState(appState);
  const location = useLocation().pathname;
  const isMain = location === ROUTES.HOME;
  const isScroll = scroll || !isMain;
  const language = lang === LANGUAGES.EN ? LANGUAGES.UA : LANGUAGES.EN;

  const changeLanguageHandler = () => {
    setApp((prev) => ({
      ...prev,
      lang: language,
    }));
  };

  return (
    <Wrapper $show={popup} $scroll={isScroll}>
      <ScheduleWrapper>
        <ScheduleInfo isNav />
      </ScheduleWrapper>
      <Container>
        <div />
        <Navigation isMain={isMain} isScroll={isScroll} location={location} />
        <LanguageButton
          $scroll={isScroll}
          variant={ButtonVariants.GHOST}
          callback={changeLanguageHandler}
        >
          {language}
        </LanguageButton>
      </Container>
    </Wrapper>
  );
};
