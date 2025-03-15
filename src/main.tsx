import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/core/App.tsx'
import './app/styles/App.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
