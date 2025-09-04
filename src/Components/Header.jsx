import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import {
  FaChevronDown,
  FaRegUserCircle,
  FaBoxOpen,
  FaGift,
} from "react-icons/fa";
import { GiNinjaStar } from "react-icons/gi";
import { CiHeart, CiMenuKebab } from "react-icons/ci";
import { TbGiftCardFilled } from "react-icons/tb";
// ✅ from react-icons/io5 (Ionicons v5)
import { IoCartOutline } from "react-icons/io5";

// ✅ from react-icons/io (Ionicons v2)
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import Profile from "../Profile";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUser, setIsNotUser] = useState(true);
  const [loadPage, setLoadPage] = useState(false);

  const loginDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);

  const checkUser = () => {
    if (isUser) {
      setLoadPage(true);
    } else {
      alert("hi");
    }
    console.log(setIsNotUser);
  };

  return (
    <div className="shadow-md">
      <div className="flex justify-around items-center px-20 py-2 bg-blue-600 ">
        {/* Logo */}
        <div>
          <Link to="/">
            <div className="text-white font-bold text-3xl italic">Lakshaya</div>
            <span className="text-yellow-500 font-bold text-xl leading-[0.75rem]">
              E-Commerce
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="border border-gray-300 flex items-center gap-3 px-4 w-[50rem] py-[0.5rem] bg-slate-100 rounded-md">
          <IoSearch className="text-2xl text-gray-500" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full h-full border-none outline-none text-gray-700 bg-slate-100 "
          />
        </div>

        {/* Login Dropdown */}
        <div className="relative" ref={loginDropdownRef}>
          <button
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            onMouseLeave={() => setIsLoginOpen(false)}
            className="text-blue-600 bg-white px-[1rem] py-[0.4rem] rounded-lg focus:outline-none 
              flex justify-center items-center gap-[0.5rem] text-[1.1rem] font-medium "
          >
            <FaRegUserCircle />
            Login
            <FaChevronDown className="text-[0.6rem] transition-transform hover:rotate-180 duration-300" />
          </button>

          {isLoginOpen && (
            <div className="absolute right-[-5] w-[15rem] bg-white text-black border rounded-lg shadow-lg z-10 ">
              <ul className="">
                <li className="px-4 py-3 border-b-2 border-grey-400 hover:bg-gray-100 cursor-pointer flex justify-between">
                  <Link href="#">New Customer ?</Link>
                  <Link href="#">Sign In</Link>
                </li>
                <li
                  onClick={checkUser}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Profile
                </li>
                {loadPage && <Profile />}
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <GiNinjaStar /> Flipkart Plus Zone
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <FaBoxOpen /> Orders
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <CiHeart /> Wishlist
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <FaGift /> Rewards
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <TbGiftCardFilled /> Gift Card
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="text-white font-medium gap-[0.5rem] flex items-center flex-row">
          <IoCartOutline className="text-[1.6rem] font-medium" />
          Cart
        </div>

        {/* Seller */}
        <div className="text-white font-medium gap-[0.5rem] flex items-center flex-row">
          <BsShop className="text-[1.3rem] font-medium " />
          Become a Seller
        </div>

        {/* Links */}
        <div className="text-[1rem] font-medium text-white">
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="text-white font-medium text-[1rem]">
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="text-white font-medium text-[1rem]">
          <Link to="/allservices">All Services</Link>
        </div>
        <div  className="text-white font-medium text-[1rem]">
          <Link to="/crud">Crud</Link>
        </div>
        {/* Menu Dropdown */}
        <div className="relative z-10" ref={menuDropdownRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white px-[0.7rem] py-[0.6rem] rounded-lg focus:outline-none 
              flex justify-center items-center gap-[0.1rem] text-[1.2rem] font-medium"
          >
            <CiMenuKebab />
          </button>

          {isMenuOpen && (
            <div className="absolute left-[-10rem] w-[17rem] bg-white text-black border rounded-lg shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <IoIosNotificationsOutline className="text-[1.2rem]" />
                    Notification Preference
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <FaHeadphonesAlt className="text-[1.1rem]" />
                    24*7 Customer Care
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <MdOutlineAutoGraph className="text-[1.3rem]" /> Advertise
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" className="flex items-center gap-[0.5rem]">
                    <FiDownload className="text-[1.3rem]" /> Download App
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
