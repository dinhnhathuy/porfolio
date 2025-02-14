import { keyframes, css } from "styled-components";

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const fadeDownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const FadeIn = css`
  opacity: 0;
  animation: ${fadeAnimation} linear both;
  animation-timeline: view();
  animation-range: entry 10% contain 45%;
`
const FadeUp = css`
  opacity: 0;
  animation: ${fadeUpAnimation} linear both;
  animation-timeline: view();
  animation-range: entry 10% contain 45%;
`
const FadeDown = css`
  opacity: 0;
  animation: ${fadeDownAnimation} linear both;
  animation-timeline: view();
  animation-range: entry 10% contain 45%;
`
export {
  fadeAnimation,
  fadeUpAnimation,
  fadeDownAnimation,
 
  FadeIn,
  FadeUp,
  FadeDown,
}
