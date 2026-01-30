import { device } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.secondaryBg};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DesktopWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 60px);
  margin-left: -30px;
  ${device.laptop} {
    gap: 30px;
    width: 100%;
    margin-left: 0;
  }
`;
