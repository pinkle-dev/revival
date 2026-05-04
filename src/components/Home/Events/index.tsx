import {
  Button,
  Carousel,
  Container,
  Divider,
  Row,
  Text,
} from "@/components/UI";
import { events } from "./mock";
import { Wrapper, Block } from "./styles";
import {
  ButtonVariants,
  COMPONENTS,
  Directions,
  IDS,
  TextElements,
} from "@/consts";
import { useTranslation } from "@/hooks";
import { parseEventToCard } from "@/helpers/parse";

export const EventsComponent = () => {
  const content = useTranslation(COMPONENTS.EVENTS);
  const parsedUpcomingEvents = parseEventToCard(events, content.actions.more);
  const parsedPastEvents = parseEventToCard(events, content.actions.more);
  return (
    <Wrapper id={IDS.EVENTS}>
      <Container>
        <Text element={TextElements.H2}>{content.title}</Text>
        <Divider desktopVertical={40} mobVertical={40} />
        <Block>
          <Row direction={Directions.BETWEEN}>
            <Text element={TextElements.H3}>{content.subtitles.upcoming}</Text>
            <Button variant={ButtonVariants.LINK}>{content.actions.all}</Button>
          </Row>
          <Divider desktopVertical={24} mobVertical={24} />
          <Carousel items={parsedUpcomingEvents} />
        </Block>
        <Divider desktopVertical={50} mobVertical={40} />
        <Block>
          <Row direction={Directions.BETWEEN}>
            <Text element={TextElements.H3}>{content.subtitles.past}</Text>
            <Button variant={ButtonVariants.LINK}>{content.actions.all}</Button>
          </Row>
          <Divider desktopVertical={24} mobVertical={24} />
          <Carousel items={parsedPastEvents} />
        </Block>
      </Container>
    </Wrapper>
  );
};
