"use client";
import React from "react";
import { useState } from "react";

const SignuPage = () => {
  const [next, setNext] = useState(false);

  return next ? (
    <form
      className={" flex-col w-full flex items-center gap-y-8 font-poppins "}
    >
      <div className="flex justify-center gap-20 w-full items-center ">
        <div className=" flex-col">
          <input
            id="box"
            className="border-2  border-stone-500 rounded-full focus:border-black duration-200 p-3.5 px-5 "
            type="checkbox"
            placeholder=""
          />
          <label> Staff </label>
        </div>
        <div className=" flex-col">
          <input
            id="box"
            className="border-2  border-stone-500 rounded-full focus:border-black duration-200 p-3.5 px-5 "
            type="checkbox"
            placeholder=""
          />
          <label> Student</label>
        </div>
      </div>
      <input
        className="border-2 w-full border-stone-500 rounded-xl focus:border-black duration-200 p-3.5 px-5"
        type="text"
        placeholder={"Name or Student ID"}
      />
      <button className="bg-black border-2 border-white hover:border-black truncate stylbtn text-white rounded-[3em] py-3 px-8">
        <p className="z-50 relative">Signup</p>
      </button>
    </form>
  ) : (
    <form className=" flex-col w-full flex items-center gap-y-8 font-poppins  ">
      <input
        className="border-2 w-full border-stone-500 rounded-xl focus:border-black duration-200 p-3.5 px-5"
        type="email"
        placeholder="Email"
      />
      <input
        className="border-2 w-full border-stone-500 rounded-xl focus:border-black duration-200 p-3.5 px-5"
        type="password"
        placeholder="Password"
      />
      <input
        className="border-2 w-full border-stone-500 rounded-xl focus:border-black duration-200 p-3.5 px-5"
        type="password"
        placeholder="confirm Password"
      />
      <button
        className="bg-black border-2 border-white hover:border-black truncate stylbtn text-white rounded-[3em] py-3 px-8"
        onClick={() => {
          setNext(!next);
        }}
      >
        <p className="z-50 relative">Next</p>
      </button>
    </form>
  );
};

export default SignuPage;
