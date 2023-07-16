import React, { useState } from "react";
// import { MdAccountBox } from "react-icons/md";
import logo from "../assets/image/logo.jpg";


const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username); // Printing the user input on console,
    console.log(password); // this can be passed to the backend server to be stored in the database.

    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white py-4 px-4">
      <div className="w-full max-w-md mt-24">
        <img src={logo} alt="/" className="mx-auto mt-[-3rem] bg-white w-20 h-20 rounded-full" />
        <form
          onSubmit={handleSubmit}
          className="w-full shadow-xl flex flex-col p-4 rounded-lg px-6 py-8 mx-auto my-auto"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="username"
              type="text"
              placeholder="Enter your username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
              id="password"
              type="password"
              placeholder="********"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid grid-rows-2">
            <button
              className="bg-[#f2be22] hover:opacity-80 text-black font-bold px-10  mx-6 rounded"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="flex mt-4 w-full mx-4 font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/signup"
            >
              Don't have an account? Register Here.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
