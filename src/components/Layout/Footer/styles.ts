import { device } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  padding: 40px;
  justify-content: center;
  align-items: center;
  ${device.laptop} {
    padding: 20px;
  }
`;
