"use client";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();
  const logout = () => {
    deleteCookie("token");
    router.push("/auth/login");
  };

  useEffect(() => {
    logout();
  }, []);
  return null;
};

export default LogoutPage;
