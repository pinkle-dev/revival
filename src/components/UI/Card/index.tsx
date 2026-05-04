import { Button, Divider, Row, Text } from "@/components/UI";
import {
  Container,
  Image,
  Wrapper,
  DescriptionText,
  ActionWrapper,
} from "./styles";
import { ButtonVariants, Directions, TextElements } from "@/consts";

export interface CardProps {
  id: string;
  title: string;
  role?: string;
  imageUrl: string;
  description?: string;
  action?: { title: string; to: string };
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  action,
  role,
}) => {
  return (
    <Wrapper>
      <Image src={imageUrl} />
      <Container>
        <Row direction={Directions.BETWEEN}>
          <Text element={TextElements.H4}>{title}</Text>
          {role && <Text element={TextElements.P5}>{role}</Text>}
        </Row>
        {description && (
          <>
            <Divider desktopVertical={8} mobVertical={8} />
            <DescriptionText element={TextElements.P3}>
              {description}
            </DescriptionText>
          </>
        )}
        {action && (
          <ActionWrapper>
            <Divider desktopVertical={24} mobVertical={40} />
            <Button variant={ButtonVariants.LINK} to={action.to}>
              {action.title}
            </Button>
          </ActionWrapper>
        )}
      </Container>
    </Wrapper>
  );
};
