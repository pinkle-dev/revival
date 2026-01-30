import styled from "styled-components";
import { Text } from "@/components/UI";
import { device } from "@/consts";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.primaryBg};
  ${device.laptop} {
    border: none;
    border-radius: 0;
    max-width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 240px;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px;
  ${device.laptop} {
    border: none;
    border-radius: 0;
    max-width: 100%;
    padding: 24px 0 0;
  }
`;

export const DescriptionText = styled(Text)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  ${device.laptop} {
    -webkit-line-clamp: 4;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${device.laptop} {
    display: none;
  }
`;
