// Dependencies
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

// import sass file
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
          <Route path="/NewsBazar" element={<Home />} />
          <Route
            path="/sports"
            element={<News newsCategory={"sports"} count={50} />}
          />
          <Route
            path="/technology"
            element={<News newsCategory={"technology"} count={50} />}
          />
          <Route
            path="/stockmarket"
            element={<News newsCategory={"stockmarket"} count={50} />}
          />
          <Route
            path="/cricket"
            element={<News newsCategory={"cricket"} count={50} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
