import { device } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.div`
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
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0;
  ${device.laptop} {
    display: flex;
  }
`;
