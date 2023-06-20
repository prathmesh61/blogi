import { NextResponse } from "next/server";
import Blog from "@/modle/BlogModle";
import connect from "@/utlis/db";

export const GET = async (request) => {
  try {
    await connect();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const POST = async (request) => {
  const { title, content, description, image } = await request.json();
  const Newblog = new Blog({ title, content, description, image });
  try {
    await connect();
    await Newblog.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
