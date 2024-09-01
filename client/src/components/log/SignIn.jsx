import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";
import "./form.css";
import Logo from "../../assets/web-logo2.png";

import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

function Form({ props }) {
  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("Login Successful, ", user.username);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Login Form", response);
      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/Home");
        window.location.reload();
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        setUser({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box-signup flex-row text-center mt-10">
      <div className="text-area mb-2">Sign In</div>
      <div className="form-area bg-green-400 border-2">
        <form className="content-area" onSubmit={handleSubmit}>
          <div className="email ">
            <input className="border border-green-500 py-2 px-4 rounded-2xl"
              type="email"
              name="email"
              id="email"
              label="email"
              placeholder="Your E-mail"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className="password">
            <input className="border border-green-500 py-2 px-4 rounded-2xl"
              type="password"
              name="password"
              id="password"
              label="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div className="btn-sign">
            <button type="submit" className="px-3 py-1 my-2 rounded-xl bg-green-200 hover:text-blue-500 hover:scale-105">
              Sign In
            </button>
          </div>
          <div className="bottom">
            <div className="already">Don't have an account?</div>
            <div className="login text-green-500 hover:text-blue-500 underline underline-offset-4">
              <Link to="/SignUp">Sign Up</Link>
            </div>
          </div>
        </form>
        <div className="image-area">
          <img className="Logo-Website" src={Logo} alt="" />
          <div className="title">Welcomes You!</div>
          <div className="description">Let's Dive into the World</div>
        </div>
      </div>
    </div>
  );
}

export default Form;
