import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Error from "./Error";
import ProductListing from "./ProductListing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AllServices from "./AllServices";
import Crud from "./Crud";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/allservices" element={<AllServices />} />
          <Route path="*" element={<Error />} />
          <Route path="/productListing/:id" element={<ProductListing />} />
        </Routes>
      </BrowserRouter>
      <div><Footer/></div>
    </div>
  );
}

export default App;
