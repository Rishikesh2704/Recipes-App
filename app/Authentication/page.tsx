"use client";
import Link from "next/link";
import "./Auth.css";
import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signIn, setSignIn] = useState<boolean>(false);
  const router = useRouter();

  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let user = false;
    if (signIn) {
      user = await createUser();
    } else {
      user = await login();
    }
    if (user) {
      router.push("/");
    }
  };

  return (
    <main className="AuthSection ">
      <div className=" h-[100vh] w-[100vw] absolute z-0 bg-[rgba(0,0,0,0.4)] "></div>
      <Link
        className="homeBtn w-10 h-9 fixed z-10 group left-[50%] max-lg:hidden grid grid-cols-1 place-items-center  rounded-3xl translate-x-[-50%] top-6 font-medium hover:w-18  text-center ease-out duration-200 bg-[#4bfda4] text-black  leading-[2.2rem]"
        href={"/"}
        aria-label="Go to homepage"
      >
        <i className="fa-solid fa-chevron-left text-center text-lg col-start-1 col-end-2 row-start-1 row-end-2 ease-in-out duration-200" />
        <h1 className=" w-4 h-full col-start-1 col-end-2 row-start-1 font-[550] text-[1.05rem]  italic relative right-3 row-end-2 opacity-0 group-hover:opacity-100 group-hover:right-0 duration-200 ease-out ">
          <i className="homeIcon fa-solid fa-house"></i>
          <p className="hidden">Home</p>
        </h1>
      </Link>
      <div className="AuthWrapper " role="group">
        <form className="AuthForm" onSubmit={(e) => handleSubmit(e)}>
          <h1>{signIn ? "Create Account" : "Login"}</h1>
          <div className="InputContainer">
            <label htmlFor="Email">Email</label>  
            <div className="InputWrapper">
              <i className="fa-regular fa-envelope"></i>
              <input
                className=""
                type="email"
                name="Email"
                id="Email"
                aria-label="Email"
                placeholder="Enter Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="InputContainer">
            <label htmlFor="Password">Password</label>
            <div className="InputWrapper">
              <i className="fa-solid fa-lock"></i>
              <input
                className="h-fit"
                type="password"
                name="Password"
                id="Password"
                aria-label="Password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="submitBtn">
            {signIn ? "Sign In" : "Log In"}
          </button>
        </form>

        <div className="OtherLogin">
          <div className="loginWith" aria-hidden >
            <div className="line" ></div>

            <p className="LineText" >Login With</p>
          </div>
          <button className="googleBtn" onClick={signInWithGoogle} aria-haspopup>
            <i className="fa-brands fa-google"></i>
            <p className="hidden">Login with google</p>
          </button>
          <button
            className="CreateAccBtn"
            onClick={() => setSignIn((prev) => !prev)}
          >
            {!signIn ? "create account" : "login"}
          </button>
        </div>
      </div>
    </main>
  );
}
