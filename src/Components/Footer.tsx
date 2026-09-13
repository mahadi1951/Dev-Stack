import React from "react";
import  logo  from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-100  text-gray-600">
      <div className="container mx-auto px-4 max-w-7xl">
       { /* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          { /* Brand Column */ }
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="DevStack Logo" />
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-4 pt-2 text-sm font-semibold text-gray-700">
              <a href="#" className="hover:text-black transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-black transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            {/* PRODUCT */ }  
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
                PRODUCT
              </h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

          {  /* COMPANY */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
                COMPANY
              </h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

         {   /* LEGAL */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
                LEGAL
              </h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  Copyright Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
