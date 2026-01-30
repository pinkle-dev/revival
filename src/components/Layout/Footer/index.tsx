import { Text } from "@/components/UI";
import { Wrapper } from "./styles";
import { TextElements } from "@/consts";

export const Footer = () => {
  const year = new Date().getUTCFullYear();
  const period = year === 2026 ? year : `2026-${year}`;
  return (
    <Wrapper>
      <Text element={TextElements.P5}>© {period} Revival Church</Text>
    </Wrapper>
  );
};
