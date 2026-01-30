import {
  Wrapper,
  Background,
  BackgroundImage,
  InfoContainer,
  ArrowWrapper,
  ArrowIcon,
} from "./styles";
import { Divider, Button, Text, Container } from "@/components/UI";
import { useTranslation } from "@/hooks/content";
import {
  COMPONENTS,
  ButtonVariants,
  TextElements,
  ANCHORS,
  IDS,
} from "@/consts";
import bg from "@/components/Home/Main/assets/bg.png";
import arrow from "@/components/Home/Main/assets/arrow.png";

export const MainComponent = () => {
  const content = useTranslation(COMPONENTS.MAIN);
  return (
    <Wrapper id={IDS.HOME}>
      <BackgroundImage src={bg} />
      <Background />
      <Container>
        <InfoContainer>
          <Text element={TextElements.H1}>{content.title}</Text>
          <Text element={TextElements.P2}>{content.description}</Text>
          <Divider desktopVertical={80} mobVertical={70} />
          <Button variant={ButtonVariants.FILLED} to={ANCHORS.ABOUT}>
            {content.action}
          </Button>
        </InfoContainer>
        <ArrowWrapper href={ANCHORS.ABOUT}>
          <ArrowIcon src={arrow} />
        </ArrowWrapper>
      </Container>
    </Wrapper>
  );
};
