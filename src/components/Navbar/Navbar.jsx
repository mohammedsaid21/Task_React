import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import "./index.css"

import Logo from "../../assets/Header.png"
import Bell from '../../assets/bell (5).png'
import Lang from '../../assets/eng.png'
import Person from '../../assets/person.png'
import { Link } from "react-router-dom";


const Navbar = () => {
  const [navBar, setNavbarActive] = useState(false);

  const navbarHandler = () => {
    setNavbarActive(!navBar);
  };
  // bg-teal-400
  return (
    <div className="px-8 py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center relative">
          <div className="relative">

            <div className="flex items-center">
              <div className="iconShow" onClick={navbarHandler}>
                <AiOutlineMenu />
              </div>

              <Link to="/" className="imgLogo">
                <img src={Logo} className="imgLogo object-contain" alt="" />
              </Link>

            </div>

          </div>
          <div className="relative">
            <ul className="hidden sm:flex justify-around px-4 items-center ">
              <li className="mr-2 text-lg"><img className="cursor-pointer" src={Bell} alt="" /></li>
              <li className="mr-2 pt-2 text-lg"><img className="cursor-pointer" src={Lang} alt="" /></li>

              <li className="mr-3 text-lg">
                <DropDown />
              </li>
            </ul>
          </div>

        </div>

        {/* hidden navbar */}
        <div className="relative">
          <ul
            className={`navbar ${navBar
              ? "flex-col justify-text py-4 items-center text-center transition-all bg-teal-100 "
              : "hidden transition-all"
              }`}>
            <li className="mb-3">
              <Link to="/" onClick={() => setNavbarActive(false)} className="mb-2 text-lg font-bold  transition-[0.5s]">
                الرئيسية
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/exhibitions" onClick={() => setNavbarActive(false)} className="mb-2 text-lg font-bold  transition-[0.5s]">
                قائمة المعارض
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/questionnaires" onClick={() => setNavbarActive(false)} className="mb-2 text-lg  font-bold transition-[0.5s]">
                الاستبيانات
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const DropDown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <>
      <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-medium text-[#24B3B9] rounded-full md:mr-0" type="button" onClick={toggleDropdown}>
        <img className="w-16 h-16 mr-2 rounded-full" src={Person} alt="user photo" />
        <div className="d-flex flex-col">
          <p className="text-[#777]">أهلا بك</p>
          <p>محمد أحمد</p>
        </div>

        <svg className="w-2.5 h-2.5 ml-3.5 mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          id="dropdownAvatarName"
          className="z-10 absolute top-[calc(100%+0.5rem)] right-0 hidden bg-red divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          {/* <div id="dropdownAvatarName2" className="z-10 hidden bg-red divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"> */}
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium ">Pro User</div>
            <div className="truncate">name@gmail.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
          </ul>
          <div className="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </div>
          {/* </div> */}
        </div>
      )}
    </>

  )
}