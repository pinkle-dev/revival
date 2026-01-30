import type { Directions } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.div<{ $direction: Directions }>`
  width: 100%;
  display: flex;
  justify-content: ${({ $direction }) => $direction};
  align-items: center;
`;
