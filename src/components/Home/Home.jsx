import React from "react";
import { Link } from "react-router-dom";

import News from "../News/News";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <News newsCategory={"sports"} count={8} />
        <p><Link to="/sports">Read More</Link></p>
      </div>

      <div className="wrapper">
        <News newsCategory={"technology"} count={8} />
        <p><Link to="/technology">Read More</Link></p>
      </div>
      
      <div className="wrapper">
        <News newsCategory={"stock"} count={8} />
        <p><Link to="stock">Read More</Link></p>
      </div>
    </div>
  );
};

export default Home;
