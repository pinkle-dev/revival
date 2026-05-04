import { Carousel, Container, Divider, Text } from "@/components/UI";
import { Wrapper, BackgroundContainer, EventsList, EventItem } from "./styles";
import { COMPONENTS, TextElements } from "@/consts";
import { useTranslation } from "@/hooks";
import { parseMinisterToCard } from "@/helpers";
import type { AboutSection } from "@/types";

export const AboutComponent = () => {
  const content = useTranslation(COMPONENTS.ABOUT) as AboutSection;
  const parsedMinisters = parseMinisterToCard(content.ministers);
  return (
    <Wrapper>
      <BackgroundContainer>
        <Container>
          <Text element={TextElements.H2}>{content.title}</Text>
          <Divider desktopVertical={40} mobVertical={24} />
          <Text element={TextElements.P3}>{content.description}</Text>
        </Container>
      </BackgroundContainer>
      <BackgroundContainer $light>
        <Container>
          <Text element={TextElements.H3}>{content.subtitles.ministers}</Text>
          <Divider desktopVertical={24} mobVertical={24} />
          <Carousel items={parsedMinisters} />
        </Container>
      </BackgroundContainer>
      <BackgroundContainer>
        <Container>
          <Text element={TextElements.H3}>{content.subtitles.history}</Text>
          <Divider desktopVertical={24} mobVertical={24} />
          <EventsList>
            {content.history.map((event, idx: number) => (
              <EventItem $last={idx === content.history.length - 1}>
                <Text element={TextElements.P3}>{event.year}</Text>
                <Divider desktopVertical={16} mobVertical={16} />
                <Text element={TextElements.P3}>{event.description}</Text>
              </EventItem>
            ))}
          </EventsList>
        </Container>
      </BackgroundContainer>
    </Wrapper>
  );
};
