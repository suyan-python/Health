import React from "react";
import Button from "../layouts/Button";
import Doc from "../assets/doctorhd.png";
import Logo from "../assets/web-logo2.png";

function Hero() {
  return (
    <>
      <div className="flex justify-around h-2/4 rounded-3xl shadow-sm bg-gradient-to-t from-green-100 to-blue-200">
        <div className="ext-area flex flex-col w-3/4 text-center justify-center items-center">
          <div className="slog rounded-full flex w-1/5 justify-center px-3 py-2 gap-3">
            <img src={Logo} alt="" />
          </div>
          <div className="title text-5xl py-3">
            The <h1 className="font-semibold">Best Medical</h1> and Treatment
            <br />
            Center for you
          </div>
          <div className="description text-slate-400">
            Connect with our professional doctors
          </div>
          <div className="book py-3">
            <Button title="Book Appointment" />
          </div>
        </div>
        <div className="image-area flex-col w-3/4 text-center">
          <img className="pt-14" style={{ height: "72vh" }} src={Doc} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
