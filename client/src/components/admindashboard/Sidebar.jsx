import React from "react";
import Logo from "../../assets/web-logo2.png";
import { PiCirclesThreePlus } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
// import { FiBell } from "react-icons/fi";
function Sidebar() {
  return (
    <div>
      {/* <div className="topnavbar flex items-center top-0 z-20   me-5">
          <div className="namesection p-5 w-[90%]">
            <div className="name font-bold text-3xl">
              <h1>Hi, Samantha W.</h1>
            </div>
            <div className="suggestion">
              <p>Let's track your health daily</p>
            </div>
          </div>
          <div className="iconsection flex items-center justify-evenly w-[15%] text-xl">
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
           </div> */}
      <div className="slider  bg-darks text-white h-80% rounded-tl-extra-large rounded-bl-extra-large pt-5 ">
        <div className="logo">
          <img className="logoofdashboard" src={Logo} alt="" />
        </div>
        <div className="icons flex items-center justify-items-center flex-col gap-8  text-2xl mt-9">
          <div className="firsticon">
            <a href="dashboard">
              {" "}
              <PiCirclesThreePlus />
            </a>
          </div>
          <div className="secondicon">
            <a href="appointment">
              {" "}
              <MdOutlineCalendarMonth />
            </a>
          </div>
          <div className="thirdicon">
            <FaUsers />
          </div>
          <div className="forthicon">
            <FaAmbulance />
          </div>
          <div className="fifthicon">
            <SiCashapp />
          </div>
          <div className="sixthicon">
            <MdAttachEmail />
          </div>
          <div className="seventh">
            <AiFillMessage />
          </div>
          <div className="setting mb-5">
            <MdSettings />
          </div>
          <div className="question mt-14">
            <FaRegQuestionCircle />
          </div>
          <div className="logot">
            <FiLogOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
