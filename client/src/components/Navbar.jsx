import React from "react";
import Button from "../layouts/Button";

import Logo from "../assets/web-logo2.png";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-3">
        <div className="logo">
          <img className="w-14" src={Logo} alt="" />
        </div>
        <div className="items flex gap-4">
          <div className="item hover:text-green-500">Home</div>
          <div className="item hover:text-green-500">About</div>
          <div className="item hover:text-green-500">Care Service</div>
        </div>
        <div className="login">
          <Button title="Login" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
