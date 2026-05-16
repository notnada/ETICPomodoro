import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logoetic from './assets/logoetic.svg'

document.title = 'ETIC Focus'

const favicon = document.querySelector("link[rel~='icon']")
if (favicon) {
  favicon.href = logoetic
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
