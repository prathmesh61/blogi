import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 ">
      <Link href="/" className="text-3xl font-bold">
        Blogi
      </Link>
      <div className="flex gap-4 justify-center items-center">
        <Link className="font-semibold text-lg" href="/">
          Home
        </Link>
        <Link className="font-semibold text-lg" href="/blog">
          Blog
        </Link>
        <Link className="font-semibold text-lg" href="/CreatePost">
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
