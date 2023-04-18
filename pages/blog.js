import { useRouter } from "next/router";
// import fs from "fs";
import React, { useEffect, useState } from "react";

const Blog = ({ data }) => {
  const [statics, setStatics] = useState([1, 2, 3]);
  const Route = useRouter();
  return (
    <div>
      <h1 className="text-center text-4xl font-bold capitalize mb-9">
        Welcome to blogs page
      </h1>
      <div className="flex gap-3 flex-wrap justify-center ">
        {data &&
          data.map((content) => {
            const { title, userId, html } = content;
            function createMarkup() {
              return { __html: html };
            }

            return (
              <div
                className="w-60 p-4 bg-black shadow-2xl shadow-black rounded-2xl"
                key={userId}
              >
                <h2 className="text-lg font-serif text-white">{title}</h2>
                <p className="text-white text-sm text-left">
                  Some content here
                </p>
                <p
                  style={{ background: "red" }}
                  dangerouslySetInnerHTML={createMarkup()}
                />
                <img
                  src="/asset/images/1.jpg"
                  width={100}
                  height={100}
                  alt="asklnk"
                  className="h-36 w-full object-cover object-left-top mt-3"
                />
              </div>
            );
          })}
      </div>{" "}
      <button
        type="button"
        onClick={() => Route.push("/")}
        class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Blog;

// export async function getStaticProps() {
//   // const rawData = await fetch("https://jsonplaceholder.typicode.com/todos");
//   // const rawData = await fetch("http://localhost:3000/api/blogs");
//   // const Content = await rawData.json();
//   // const content=JSON.parse(Content)
//   const file = fs.readFileSync("Backend/Blogs.json", "utf-8");
//   const n = await JSON.parse(file);
//   return {
//     props: {
//       data: n,
//     },
//   };
// }

export async function getServerSideProps() {
  const rawData = await fetch("http://localhost:3000/api/blogs");
  // const rawData = await fetch("https://jsonplaceholder.typicode.com/todos");
  const Content = await rawData.json();
  const Contents = JSON.parse(Content);
  return {
    props: {
      data: Contents,
    },
  };
}
