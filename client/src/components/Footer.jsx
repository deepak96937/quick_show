import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 w-full mt-40 text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        
        {/* Logo + About */}
        <div className="md:max-w-96">
          <img
            src={assets.logo}
            alt="QuickShow Logo"
            className="h-11"
          />
          <p className="mt-6 text-sm">
            QuickShow is the ultimate movie companion app, helping you explore,
            track, and enjoy your favorite shows anytime.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src={assets.googlePlay}
              alt="Google Play"
              className="h-9 w-auto"
            />
            <img
              src={assets.appStore}
              alt="App Store"
              className="h-9 w-auto"
            />
          </div>
        </div>

        {/* Company + Contact */}
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 9693726719</p>
              <p>dee96872@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <p className="pt-4 text-center text-sm pb-5">
        © {new Date().getFullYear()}{" "}
        <a href="https://prebuiltui.com" className="hover:text-white transition">
          QuickShow
        </a>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
