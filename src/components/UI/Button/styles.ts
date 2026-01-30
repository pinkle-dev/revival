import { device } from "@/consts/device";
import styled, { css } from "styled-components";
import { Link } from "react-router";

const styles = css`
  cursor: pointer;
  border: none;
`;

const underlineHoverCss = css`
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.quaternaryText};
    left: 0;
    bottom: -6px;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }

  ${device.laptop} {
    &::after {
      display: none;
    }
  }
`;

export const GhostButton = styled.button`
  font-size: 24px;
  background: none;
  width: max-content;
  height: max-content;
  padding: 0;
  position: relative;
  color: ${({ theme }) => theme.quaternaryText};
  ${styles};
  ${underlineHoverCss}

  ${device.laptop} {
    font-size: 24px;
  }
`;

export const FilledButton = styled.button`
  width: max-content;
  font-size: 20px;
  border-radius: 8px;
  color: ${({ theme }) => theme.primaryText};
  background: ${({ theme }) => theme.quinaryBg};
  a {
    display: block;
    width: 100% !important;
    height: 100%;
    padding: 16px 32px;
  }
  ${styles};
`;

export const LinkButton = styled(Link)`
  width: max-content;
  height: max-content;
  font-size: 24px;
  padding: 0;
  color: ${({ theme }) => theme.quaternaryText};
  background: none;
  position: relative;
  ${styles};
  ${underlineHoverCss}

  ${device.laptop} {
    font-size: 20px;
  }
`;
