import { COMPONENTS, ROUTES } from "@/consts";
import { LinkButton, Wrapper, NavText } from "./styles";
import { useTranslation } from "@/hooks";
import { useLocation } from "react-router";
import { AboutSVG, ArrowSVG, DonateSVG, EventsSVG, HomeSVG } from "./assets";
import { BurgerButton } from "@/components/UI";
import { useRecoilState } from "recoil";
import { appState } from "@/state";
import { getActiveStatus } from "@/helpers";

export const BottomBar = () => {
  const [{ popup }, setApp] = useRecoilState(appState);
  const content = useTranslation(COMPONENTS.NAV);
  const location = useLocation().pathname;
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

  return (
    <Wrapper>
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
      <BurgerButton isActive={popup} callback={changePopupVisibilityHandler}>
        <ArrowSVG />
      </BurgerButton>
    </Wrapper>
  );
};
