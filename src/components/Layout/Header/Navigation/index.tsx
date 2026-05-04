import { NavButton } from "@/components/UI";
import { Wrapper } from "./styles";
import { useTranslation } from "@/hooks";
import { ANCHORS, COMPONENTS, ROUTES } from "@/consts";
import { getActiveStatus } from "@/helpers";
import type { NavigationSection } from "@/types";

interface NavigationProps {
  location: string;
  isMain: boolean;
  isScroll: boolean;
  callback?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  location,
  isMain,
  isScroll,
  callback,
}) => {
  const content = useTranslation(COMPONENTS.NAV) as NavigationSection;
  const links = [
    {
      title: content.home,
      url: isMain ? ANCHORS.HOME : ROUTES.HOME,
      isAnchor: isMain,
    },
    {
      title: content.about,
      url: isMain ? ANCHORS.ABOUT : ROUTES.ABOUT,
      isAnchor: isMain,
    },
    {
      title: content.events,
      url: isMain ? ANCHORS.EVENTS : ROUTES.EVENTS,
      isAnchor: isMain,
    },
    {
      title: content.donate,
      url: isMain ? ANCHORS.DONATE : ROUTES.DONATE,
      isAnchor: isMain,
    },
    { title: content.contacts, url: ANCHORS.CONTACTS, isAnchor: true },
  ];
  return (
    <Wrapper onClick={callback}>
      {links.map(({ title, url, isAnchor }) => (
        <NavButton
          key={title}
          to={url}
          isScroll={isScroll}
          isAnchor={isAnchor}
          isActive={getActiveStatus({
            location,
            link: url,
            isAnchor,
          })}
        >
          {title}
        </NavButton>
      ))}
    </Wrapper>
  );
};
