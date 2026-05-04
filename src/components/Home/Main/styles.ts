import { device } from "@/consts/device";
import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  max-height: 768px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  ${device.laptop} {
    max-height: 100vh;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  background: ${({ theme }) => theme.tertiaryBg};
  ${device.laptop} {
    height: 100%;
    width: auto;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.secondaryText};
  opacity: 0.5;
  position: absolute;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${device.laptop} {
    align-items: center;
    width: calc(100% - 40px);
  }
`;

export const ArrowWrapper = styled.a`
  display: none;
  position: absolute;
  bottom: 100px;
  left: calc(50% - 35px);
  z-index: 5;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  ${device.laptop} {
    display: flex;
  }
`;

export const ArrowIcon = styled.img`
  width: 70px;
  height: 70px;
`;
