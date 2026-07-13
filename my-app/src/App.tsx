import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import Product from './page/Product';
import Service from './page/Service';
import Feature from './page/Feature';
import FAQ from './page/FAQ';
import Testimonial from './page/Testimonial';
import MainLayout from './layouts/Main-Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="service" element={<Service />} />
          <Route path="feature" element={<Feature />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="testimonial" element={<Testimonial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
