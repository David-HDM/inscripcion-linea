import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { InscripcionProvider } from './context/InscripcionContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InscripcionProvider>
      <App />
    </InscripcionProvider>
  </StrictMode>,
)
