import { device } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: max-content;
  padding: 20px 40px;
  background: ${({ theme }) => theme.secondaryBg};
  position: fixed;
  right: 0;
  bottom: 200px;
  border-radius: 12px 0 0 12px;
  cursor: default;
  transition: padding 0.5s;

  ${device.laptop} {
    padding: 0;
    position: static;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
