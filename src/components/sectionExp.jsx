import styled from 'styled-components';
import { SectionContainer } from '../styles/container';

const LeftSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 600px;
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  min-width: 300px;
  gap: 1rem;
`

const JobTitle = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`

const Company = styled.a`
  color: #fff;
  text-decoration: none;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;  
  }
`

const TimeLine = styled.span`
  opacity: 0.7;
  font-size: 0.8rem;
`

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.7;
`

const SectionExp = () => {
  return (
    <SectionContainer>
      <LeftSection>
        <p>As a final-year undergraduate pursuing a BTech degree in Computer Science and Engineering, I`m actively on the lookout for full-time gigs and freelance projects.
        </p>
        <p>As a final-year undergraduate pursuing a BTech degree in Computer Science and Engineering, I`m actively on the lookout for full-time gigs and freelance projects.
        </p>
      </LeftSection>
      <RightSection>
        <Title>Experiences</Title>
        <div>
          <JobTitle>Front-end developer</JobTitle>   <br />
          <Company target="_blank" href='https://google.com.vn'>Flix Communication</Company> <br />
          <TimeLine>2020 - present</TimeLine>  
        </div>        
          
        <div>
          <JobTitle>Front-end developer</JobTitle>   <br />
          <Company target="_blank" href='https://google.com.vn'>Flix Communication</Company> <br />
          <TimeLine>2020 - present</TimeLine>  
        </div>        
          
        <div>
          <JobTitle>Front-end developer</JobTitle>   <br />
          <Company target="_blank" href='https://google.com.vn'>Flix Communication</Company> <br />
          <TimeLine>2020 - present</TimeLine>  
        </div>        
          
        <div>
          <JobTitle>Front-end developer</JobTitle>   <br />
          <Company target="_blank" href='https://google.com.vn'>Flix Communication</Company> <br />
          <TimeLine>2020 - present</TimeLine>  
        </div>        
          
      </RightSection>
    </SectionContainer>
  );
}

export default SectionExp;