import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/web-logo2.png";
import { PiCirclesThreePlus } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaAmbulance, FaUsers, FaRegQuestionCircle } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { MdAttachEmail, MdSettings } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Sidebar() {
  return (
    <div className="top-0">
      <nav className="flex w-screen justify-between p-5  bg-gray-800 text-white">
        <div className="logo">Icon here</div>
        <div className="icons w-[9rem] flex justify-between">
          <div className="search">
            <IoSearch />
          </div>
          <div className="notification">
            <FiBell />
          </div>
          <div className="profile">
            <CgProfile />
          </div>
        </div>
      </nav>

      <div className="slider bg-darks text-white h-screen w-[6rem]">
        <div className="logo h-[80px] w-[80px] ms-3">
          <img className="logoofdashboard" src={Logo} alt="Logo" />
        </div>
        <div className="icons flex items-center justify-items-center flex-col gap-8 h-95% text-lg mt-9">
          {/* <Link to="/dashboard" className="flex items-center">
            <PiCirclesThreePlus />
          </Link> */}
          <Link to="/appointment" className="flex items-center">
            <MdOutlineCalendarMonth />
          </Link>
          <Link to="/users" className="flex items-center">
            <FaUsers />
          </Link>
          <Link to="/ambulance" className="flex items-center">
            <FaAmbulance />
          </Link>
          <Link to="/cashapp" className="flex items-center">
            <SiCashapp />
          </Link>
          <Link to="/email" className="flex items-center">
            <MdAttachEmail />
          </Link>
          <Link to="/messages" className="flex items-center">
            <AiFillMessage />
          </Link>
          <Link to="/settings" className="flex items-center mb-5">
            <MdSettings />
          </Link>
          <Link to="/help" className="flex items-center mt-14">
            <FaRegQuestionCircle />
          </Link>
          <Link to="/logout" className="flex items-center mb-3">
            <FiLogOut />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
