import styled from "styled-components";
import { device } from "@/consts";

interface DividerProps {
  $mobVertical?: number;
  $mobHorizontal?: number;
  $desktopVertical?: number;
  $desktopHorizontal?: number;
}

export const DividerWrapper = styled.div<DividerProps>`
  margin: ${({ $desktopHorizontal, $desktopVertical }) =>
    `${($desktopVertical || 0) / 2}px ${($desktopHorizontal || 0) / 2}px`};
  ${device.laptop} {
    margin: ${({ $mobHorizontal, $mobVertical }) =>
      `${($mobVertical || 0) / 2}px ${($mobHorizontal || 0) / 2}px`};
  }
`;
