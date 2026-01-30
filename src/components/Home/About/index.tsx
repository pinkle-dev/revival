import {
  ButtonVariants,
  COMPONENTS,
  Directions,
  IDS,
  ROUTES,
  TextElements,
} from "@/consts";
import { Image, Wrapper, DescriptionText } from "./styles";
import { Button, Container, Divider, Row, Text } from "@/components/UI";
import { useTranslation } from "@/hooks";

export const AboutComponent = () => {
  const content = useTranslation(COMPONENTS.ABOUT);
  return (
    <Wrapper id={IDS.ABOUT}>
      <Container>
        <Text element={TextElements.H2}>{content.title}</Text>
        <Divider desktopVertical={40} mobVertical={24} />
        <Image />
        <Divider desktopVertical={40} mobVertical={24} />
        <DescriptionText element={TextElements.P3}>
          {content.description}
        </DescriptionText>
        <Divider desktopVertical={24} mobVertical={24} />
        <Row direction={Directions.END}>
          <Button variant={ButtonVariants.LINK} to={ROUTES.ABOUT}>
            {content.action}
          </Button>
        </Row>
      </Container>
    </Wrapper>
  );
};
