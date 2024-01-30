import React, { useState } from "react";
import img from "../assets/contact.svg";
import Heading from "../layout/Heading";
import Button from "../layout/Button";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Créer un compte" />
      <div className="flex flex-col md:flex-row justify-between w-full">
        <form
          className="w-full md:w-2/5 space-y-5 pt-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Password</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="**************"
              id="password"
              name="password"
            />
          </div>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Already have an account? Register.
          </button>
          <div className="flex flex-row justify-start">
            <Button type="submit" title="Log In" />
          </div>
        </form>
        <div className="w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
