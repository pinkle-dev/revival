import { device } from "@/consts/device";
import styled from "styled-components";

export const Wrapper = styled.article`
  width: 100%;
  max-width: 1200px;
  height: max-content;
  padding: 80px 70px;
  display: flex;
  flex-direction: column;
  ${device.laptop} {
    padding: 40px 20px;
  }
`;
