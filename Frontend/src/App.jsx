import { useState } from "react";

import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Cart from "./Pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopUp/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar setShowLogin={setShowLogin} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
