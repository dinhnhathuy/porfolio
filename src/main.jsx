import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'

const theme = {
  main: "mediumseagreen"
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
