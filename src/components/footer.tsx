import { Facebook } from "lucide-react";
import Logo from "@/assets/img/logo-silver-cropped.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-14">
      <div className="px-14 sm:px-24">
        <div className="py-5 flex flex-wrap gap-10 sm:justify-between items-start">
          <div className="flex flex-wrap gap-10">
            <div>
              <p className="font-bold">CS Expo</p>
              <ul>
                <li>
                  <Link to="/events/cs-expo">About</Link>
                </li>
                <li>
                  <Link to="/events/cs-expo#schedule">Schedule</Link>
                </li>
                <li>
                  <Link to="/events/cs-expo#speakers">Speakers</Link>
                </li>
                <li>
                  <Link to="/events/cs-expo#gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Dev Day</p>
              <ul>
                <li>
                  <Link to="/events/dev-day">About</Link>
                </li>
                <li>
                  <Link to="/events/dev-day#schedule">Schedule</Link>
                </li>
                <li>
                  <Link to="/events/dev-day#speakers">Speakers</Link>
                </li>
                <li>
                  <Link to="/events/dev-day#gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Projects</p>
              <ul>
                <li>
                  <Link to="/projects">Collection</Link>
                </li>
                <li>
                  <Link to="/projects#gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Our Partners</p>
              <ul>
                <li>
                  <Link to="/partners#media">Media Partners</Link>
                </li>
                <li>
                  <Link to="/partners#major">Major Partners</Link>
                </li>
                <li>
                  <Link to="/partners#minor">Minor Partners</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold">About</p>
              <ul>
                <li>
                  <Link to="/about">CS Expo 2024</Link>
                </li>
                <li>
                  <Link to="/about#teams">CS Teams</Link>
                </li>
                <li>
                  <Link to="/about#committees">Committees</Link>
                </li>
                <li>
                  <Link to="/about#faculty">Faculty</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <img src={Logo} alt="CS Expo 2024" className="w-28" />
          </div>
        </div>
      </div>
      <div className="bg-neutral-800 p-[0.5px] my-10" />
      <div className="flex justify-between items-center px-32">
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/csexpo2024"
            target="_blank"
            rel="norefferer noopener"
          >
            <Facebook className="h-10 w-10" />
          </a>
        </div>
        <p>2024</p>
      </div>
    </footer>
  );
};

export default Footer;
