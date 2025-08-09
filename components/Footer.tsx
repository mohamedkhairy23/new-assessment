// components/Footer.tsx
import { FC } from "react";
import {
  FaLinkedin,
  FaGoogle,
  FaTiktok,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            {[
              "App Development",
              "Programming & Tech",
              "UI Design",
              "Video & Animation",
              "Writing & Translation",
              "Music & Audio",
              "Digital Marketing",
              "AI Services",
              "Consulting",
              "Bike",
              "Automation",
              "Mechanic",
              "Photography",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Clients */}
        <div>
          <h3 className="font-semibold mb-3">For Clients</h3>
          <ul className="space-y-2">
            {[
              "Your UpPhoto account",
              "Careers",
              "Press & News",
              "Partnerships",
              "Intellectual property claims",
              "Test",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            {[
              "Contact",
              "Invite a Friend",
              "Privacy Policy",
              "Terms of Service",
              "Upphoto Guides",
              "Help & Support",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Freelancers */}
        <div>
          <h3 className="font-semibold mb-3">For Freelancers</h3>
          <ul className="space-y-2">
            {["Trust & safety", "Buying on UpPhoto", "Selling on UpPhoto"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Business Solutions */}
        <div>
          <h3 className="font-semibold mb-3">Business Solutions</h3>
          <ul className="space-y-2">
            {["Events", "Community Standards", "Podcast"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-500">UpPhoto International Ltd. 2025</p>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Social Icons */}
          <div className="flex gap-4 text-xl text-gray-500">
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
            <FaGoogle className="hover:text-red-500 cursor-pointer" />
            <FaTiktok className="hover:text-black cursor-pointer" />
            <FaPinterest className="hover:text-red-600 cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          </div>

          {/* Language Selector */}
          <div className="flex gap-2 text-xs">
            <a href="#" className="text-green-600 font-semibold">
              English
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Arabic
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
