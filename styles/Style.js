import styled from "styled-components";
import { keyframes } from "styled-components";
import icon from "../Components/Icon.js";

export const DivError = styled.div`
  background-color: #d64747;
  font-size: ${({ fontSize }) => `${fontSize || "16px"}`};
  color: ${({ color }) => `${color || "white"}`};
  font-family: "nunito-black";
  padding: 8px 0px 8px 25px;
  border-radius: 24px 0px 0px 24px;
`;
export const BaseAnimation = styled.div`
  animation-duration: ${(props) => props.duration || "1s"};
  animation-timing-function: ${(props) => props.timingFunction || "ease"};
  animation-delay: ${(props) => props.delay || "0s"};
  animation-iteration-count: ${(props) => props.iterationCount || "1"};
  animation-direction: ${(props) => props.direction || "normal"};
  animation-fill-mode: ${(props) => props.fillMode || "both"};
  animation-play-state: ${(props) => props.playState || "running"};
  display: ${(props) => props.display || "block"};
`;

const FadeInAnimation = keyframes`  
  from { transform: translateX(100%) }
  to { transform:translateX(0%) }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;

export const Svg = styled(icon)`
  ${({ css }) => `${css}`};

  cursor: pointer;
`;
