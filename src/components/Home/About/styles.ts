import styled from "styled-components";
import { Text } from "@/components/UI";
import { device } from "@/consts";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.primaryBg};
`;

export const Image = styled.img`
  width: 100%;
  min-height: 420px;
  object-fit: cover;
  background: ${({ theme }) => theme.tertiaryBg};
  ${device.laptop} {
    min-height: 240px;
  }
`;

export const DescriptionText = styled(Text)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  ${device.laptop} {
    -webkit-line-clamp: 5;
  }
`;
