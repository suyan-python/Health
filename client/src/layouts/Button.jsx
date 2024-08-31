import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-black px-5 py-1 rounded-full text-white hover:text-slate-400">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
