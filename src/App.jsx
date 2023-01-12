// Dependencies
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

import "./app.scss";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sports" element={<News category={"sports"}/>} />
              <Route path="/technology" element={<News category={"technology"}/>} />
              <Route path="/stockmarket" element={<News category={"stockmarket"}/>} />
            </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
