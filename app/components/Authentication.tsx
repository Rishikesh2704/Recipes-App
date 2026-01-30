"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function () {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser) setIsLogged(true);
  }, [auth?.currentUser]);
 
  const handleLogout = async () => {
    try{
          signOut(auth).then(() => setIsLogged(false))
    }catch(err){
        console.log(err)
    }
  };
  return (
    <>
      {!isLogged ? (
        <Link
          href="/Authentication"
          className="h-10 w-25 bg-emerald-400 font-semibold rounded-2xl text-center absolute top-4 right-8 flex items-center justify-center"
        >
          <span>Sign In</span>
        </Link>
      ) : (
        <button
          className="h-10 w-25 bg-emerald-400 font-semibold rounded-2xl text-center absolute top-4 right-8 flex items-center justify-center"
          onClick={handleLogout}
        >
          <span>Log Out</span>
        </button>
      )}
    </>
  );
}
