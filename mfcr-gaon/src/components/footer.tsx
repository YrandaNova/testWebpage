// components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-green-300 text-blue-500 text-center p-4">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <p>
          Follow us on:
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-600 ml-2"
          >
            Twitter
          </a>
          ,
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-800 ml-2"
          >
            Facebook
          </a>
          ,
          <a
            href="https://instagram.com"
            className="text-violet-500 hover:text-pink-800 ml-2"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
