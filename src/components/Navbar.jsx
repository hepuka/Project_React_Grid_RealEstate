import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseFill />
            Eladó
          </span>
          Ingatlanok
        </h1>
        <button className="btn">
          Belépés<script src=""></script>
        </button>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#">Főoldal</a>
          </li>
          <li>
            <a href="#">Keresés</a>
          </li>
          <li>
            <a href="#">Rólunk</a>
          </li>
          <li>
            <a href="#">Kapcsolat</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
