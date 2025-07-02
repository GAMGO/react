import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appv1 from './App_v1.jsx'
import Ar from './Arraytest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ar /> */}
    <Appv1 />
    {/* <App /> */}
  </StrictMode>,
)
