import { device } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  gap: 24px;
  ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;
