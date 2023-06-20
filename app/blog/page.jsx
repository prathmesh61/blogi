"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blog", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-between mt-10 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="flex gap-4 flex-wrap">
            <div className="w-full h-full flex-1">
              <img
                src={blog.image || "https://placehold.co/600x400"}
                alt="blog-img"
                className="rounded-md w-[400px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-lg font-bold">{blog.title}</h2>
              <p className="text-sm font-light">{blog.description}</p>
              <div className="flex items-center gap-2">
                <Link
                  href={`/blog/${blog._id}`}
                  className="bg-green-400 rounded-md px-4 py-2 text-white w-[200px] text-center"
                >
                  Read More
                </Link>
                <button
                  className="bg-red-400 rounded-md px-4 py-2 text-white w-[200px] text-center"
                  onClick={() => handleDelete(blog._id)}
                >
                  Del
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
