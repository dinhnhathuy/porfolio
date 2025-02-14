import styled from 'styled-components';
import { SectionContainer } from '../styles/container';
import { fadeAnimation } from '../styles/animation';

const Span = styled.span`
  font-size: 2rem;
  padding: 1rem;
`


const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  gap: 1rem;
  max-width: 1000px;
  animation: ${fadeAnimation} 1s ease;
  animation-timeline: both;
`


const Heading = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  padding: 0 1rem;
  margin: 0;
`

const SectionIntro = () => {
  return (
    <SectionContainer>
      <IntroWrapper rapper className="intro-wrapper">
        <Span>Hello</Span>
        <Heading>I&apos;m Hans Dinh</Heading>
        <Heading>A front-end developer</Heading>
      </IntroWrapper>
    </SectionContainer>
  )
}

export default SectionIntro