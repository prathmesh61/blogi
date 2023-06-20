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

  console.log(blogs);

  // const handleDelete = (id) => {
  //   const proceed = window.confirm("Are you sure?");
  //   if (proceed) {
  //     fetch(`http://localhost:5000/blogs/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.deletedCount > 0) {
  //           const remaining = blogs.filter((blog) => blog._id !== id);
  //           setBlogs(remaining);
  //         }
  //       });
  //   }
  // };

  return (
    <div className="container flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-between mt-6  ">
        {blogs.map((blog) => (
          <div key={blog._id} className="flex gap-4 flex-wrap m-6 ">
            <div className="w-full h-full flex-1">
              <img
                src={blog.image || "https://placehold.co/600x400"}
                alt="blog-img"
                className="rounded-md w-[400px] object-contain shadow-md"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-lg font-bold">{blog.title}</h2>
              <p className="text-sm font-light">{blog.description}</p>
              <Link
                href={`/blog/${blog._id}`}
                className="bg-green-400 rounded-md px-4 py-2  w-[200px] text-center"
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
