import { Text } from "@/components/UI";
import { device } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.article<{ $show: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: max-content;
  padding: 20px 10px;
  background: ${({ theme }) => theme.secondaryBg};
  position: fixed;
  right: 0;
  bottom: 200px;
  border-radius: 12px 0 0 12px;
  cursor: pointer;
  transition: padding 0.5s;
  ${device.laptop} {
    display: none;
  }
`;

export const VerticalText = styled(Text)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;
