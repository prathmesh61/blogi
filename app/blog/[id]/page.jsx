import Image from "next/image";
import React from "react";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return "Not found";
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="flex items-center justify-center flex-col mt-32 ">
      <div className="flex flex-col justify-center items-center  w-[1280px] h-[100vh]  p-2">
        <Image
          src={data.image || "https://placehold.co/600x400"}
          width={1000}
          height={300}
          alt="logo"
          className="rounded-lg"
        />

        <div className="flex flex-col justify-start items-center">
          <h2 className="text-3xl font-extrabold text-start mt-8 mb-2">
            {data.title}
          </h2>
          <p className="font-lg font-medium p-4">{data.description}</p>
          <div className="flex justify-center items-center w-full h-full mt-8">
            <p className="font-lg font-light p-4">{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
