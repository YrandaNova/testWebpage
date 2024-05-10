import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a className="text-blue-900 font-light text-xl">
              ヴェイパーウェイヴ
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-blue-900 hover:border-blue-900  hover:border border-full px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

              <Link
                href="/dataPage"
                className="text-blue-900 hover:border-blue-900  hover:border border-full px-3 py-2 rounded-md text-sm font-medium"
              >
                Data
              </Link>

              <Link
                href="/services"
                className="text-blue-900 hover:border-blue-900  hover:border border-full px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
