import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Welcome from '/components/Welcome.jsx'
// import LT from '/components/LightToggle.jsx'
// import IS from '/components/InputState.jsx'
import Cal from './components/Calculator.jsx'

//React.StrictMode 에서 React 생략 가능(ReactDOM도 생략가능)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Welcome/>
    <LT/> */}
    {/* <IS/> */}
    <Cal/>
  </StrictMode>,
)
