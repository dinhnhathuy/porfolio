import styled from 'styled-components';
import { SectionContainer } from '../styles/container';
import { DynamicIcon } from '../utils/dynamicIcon';

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  padding: 1rem;
  margin: 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: 1000px
`
const Right = styled.div`
  width: 29%;
  position: relative;
`

const RightSticky = styled.div`
  position: sticky;
  top: 30%;
`

const techs = [
  {
    name: "ReactJS",
    icon: "FaReact",
  },
  {
    name: "Next.js",
    icon: "TbBrandNextjs",
  },
  {
    name: "Vue.js",
    icon: "FaVuejs",
  },
  {
    name: "Nuxt.js",
    icon: "SiNuxtdotjs",
  },
  {
    name: "WordPress",
    icon: "FaWordpressSimple",
  },
  {
    name: "Serverless",
    icon: "SiServerless",
  },
];

const Bandge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #7a7a7a;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 400;
  color: #c4c4c4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: default;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`; 

const SectionProjects = () => {

  return (
    <SectionContainer>
      <Title>Selected Works</Title>
      <Wrapper>
        <div style={{width: '69%', height: '50px', background: 'red'}}></div>
        <Right>
          <RightSticky>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {
                techs.map(tech => (
                  <Bandge key={tech.name}>
                    <DynamicIcon name={tech.icon} pack={tech.pack} />
                    {tech.name}
                  </Bandge>
                ))
              }
            </div>
          </RightSticky>
        </Right>
      </Wrapper>
    </SectionContainer>
  )
}

export default SectionProjects