import { NavButton } from "@/components/UI";
import { Wrapper } from "./styles";
import { useTranslation } from "@/hooks";
import { ANCHORS, COMPONENTS, ROUTES } from "@/consts";
import { getActiveStatus } from "@/helpers";

interface NavigationProps {
  location: string;
  isMain: boolean;
  isScroll: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  location,
  isMain,
  isScroll,
}) => {
  const content = useTranslation(COMPONENTS.NAV);
  const links = [
    { title: content.home, url: isMain ? ANCHORS.HOME : ROUTES.HOME },
    { title: content.about, url: isMain ? ANCHORS.ABOUT : ROUTES.ABOUT },
    { title: content.events, url: isMain ? ANCHORS.EVENTS : ROUTES.EVENTS },
    { title: content.donate, url: isMain ? ANCHORS.DONATE : ROUTES.DONATE },
  ];
  return (
    <Wrapper>
      {links.map((link) => (
        <NavButton
          key={link.title}
          to={link.url}
          isScroll={isScroll}
          isAnchor={isMain}
          isActive={getActiveStatus({
            location,
            link: link.url,
            isAnchor: isMain,
          })}
        >
          {link.title}
        </NavButton>
      ))}
    </Wrapper>
  );
};
