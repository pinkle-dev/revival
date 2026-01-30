import { Button, Divider, Text } from "@/components/UI";
import {
  Container,
  Image,
  Wrapper,
  DescriptionText,
  ActionWrapper,
} from "./styles";
import { ButtonVariants, TextElements } from "@/consts";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  action: { title: string; to: string };
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  action,
}) => {
  return (
    <Wrapper>
      <Image src={imageUrl} />
      <Container>
        <Text element={TextElements.H4}>{title}</Text>
        <Divider desktopVertical={8} mobVertical={8} />
        <DescriptionText element={TextElements.P3}>
          {description}
        </DescriptionText>
        <ActionWrapper>
          <Divider desktopVertical={24} mobVertical={40} />
          <Button variant={ButtonVariants.LINK} to={action.to}>
            {action.title}
          </Button>
        </ActionWrapper>
      </Container>
    </Wrapper>
  );
};
