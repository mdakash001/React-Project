import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import About from './page/About.tsx';
import Home from './page/Home.tsx';
import Contact from './page/Contact.tsx';
import Feature from './page/Feature.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
