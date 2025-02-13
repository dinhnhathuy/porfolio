import styled, { keyframes } from 'styled-components';
import { SectionContainer } from '../styles/container';
const Span = styled.span`
  font-size: 2rem;
  padding: 1rem;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  gap: 1rem;
  max-width: 1000px;
  
  &.visible {
    animation: ${fadeIn} 0.8s ease forwards;
  }
`


const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  padding: 0 1rem;
  margin: 0
`

const SectionIntro = () => {
  return (
    <SectionContainer>
      <IntroWrapper rapper className="intro-wrapper">
        <Span>Hello</Span>
        <Heading>I&apos;m Ted Dinh</Heading>
        <Heading>A front-end developer</Heading>
      </IntroWrapper>
    </SectionContainer>
  )
}

export default SectionIntro