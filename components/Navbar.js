import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const ref = useRef();
  const Route = useRouter();
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <style jsx>
        {`.navbar{
    display
  }

  
  
  `}
      </style>
      <nav className="navbar flex justify-center align-middle">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">blogs</Link>
          </li>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
          <li>
            <button >Post</button>
          </li>
          <li className="flex ">
            <input
              type="text"
              id="success"
              class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block h-12 w-full p-2.5 dark:bg-gray-700 dark:border-green-500 ml-5 mt-4 "
              ref={ref}
              placeholder="Success input"
            />
          </li>

          <li>
            <button
              onClick={submit}
              type="search"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-4"
            >
              search
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
