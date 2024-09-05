import * as React from "react";
import Logo from "../../assets/web-logo2.png";
import Hospital from "../../assets/hospital.png";
import calender from "../../assets/calender.png";

import Doc from "../../assets/doctorhd.png";
import Button from "../../layouts/Button";

import { FaRegCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import Chart from "./Chart";
import Sidebar from "./Sidebar";

function Admindashboard() {
  return (
<<<<<<< HEAD
    <section className="maincontainer flex w-screen  h-screen p-3">
<div className="side w-[5%]">
<Sidebar />
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
                      <div className="position">Dermatologist</div>
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
=======
    <section className="flex">
      {/* Sidebar */}
      <aside className="sidebar w-20 fixed top-0 left-0 flex flex-col">
        <Sidebar />
      </aside>
>>>>>>> 0218faea73b45846adcc1ffd0b955a0f67ba110e

      {/* Main Content */}
      <main className="flex ml-24 mt-14 p-4   w-full">
        <div className="flex-1 h-full flex-col">
          <div className="flex items-center mb-8">
            <div className="profilephoto bg-profile rounded-full w-24 h-24 flex items-center justify-center">
              <div className="photo">
                <img className="rounded-full w-50 h-50 object-cover" src={Doc} alt="Profile" />
              </div>
            </div>
            <div className="text flex flex-col ml-8">
              <div className="text1 text-2xl font-semibold">
                <h1>Check your condition !!!</h1>
              </div>
              <div className="text2 text-center text-xs font-bold mt-2">
                <p>Check your every situation and activities</p>
              </div>
              <div className="btn mt-3">
                <Button title="Check it now" />
              </div>
            </div>
          </div>
          
          <div className="containerthird flex-1 bg-white">
            <div className="cardnoone flex">
              <div className="appoinmentcard p-5 w-[60%] flex flex-col">
                <div className="app mb-4">
                  <div className="title text-xl font-medium">
                    <h1>Upcoming Appointment</h1>
                  </div>
                  <div className="appoinsec flex mt-4">
                    <div className="hospitalphoto text-center w-[30%]">
                      <div className="photo">
                        <img src={Hospital} alt="hospitalphoto" className="w-48 h-28 object-cover" />
                      </div>
                      <div className="hospitalname">ABCD</div>
                      <div className="hospitaladdress">Sitapaila, Kathmandu</div>
                    </div>
                    <div className="doctorphoto flex flex-col items-center w-full ml-4">
                      <div className="cards flex items-center">
                        <div className="photo">
                          <img src={Doc} alt="doctorsphoto" className="h-14 w-14" />
                        </div>
                        <div className="doctorname ml-4">
                          <div className="name">Dr. Abhinash Khatri</div>
                          <div className="position">Dermatologist</div>
                        </div>
                        <div className="videocall ml-4">
                          <Button title="Video Call" />
                        </div>
                      </div>
                      <div className="calendar flex items-center justify-evenly bg-calendar w-[70%] h-12 rounded-lg mt-5">
                        <div className="calendarparts flex items-center justify-evenly w-1/2">
                          <div className="calendarlogo">
                            <FaRegCalendarDays />
                          </div>
                          <div className="calendardate">11, 2021</div>
                        </div>
                        <div className="timeparts flex items-center justify-evenly w-1/2">
                          <div className="tilelogo">
                            <LuAlarmClock />
                          </div>
                          <div className="time">12:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="cardsection mt-5">
                  <div className="chart1 mb-5">
                    <div className="title font-semibold text-xl">Patient Activities</div>
                    <div className="todaydatehere">
                      <p>Today, 31 Aug 2024</p>
                    </div>
                  </div>
                  <div className="chart2 mt-10">
                    <Chart />
                  </div>
                </div>
              </div>
              <div className="listofappointments w-[40%] p-5">
                <div className="apponelist">
                  <div className="heading text-xl font-medium mb-4">
                    <h1>List Of Appointment</h1>
                  </div>
                  <div className="calendarphoto">
                    <div className="photo">
                      <img src={calender} alt="calender" className="h-4/5 w-4/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardtwo p-5 mt-5">
              <hr />
              <div className="chartcontainer mt-5">
                <h1>This is the chart container</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Admindashboard;
