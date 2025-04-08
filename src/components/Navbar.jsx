import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
import { FaSearch, FaShoppingCart, FaUser, FaGem, FaRing, FaGift, FaBars, FaTimes } from "react-icons/fa";
import { IoIosMicrophone } from "react-icons/io";
import { BsCollection, BsDiamond } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GiNecklace, GiEarrings } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* ✅ 1st Row: Logo + Search Bar + User Icons */}
      <div className="nav-top">
        <div className="nav-logo">
          <Link to="/">Jewellery</Link>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search for Jewellery, Gold, Diamond..." />
          <FaSearch className="search-icon" />
          <IoIosMicrophone className="mic-icon" />
        </div>
        <div className="nav-icons">
          <FaGem />
          <BsCollection />
          <AiOutlineHeart />
          <FaUser />
          <FaShoppingCart className="cart-icon" />
          {/* Mobile Toggle Button */}
          <button className="nav-toggle md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ 2nd Row: Navigation Links */}
      <div className={`nav-links ${isOpen ? "flex" : "hidden"} flex-col absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:bg-transparent md:shadow-none`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}><GiNecklace /> All Jewellery</NavLink>
        <NavLink to="/gold" className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Gold</NavLink>
        <NavLink to="/diamond" className={({ isActive }) => (isActive ? "active" : "")}><BsDiamond /> Diamond</NavLink>
        <NavLink to="/earrings" className={({ isActive }) => (isActive ? "active" : "")}><GiEarrings /> Earrings</NavLink>
        <NavLink to="/rings" className={({ isActive }) => (isActive ? "active" : "")}><FaRing /> Rings</NavLink>
        <NavLink to="/daily-wear" className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Daily Wear</NavLink>
        <NavLink to="/collections" className={({ isActive }) => (isActive ? "active" : "")}><BsCollection /> Collections</NavLink>
        <NavLink to="/wedding" className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Wedding</NavLink>
        <NavLink to="/gifting" className={({ isActive }) => (isActive ? "active" : "")}><FaGift /> Gifting</NavLink>
        <NavLink to="/more" className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> More</NavLink>


<NavLink to="/jewellery-repair" className={({ isActive }) => (isActive ? "active" : "")}>
  <FaGem /> Jewellery Repair
</NavLink>

        <NavLink to="/exchange" className={({ isActive }) => (isActive ? "active" : "")}>
  <FaGem /> ExchangeForm
</NavLink>

<NavLink to="/order" className={({ isActive }) => (isActive ? "active" : "")}>
  <FaGem /> Jewellery List
</NavLink>

<NavLink to="/video" className={({ isActive }) => (isActive ? "active" : "")}>
  <FaGem /> VideoStream
 </NavLink>






<NavLink to="/notification" className={({ isActive }) => (isActive ? "active" : "")}>
  <FaGem /> Notifications  
</NavLink>
{/* <NavLink to="/video-call" className={({ isActive }) => (isActive ? "active" : "")}>
  <FaGem /> Video Call
</NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;



