import { ButtonVariants, COMPONENTS, LANGUAGES, ROUTES } from "@/consts";
import {
  LinkButton,
  Wrapper,
  NavText,
  NavWrapper,
  Container,
  LanguageButton,
  Background,
} from "./styles";
import { useTranslation } from "@/hooks";
import { useLocation } from "react-router";
import { AboutSVG, ArrowSVG, DonateSVG, EventsSVG, HomeSVG } from "./assets";
import { BurgerButton, Divider } from "@/components/UI";
import { useRecoilState } from "recoil";
import { appState } from "@/state";
import { getActiveStatus } from "@/helpers";
import { ScheduleInfo } from "@/components/Home/Schedule/Info";
import { Navigation } from "@/components/Layout/Header/Navigation";

export const BottomBar = () => {
  const content = useTranslation(COMPONENTS.NAV);
  const location = useLocation().pathname;
  const [{ lang, scroll, popup }, setApp] = useRecoilState(appState);
  const isMain = location === ROUTES.HOME;
  const isScroll = scroll || !isMain;
  const language = lang === LANGUAGES.EN ? LANGUAGES.UA : LANGUAGES.EN;
  const tabs = [
    { title: content.about, url: ROUTES.ABOUT, icon: <AboutSVG /> },
    { title: content.events, url: ROUTES.EVENTS, icon: <EventsSVG /> },
    { title: content.home, url: ROUTES.HOME, icon: <HomeSVG /> },
    { title: content.donate, url: ROUTES.DONATE, icon: <DonateSVG /> },
  ];

  const changePopupVisibilityHandler = () => {
    setApp((prev) => ({
      ...prev,
      popup: !prev.popup,
    }));
  };

  const onCloseHandler = () => {
    setApp((prev) => ({
      ...prev,
      popup: false,
    }));
  };

  const changeLanguageHandler = () => {
    setApp((prev) => ({
      ...prev,
      lang: language,
    }));
  };

  if (window.scrollY < window.screen.height / 10 && isMain) {
    return null;
  }

  return (
    <>
      <Background $show={popup} onClick={onCloseHandler} />
      <NavWrapper $show={popup} $scroll={isScroll}>
        <ScheduleInfo isNav />
        <Divider mobVertical={24} />
        <Container $show={isMain}>
          <Navigation
            isMain={isMain}
            isScroll={isScroll}
            location={location}
            callback={onCloseHandler}
          />
        </Container>
        <Divider mobVertical={24} />
        <LanguageButton
          $scroll={isScroll}
          $open={popup}
          variant={ButtonVariants.GHOST}
          callback={changeLanguageHandler}
        >
          {language}
        </LanguageButton>
      </NavWrapper>
      <Wrapper onClick={onCloseHandler}>
        {tabs.map((tab) => (
          <LinkButton
            key={tab.url}
            $active={getActiveStatus({ location, link: tab.url })}
            to={tab.url}
          >
            {tab.icon}
            <NavText>{tab.title}</NavText>
          </LinkButton>
        ))}
        <div onClick={(event) => event.stopPropagation()}>
          <BurgerButton
            isActive={popup}
            callback={changePopupVisibilityHandler}
          >
            <ArrowSVG />
          </BurgerButton>
        </div>
      </Wrapper>
    </>
  );
};
