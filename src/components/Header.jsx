import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="header">
      <div className="content">
        <h1>Find the perfect place</h1>
        <p className="search-text">
          Search the largest selection of luxury high-rise apartments,
          multi-family homes, and luxury homes.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter Keyword.." />
          </div>
          <div className="radio">
            <input type="radio" name="choose" checked />
            <label>Buy</label>
            <input type="radio" name="choose" />
            <label>Rent</label>
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
