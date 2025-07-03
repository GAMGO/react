import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Appv1 from './App_v1'
import Ar from './Arraytest.jsx'
// import { FocusInput } from './RefTest.jsx'
import { FocusInput, EffectAndRef, PreviousValue } from './RefHookTest.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
  <FocusInput/>
  <EffectAndRef/>
  <PreviousValue/>
  {/* <App/> */}
  {/* <Appv1/> */}
</StrictMode>
)
