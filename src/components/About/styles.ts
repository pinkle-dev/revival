import { device } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background: ${({ theme }) => theme.tertiaryBg};
  height: 100vh;
  max-height: 500x;
  ${device.laptop} {
    height: 100%;
    width: auto;
  }
`;

export const BackgroundContainer = styled.article<{ $light?: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ theme, $light }) =>
    $light ? theme.secondaryBg : theme.primaryBg};
`;

export const EventsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 15px;
`;

export const EventItem = styled.li<{ $last: boolean }>`
  display: flex;
  flex-direction: column;
  border-left: ${({ theme, $last }) =>
    $last ? "none" : `4px solid ${theme.tertiaryBg}`};
  padding: ${({ $last }) => ($last ? "0 0 0 24px" : "0 0 24px 24px")};
  position: relative;

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    left: ${({ $last }) => ($last ? "-14px" : "-17px")};
    top: -4px;
    background: ${({ theme }) => theme.tertiaryBg};
    border-radius: 40px;
  }
`;
