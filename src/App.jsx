// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from "./Navbar";

import Home from "./Home";
import Sell from "./Sell";
import Cart from "./Cart";
import Notify from "./Notify";
import Error404 from "./Error404";
import Login from "./Login";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cart" element={<Cart />} />{" "}
        {/* Order page inside Cart page */}
        <Route path="/notify" element={<Notify />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
