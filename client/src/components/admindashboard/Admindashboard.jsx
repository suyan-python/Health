import * as React from "react";
import Logo from "../../assets/web-logo2.png";
import Hospital from "../../assets/hospital.png";
import calender from "../../assets/calender.png";
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
import Doc from "../../assets/doctorhd.png";
import Button from "../../layouts/Button";
import { FiBell } from "react-icons/fi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import Chart from "./Chart";

function Admindashboard() {
  return (
    <section className="maincontainer flex w-screen  h-screen p-3">
      <div className="slider  bg-darks text-white h-80% rounded-tl-extra-large rounded-bl-extra-large pt-5 w-[5%]">
        <div className="logo">
          <img className="logoofdashboard" src={Logo} alt="" />
        </div>
        <div className="icons flex items-center justify-items-center flex-col gap-8  text-2xl mt-9">
          <div className="firsticon">
            <PiCirclesThreePlus />
          </div>
          <div className="secondicon">
            <MdOutlineCalendarMonth />
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
      <div className="containersecond h-80% bg-side w-[20%]">
        <div className="topcontainer  w-full ">
          <div className="profilephoto bg-profile rounded-full w-24 h-24 flex items-center justify-center mt-8 ms-[80px]">
            <div className="photo">
              <img
                className="rounded-full w-50 h-50 object-cover"
                src={Doc}
                alt="Profile"
              />
            </div>
          </div>
          <div className="text flex items-center justify-center  flex-col">
            <div className="text1  ">
              <h1>Check your condition !!!</h1>
            </div>
            <div className="text2  text-center text-xs font-bold ">
              <p>Check your every situtation and activities</p>
            </div>
          </div>
          <div className="btn flex items-center justify-center  mt-3">
            <Button title="Check it now" />
          </div>
        </div>
      </div>
      <div className="containerthird h-80% w-full bg-white">
        <div className="topnavbar flex items-center  me-5">
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
        </div>
        <div className="cardnoone flex">
          <div className="appoinmentcard p-5 w-[60%] flex h-screen  flex-col">
            <div className="app">
              <div className="title text-xl font-medium w-full">
                <h1>Upcoming Appoinment</h1>
              </div>
              <div className="appoinsec flex ">
                <div className="hospitalphoto text-center w-[30%]">
                  <div className="photo">
                    <img
                      src={Hospital}
                      alt="hospitalphoto"
                      className="w-48 h-28 object-cover"
                    />
                  </div>
                  <div className="hospitalname">ABCD</div>
                  <div className="hospitaladdress">Sitapaila,kathmandu</div>
                </div>
                <div className="doctorphoto flex justify-center w-full  items-center flex-col">
                  <div className="cards flex justify-center">
                    <div className="photo">
                      <img src={Doc} alt="doctorsphoto" className="h-14 w-14" />
                    </div>
                    <div className="doctorname">
                      <div className="name">Dr.Abhinash Khatri</div>
                      <div className="position">Deratologist</div>
                    </div>
                    <div className="videocall">
                      <Button title="video call" />
                    </div>
                  </div>
                  <div className="calender  flex  items-center justify-evenly  bg-calender w-[70%] h-12 rounded-lg mt-5 ">
                    <div className="calenderparts flex items-center justify-evenly w-1/2">
                      <div className="calenderlogo">
                        <FaRegCalendarDays />
                      </div>
                      <div className="calenderdate"> 11,2021</div>
                    </div>
                    <div className="timeparts flex items-center justify-evenly w-1/2 ">
                      <div className="tilelogo">
                        <LuAlarmClock />
                      </div>
                      <div className="time"> 12:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/*appended here*/}
            <br></br>
            <hr />
            <div className="cardsecton">
              <div className="chart1">
                <div className="title font-semibold text-xl mt-5">
                  Patient Activities
                </div>
                <div className="todaydatehere">
                  <p>today, 31 Aug 2024</p>
                </div>
              </div>
              <div className="chart2 mt-10">
                <Chart/>
              </div>
            </div>
          </div>
          <div className="Listofappoinments  w-[40%] p-5 h-full">
            <div className="apponelist">
              {" "}
              <div className="heading text-xl font-medium">
                <h1>List Of Appoinment</h1>
              </div>
              <div className="calenderphoto">
                <div className="photo">
                  <img src={calender} alt="" className="h-4/5 w-4/5" />
                </div>
              </div>
            </div>
            <div className="cardsband">

            </div>
          </div>
        </div>
        {/* <div className="cardtwo p-5 w-[60%]">
         <hr />
        <div className="chartcontainer">
            <h1>This is the chartcontainer</h1>
        </div>
        </div> */}
      </div>
    </section>
  );
}

export default Admindashboard;
