import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Navbar from './components/site/navbar.tsx'
import Footer from './components/footer/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>,
)
