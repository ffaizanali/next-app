import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/navBar.css";
// import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const Router=useRouter()
  useEffect(()=>{

 },[])
 console.log(Router.query)
  return (
    <>

      {/* <Image
        src="/asset/images/1.jpg"
        alt="Vercel Logo"
        className="dark:invert"
        width={500}
        height={24}
        priority
      /> */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
// style jsx
// css module
// filebase
// slug
