import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="header">
      <div className="content">
        <h1>Találd meg álmaid otthonát</h1>
        <p className="search-text">
          Keressen luxuslakások, családi házak legnagyobb választékában
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Keresés..." />
          </div>
          <div className="radio">
            <input type="radio" name="choose" checked />
            <label>Kínálat</label>
            <input type="radio" name="choose" />
            <label>Albérlet</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
