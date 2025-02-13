import MainHeader from './components/mainHeader'
import SectionIntro from './components/sectionIntro'
import SectionExp from './components/sectionExp'
import './App.css'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
`

function App() {

  return (
    <Container>
      <MainHeader />
      <SectionIntro/>
      <SectionExp />
    </Container>
  )
}

export default App
