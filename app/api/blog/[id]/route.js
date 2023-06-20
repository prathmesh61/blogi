import { NextResponse } from "next/server";
import Blog from "@/modle/BlogModle";
import connect from "@/utlis/db";

export const GET = async (request, { params }) => {
  const id = params.id;

  try {
    await connect();
    const blog = await Blog.findById(id);

    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Blog.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
