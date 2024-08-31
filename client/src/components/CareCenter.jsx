import React from "react";
import { MdLocalPolice } from "react-icons/md";
import { MdTraffic } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { PiFireTruckFill } from "react-icons/pi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GiRobberMask } from "react-icons/gi";
import { FaChildReaching } from "react-icons/fa6";
import { TbSolarElectricity } from "react-icons/tb";
import { BiSolidDonateBlood } from "react-icons/bi";
import { LuCross } from "react-icons/lu";
import { FaVanShuttle } from "react-icons/fa6";

function CareCenter() {
  return <div>
    Care Center
    <div className="emergency-nums bg-gradient-to-r from-green-100 to-white rounded-2xl p-3 shadow-md w-1/3 h-4/5 shadow-xl shadow-green-200">
      <h1 className="text-blue-500 font-semibold text-2xl text-center p-3">Emergency Contacts</h1>

      <ul className="list-none font-semibold p-4">

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><MdLocalPolice /></div>
            <div className=""><p>Police Control Room ------------------------<a href="tel:+977 100">100</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><MdTraffic /></div>
            <div className=""><p> Traffic Control Room------------------------<a href="tel:+977 103">103</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><FaCarRear /></div>
            <div className=""><p >Traffic Jam Information ---------------------<a href="sms:+977 4321">JAM 4321</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><PiFireTruckFill /></div>
            <div className=""><p> Fire Fighters --------------------------------<a href="tel:+977 101">101</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><GiPoliceOfficerHead /></div>
            <div className=""><p>Emergency Police Service ------------------<a href="tel:+977 4228435">4228435</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><GiRobberMask /></div>
            <div className=""><p>Crime Information --------------------------<a href="tel:+977 4412748">4412748</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><FaChildReaching /></div>
            <div className=""><p>Child Missing --------------------------------<a href="tel:+977 104">104</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><TbSolarElectricity /></div>
            <div className=""><p>Nepal Electricity Authority ------------------<a href="tel:+977 4153164">4153164</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><BiSolidDonateBlood /></div>
            <div className=""><p>Blood Bank ----------------------------------<a href="tel:+977 4225344">4225344</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><LuCross /></div>
            <div className=""><p>Nepal Red Cross Society --------------------<a href="tel:+977 4270650">4270650</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><LuCross /></div>
            <div className=""><p>Bhaktapur Red Cross ------------------------<a href="tel:+977 6611661">6611661</a></p></div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 py-1.5">
            <div><FaVanShuttle /></div>
            <div className=""><p>Hearse(Shav Vahan) -------------------------<a href="tel:+977 6612266">6612266</a></p></div>
          </div>
        </li>
         

      </ul>

    </div>

    <div className="img-avatar">

    </div>

    <div className="hospital-nums">

    </div>

  </div>;
}

export default CareCenter;
