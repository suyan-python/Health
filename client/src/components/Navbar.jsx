import React from "react";
import Button from "../layouts/Button";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-3">
        <div className="logo">iHealth</div>
        <div className="items flex gap-4">
          <div className="item">Home</div>
          <div className="item">About</div>
          <div className="item">Care Service</div>
        </div>
        <div className="login">
          <Button title="Login" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
