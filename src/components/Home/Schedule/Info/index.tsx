import { Button, Row, Text } from "@/components/UI";
import { Block, Container, Wrapper } from "./styles";
import { useTranslation } from "@/hooks";
import { ButtonVariants, COMPONENTS, Directions, TextElements } from "@/consts";

interface InfoProps {
  isNav?: boolean;
  callback?: () => void;
}

export const ScheduleInfo: React.FC<InfoProps> = ({ isNav, callback }) => {
  const content = useTranslation(COMPONENTS.SCHEDULE);
  const events = [...content.events];
  return (
    <Wrapper>
      <Text element={TextElements.H3}>{content.title}</Text>
      {events.map((event) => (
        <Container key={event.title}>
          <Block>
            <Text element={TextElements.P4}>{event.day}</Text>
            <Text element={TextElements.P5}>{event.title}</Text>
          </Block>
          <Text element={TextElements.P4}>{event.time}</Text>
        </Container>
      ))}
      {!isNav && (
        <Row direction={Directions.END}>
          <Button variant={ButtonVariants.GHOST} callback={callback}>
            {content.action}
          </Button>
        </Row>
      )}
    </Wrapper>
  );
};
