import React from "react";
import { MdLocalPolice } from "react-icons/md";

function CareCenter() {
  return <div>
    Care Center
    <div className="emergency-nums bg-gradient-to-r from-green-100 to-white rounded-2xl p-3 shadow-md w-1/3 h-4/5">
      <h1 className="text-blue-500 font-semibold text-2xl text-center p-3">Emergency Contacts</h1>

      <ul className="list-none font-semibold p-4">

        <li>
          <div className="flex items-center gap-2">
            <div><MdLocalPolice /></div>
            <div className=""><p className="flex">Police Control Room -------------<a href="tel:+977 100">100</a></p></div>
            {/* <p className=""></p> */}
          </div>


        </li>
        {/* <li>
          <MdLocalPolice />
          <p className="inline-flex">Traffic Control Room-------------
            <a href="tel:+977 103">103</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Traffic Jam Information -------------
            <a href="sms:+977 4321">JAM 4321</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Fire Fighters -------------
            <a href="tel:+977 101">101</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Emergency Police Service -------------
            <a href="tel:+977 4228435">4228435</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Crime Information -------------
            <a href="tel:+977 4412748">4412748</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Child Missing -------------
            <a href="tel:+977 104">104</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Nepal Electricity Authority -------------
            <a href="tel:+977 4153164">4153164</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Blood Bank -------------
            <a href="tel:+977 4225344">4225344</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Nepal Red Cross Society -------------
            <a href="tel:+977 4270650">4270650</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Bhaktapur Red Cross -------------
            <a href="tel:+977 6611661">6611661</a>
          </p>
        </li>
        <li>
          <MdLocalPolice />
          <p className="inline-flex">Hearse(Shav Vahan) -------------
            <a href="tel:+977 6612266">6612266</a>
          </p>
        </li>
 */}

      </ul>

    </div>

    <div className="img-avatar">

    </div>

    <div className="hospital-nums">

    </div>

  </div>;
}

export default CareCenter;
