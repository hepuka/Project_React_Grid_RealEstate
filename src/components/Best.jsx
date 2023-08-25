import React from "react";

import Apt1 from "../assets/apt1.jpeg";
import Apt2 from "../assets/apt2.jpeg";
import Apt3 from "../assets/apt3.jpeg";

const Best = () => {
  return (
    <div className="best">
      <h1>Legjobbra értékelt ingatlanok</h1>
      <div>
        <p>
          <span className="bold">Összes</span>
        </p>
        <p>Kereskedelmi ingatlanok</p>
        <p>Lakóházak</p>
        <p>Raktárak</p>
      </div>
      <div className="container">
        <img src={Apt1} alt="" />
        <img src={Apt2} alt="" />
        <img src={Apt3} alt="" />
      </div>
      <button className="btn">Tovább</button>
    </div>
  );
};

export default Best;
