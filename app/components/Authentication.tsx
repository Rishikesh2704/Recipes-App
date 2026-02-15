"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function () {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);
  const handleLogout = async ():Promise<void> => {
    try{
          signOut(auth).then(() => setIsLoggedIn(false))
    }catch(err){
        throw new Error('Failed Log Out!')
    }
  };
  return (
    <nav>
      {!isLoggedIn ? (
        <Link
          href="/Authentication"
          className="h-10 w-25 bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600  max-md:h-7 max-md:w-17 max-md:text-[0.9rem] cursor-pointer font-semibold  rounded-2xl text-center absolute top-4 right-8 flex items-center justify-center"
        >
          <span className="text-black">Log In</span>
        </Link>
      ) : (
        <button
          className="h-10 w-25 bg-emerald-400 cursor-pointer  max-md:h-7 max-md:w-17 max-md:text-[0.9rem] font-semibold rounded-2xl text-center absolute top-4 right-8 flex items-center justify-center"
          onClick={handleLogout}
        >
          <span className="text-black ">Log Out</span>
        </button>
      )}
    </nav>
  );
}
