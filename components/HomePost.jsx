"use client";
import Image from "next/image";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomePost = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blog", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-between mt-6  ">
        {blogs.map((blog) => (
          <div key={blog._id} className="flex gap-4 flex-wrap m-6 ">
            <div className="w-full h-full flex-1">
              <img
                src={blog?.image || "https://placehold.co/600x400"}
                alt="blog-img"
                className="rounded-md w-[400px] object-contain shadow-md"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-lg font-bold text-md ">{blog.title}</h2>
              <p className="text-sm hidden sm:block font-light">
                {blog.description}
              </p>
              <Link
                href={`/blog/${blog._id}`}
                className="bg-green-400 rounded-md px-2 py-1 text-sm  w-[100px] text-center"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePost;
