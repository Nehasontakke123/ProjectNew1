// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import "../assets/css/Navbar.css";
// import {
//   FaSearch, FaShoppingCart, FaUser, FaGem, FaRing, FaGift,
//   FaBars, FaTimes, FaSave
// } from "react-icons/fa";
// import { IoIosMicrophone } from "react-icons/io";
// import { BsCollection, BsDiamond } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
// import { GiNecklace, GiEarrings } from "react-icons/gi";
// import { useCart } from "../context/CartContext"; // 🔥 Import your cart context

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { cartItems } = useCart(); // 🛒 Get cart items from context

//   return (
//     <nav className="navbar">
//       {/* ✅ Top Bar */}
//       <div className="nav-top">
//         <div className="nav-logo">
//           <Link to="/">Jewellery</Link>
//         </div>

//         <div className="nav-search">
//           <input type="text" placeholder="Search for Jewellery, Gold, Diamond..." />
//           <FaSearch className="search-icon" />
//           <IoIosMicrophone className="mic-icon" />
//         </div>

//         <div className="nav-icons">
//           <FaGem title="Gold" />
//           <BsCollection title="Collections" />
//           <AiOutlineHeart title="Wishlist" />
//           <FaSave title="Saved Items" />
//           <FaUser title="Profile" />

//           {/* 🛒 Cart icon with dynamic count */}
//           <div className="relative">
//             <FaShoppingCart className="cart-icon" title="Cart" />
//             {cartItems.length > 0 && (
//               <span className="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                 {cartItems.length}
//               </span>
//             )}
//           </div>

//           {/* ☰ Toggle for mobile */}
//           <button className="nav-toggle md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* ✅ Nav Links */}
//       <div className={`nav-links ${isOpen ? "flex" : "hidden"} flex-col absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:bg-transparent md:shadow-none`}>
//         <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><GiNecklace /> All Jewellery</NavLink>
//         <NavLink to="/gold" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Gold</NavLink>
//         <NavLink to="/diamond" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><BsDiamond /> Diamond</NavLink>
//         <NavLink to="/earrings" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><GiEarrings /> Earrings</NavLink>
//         <NavLink to="/rings" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaRing /> Rings</NavLink>
//         <NavLink to="/daily-wear" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Daily Wear</NavLink>
//         <NavLink to="/collections" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><BsCollection /> Collections</NavLink>
//         <NavLink to="/wedding" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Wedding</NavLink>
//         <NavLink to="/gifting" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGift /> Gifting</NavLink>
//         <NavLink to="/more" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> More</NavLink>
//         <NavLink to="/jewellery-repair" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Jewellery Repair</NavLink>
//         <NavLink to="/exchange" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> ExchangeForm</NavLink>
//         <NavLink to="/order" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Jewellery List</NavLink>
//         <NavLink to="/video" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> VideoStream</NavLink>
//         <NavLink to="/notification" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Notifications</NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
import {
  FaSearch, FaShoppingCart, FaUser, FaGem, FaRing, FaGift,
  FaBars, FaTimes, FaSave
} from "react-icons/fa";
import { IoIosMicrophone } from "react-icons/io";
import { BsCollection, BsDiamond } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GiNecklace, GiEarrings } from "react-icons/gi";
import { useCart } from "../context/CartContext"; // 🔥 Import your cart context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart(); // 🛒 Get cart items from context

  return (
    <nav className="navbar">
      {/* ✅ Top Bar */}
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
          <FaGem title="Gold" />
          <BsCollection title="Collections" />
          <AiOutlineHeart title="Wishlist" />
          <FaSave title="Saved Items" />
          <FaUser title="Profile" />

          {/* 🛒 Cart icon with dynamic count */}
          <div className="relative">
            <FaShoppingCart className="cart-icon" title="Cart" />
            {cartItems.length > 0 && (
              <span className="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* ☰ Toggle for mobile */}
          <button className="nav-toggle md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ Nav Links */}
      <div className={`nav-links ${isOpen ? "flex" : "hidden"} flex-col absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:bg-transparent md:shadow-none`}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><GiNecklace /> All Jewellery</NavLink>
        <NavLink to="/gold" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Gold</NavLink>
        <NavLink to="/diamond" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><BsDiamond /> Diamond</NavLink>
        <NavLink to="/earrings" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><GiEarrings /> Earrings</NavLink>
        <NavLink to="/rings" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaRing /> Rings</NavLink>
        <NavLink to="/daily-wear" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Daily Wear</NavLink>
        <NavLink to="/collections" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><BsCollection /> Collections</NavLink>
        <NavLink to="/wedding" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> Wedding</NavLink>
        <NavLink to="/gifting" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGift /> Gifting</NavLink>
        <NavLink to="/more" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}><FaGem /> More</NavLink>
        <NavLink to="/jewellery-repair" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}> Jewellery Repair</NavLink>
        <NavLink to="/exchange" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}> ExchangeForm</NavLink>
        <NavLink to="/order" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Jewellery List</NavLink>
        <NavLink to="/video" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>VideoStream</NavLink>
        <NavLink to="/notification" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Notifications</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
