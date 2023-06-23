"use client";

import Image from "next/image";
import React, { useState } from "react";
const CreatePost = () => {
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [content, setContent] = useState();

  const createPostapi = async (e) => {
    e.preventDefault();
    if (!title || !description || !image || !content) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const newPost = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ title, description, image, content }),
      });
      const data = await newPost.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex p-2 justify-center items-center gap-4 mt-6 w-[500px] h-screen">
      <form onSubmit={createPostapi} className="flex flex-col gap-4 w-[400px]">
        <label className="text-md text-start font-medium">Title :</label>
        <input
          type="text"
          className="shadow-md border-2 text-black border-gray-300 rounded-md w-full p-2 outline-none mb-6"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />
        <label className="text-md text-start font-medium">Description :</label>
        <input
          type="text"
          className="shadow-md border-2 border-gray-300 text-black rounded-md w-full p-2 outline-none mb-6"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <label className="text-md text-start font-medium">ImageURL :</label>
        <input
          type="text"
          className="shadow-md border-2 border-gray-300 rounded-md w-full text-black p-2 outline-none mb-6"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter Image URL"
        />
        <label className="text-md text-start font-medium">Content :</label>

        <textarea
          name="text"
          cols="30"
          rows="10"
          className="shadow-md border-2 text-black border-gray-300 rounded-md w-full p-2
        outline-none"
          onChange={(e) => setContent(e.target.value)}
          defaultValue={""}
          value={content}
          placeholder="Write something..."
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md w-full"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
