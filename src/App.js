import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./page/home.js";
import CardProduct from "./page/cardProduct.js";
import Cart from "./page/cart.js";
import Category from "./page/category.js";
import Contact from "./page/contact.js";
import DeleveryPayment from "./page/deleveryPayment.js";
import AboutUs from './page/aboutUs.js';
import WebsiteUsageInstructions from './page/websiteUsageInstructions.js';
import SpecialistConsultation from './page/specialistConsultation.js';
import Reviews from './page/reviews.js';
import Smile from './page/smile.js';
import MenuFooter from './component/footer/menu_footer.js';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CardProduct" element={<CardProduct/>} />
          <Route path="/Cart/:id" element={<Cart/>} />
          <Route path="/Category/" element={<Category/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/DeleveryPayment" element={<DeleveryPayment/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/WebsiteUsageInstructions" element={<WebsiteUsageInstructions />} />
          <Route path="/SpecialistConsultation" element={<SpecialistConsultation />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Smile" element={<Smile />} />
        </Routes>
        <MenuFooter />
      </BrowserRouter>
    );
  }
  
  export default App;
