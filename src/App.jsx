
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'  

import Navbar from "./Navbar"

import Home from "./Home"
import Categories from "./Categories"
import Cart from "./Cart"
import Notify from "./Notify"
import Error404 from "./Error404" 
import Login from "./Login"
import { Route, Routes } from "react-router-dom"



function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart/>} /> {/* Order page inside Cart page */}
        <Route path="/notify" element={<Notify />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error404 />} />

      </Routes>
    </>
  )
}

export default App