import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import AboutUs from './page/About';
import ContactUs from './page/Contact';
import Feature from './page/Feature';
import MainLayout from './layouts/Main-Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="feature" element={<Feature />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
