import { Button, Divider, Row, Text } from "@/components/UI";
import { Wrapper, Image, Block, Container, LocationButton } from "./styles";
import {
  ButtonVariants,
  COMPONENTS,
  Directions,
  IDS,
  TextElements,
  VITE_LOCATION_URL,
} from "@/consts";
import { useTranslation } from "@/hooks";
import location from "./assets/location.jpg";
import type { ContactsSection } from "@/types";

export const Footer = () => {
  const content = useTranslation(COMPONENTS.CONTACTS) as ContactsSection;

  const year = new Date().getUTCFullYear();
  const period = year === 2026 ? year : `2026-${year}`;
  return (
    <Wrapper id={IDS.CONTACTS}>
      <Container>
        <Block>
          <Text element={TextElements.H3}>{content.title}</Text>
          <Divider desktopVertical={40} mobVertical={24} />
          {content.contacts.map((contact) => (
            <>
              <Row direction={Directions.BETWEEN}>
                <Text element={TextElements.P4}>{contact.title}</Text>
                <Text element={TextElements.P3}>{contact.description}</Text>
              </Row>
              <Divider desktopVertical={16} mobVertical={8} />
            </>
          ))}

          <Row direction={Directions.BETWEEN}>
            <Text element={TextElements.P4}>{content.social.title}</Text>
            {content.social.description.map((social) => (
              <Button variant={ButtonVariants.LINK}>{social.content}</Button>
            ))}
          </Row>
          <Divider desktopVertical={24} mobVertical={24} />
          <Text element={TextElements.P4}>{content.address.title}</Text>
          <Divider desktopVertical={16} mobVertical={8} />
          <Text element={TextElements.P3}>{content.address.description}</Text>
          <Divider desktopVertical={16} mobVertical={8} />
          <LocationButton
            isBlank
            variant={ButtonVariants.FILLED}
            to={VITE_LOCATION_URL}
          >
            {content.action}
          </LocationButton>
        </Block>
        <Block>
          <Image src={location} />
        </Block>
      </Container>
      <Divider desktopVertical={80} mobVertical={40} />
      <Text element={TextElements.P5}>© {period} Revival Church</Text>
    </Wrapper>
  );
};
