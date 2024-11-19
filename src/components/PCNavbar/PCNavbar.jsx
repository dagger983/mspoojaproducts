import React from "react";
import "./PCNavbar.css";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
const PCNavbar = () => {
  return (
    <>
      <div className="pcnavbar">
        <div>
          <img src="/mspoojalogo.png" alt="" />
        </div>
        <div>
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div>
          <p>
            <IoSearch />
          </p>
          <p>
            <AiOutlineShoppingCart />
          </p>
          <p>
            <GoPerson />
          </p>
        </div>
      </div>
    </>
  );
};

export default PCNavbar;
