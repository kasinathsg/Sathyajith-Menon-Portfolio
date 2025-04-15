'use client'
import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { Link } from "react-scroll"; // Import react-scroll's Link component

const Sidebar = () => {
  return (
    <div className="w-[300px] h-screen p-6 flex flex-col justify-between bg-neutral-950 text-white overflow-y-auto">
      {/* Profile */}
      <div className="text-center">
        <img
          alt="Profile picture of Sathyajith Menon"
          className="rounded-full mx-auto mb-4"
          src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744649957/EA000837-BD23-4E69-88F7-D9A0404826F7_df93qi.jpg"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <h1 className="text-xl font-bold">Sathyajith Menon</h1>
      </div>

      {/* Nav */}
      <nav className="mt-10 flex-1">
        <ul className="flex flex-col items-center space-y-6 text-lg">
          <li>
            <Link
              to="mainContent"
              smooth={true}
              duration={1000}  // Increase the duration to make the scroll slower
              className="hover:text-gray-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="macbookScroll"
              smooth={true}
              duration={1000}  // Increase the duration to make the scroll slower
              className="hover:text-gray-400 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="timelineDemo"
              smooth={true}
              duration={1000}  // Increase the duration to make the scroll slower
              className="hover:text-gray-400 cursor-pointer"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              to="myProjects"
              smooth={true}
              duration={1000}  // Increase the duration to make the scroll slower
              className="hover:text-gray-400 cursor-pointer"
            >
              Project
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a className="hover:text-red-500" href="mailto:sathyajithmenon0208@gmail.com">
            <Mail size={20} />
          </a>
          <a className="hover:text-black" href="https://github.com/SATHYAJITHMENON">
            <Github size={20} />
          </a>
          <a className="hover:text-blue-700" href="https://linkedin.com/in/sathyajith-menon">
            <Linkedin size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-400">© Sathyajith Menon All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Sidebar;
