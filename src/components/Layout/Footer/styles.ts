import { device } from "@/consts";
import { Button } from "@/components/UI";
import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 70px;
  ${device.laptop} {
    padding: 40px 20px 110px;
  }
`;

export const Container = styled.article`
  width: 100%;
  max-width: 1200px;
  height: max-content;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  ${device.laptop} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Block = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: ${({ theme }) => theme.tertiaryBg};
  ${device.laptop} {
    width: 100%;
    height: 240px;
  }
`;

export const LocationButton = styled(Button)`
  width: 100%;
`;
