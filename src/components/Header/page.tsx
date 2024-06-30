"use client"

import { logout } from "@/lib/jwt";
import React from 'react';
import { useRouter } from "next/navigation";


const Header = () => {
  const router = useRouter();
  const logOut = async() => {
    try{
      await logout();
      router.push("/log-in");
    }catch(err){
      console.log("Error: ", err);
    }
  }
  
  return (
    <div className='header'>
      <div className="logo-header">
        <span>FOLIO</span>
      </div>
      <div className="auth-header" onClick={logOut}>
        <span className="log-out">Log Out</span>
      </div>
    </div>
  );
};

export default Header;
