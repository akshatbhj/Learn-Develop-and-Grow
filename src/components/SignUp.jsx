import React, { useState } from "react";
// import { MdAccountBox } from "react-icons/md";
import logo from "../assets/image/logo.jpg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username); // Printing the user input on console,
    console.log(email); // this can be passed to the backend server to be stored in the database.
    console.log(password);

    setUserName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white px-4 py-16">
      <div className="w-full max-w-md mt-24">
        <img
          src={logo}
          alt="/"
          className="mx-auto mt-[-1rem] bg-white w-20 h-20 rounded-full"
        />

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-10 py-8 mx-auto my-auto"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={username}
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              value={email}
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="example@example.com"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
              id="password"
              type="password"
              placeholder="********"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid grid-rows-2">
            <button
              className="bg-[#f2be22] hover:opacity-80 text-black font-bold  px-10  mx-6 rounded-md"
              type="submit"
            >
              Sign Up
            </button>
            <a
              className="flex mt-4 w-full mx-4 font-bold text-sm text-blue-500 hover:text-blue-800 leading-tight"
              href="/signin"
            >
              Already have an account? Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
