import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const LoginPage = () => {
  async function handleSubmit() {
    "use server";
    cookies().set("token", "1234");
    redirect("/");
  }
  return (
    <form
      action={handleSubmit}
      className={" flex-col w-full flex items-center gap-y-8 font-poppins "}
    >
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
      <button className="bg-black border-2 border-white hover:border-black truncate stylbtn text-white rounded-[3em] py-3 px-8">
        <p className="z-50 relative">Login</p>
      </button>
    </form>
  );
};

export default LoginPage;
