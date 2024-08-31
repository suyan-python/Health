import React from "react";
import Button from "../layouts/Button";

function Hero() {
  return (
    <>
      <div className="  my-2 flex justify-between h-2/4 rounded-3xl shadow-sm bg-gradient-to-t from-orange-100 to-blue-100">
        <div className="  text-area flex-col w-3/4 text-left py-32 px-10">
          <div className="slog bg-slate-300 border-white rounded-full flex w-1/5 justify-center px-3 py-2 gap-3">
            <div className="emo">🔥</div>
            <div className="text">#1 best care</div>
          </div>
          <div className="title text-5xl py-3">
            The <h1 className="font-semibold">Best Medical</h1> and Treatment
            <br />
            Center for you
          </div>
          <div className="description text-slate-400">
            Connect with our professional doctors{" "}
          </div>
          <div className="book py-3">
            <Button title="Book Appointment" />
          </div>
        </div>
        <div className="image-area  flex-col w-2/4 text-center py-32">
          This is Image Section
        </div>
      </div>
    </>
  );
}

export default Hero;
