import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Maximize, ChevronDown, Menu, ChevronRight } from "lucide-react";

import LogoSmall from "@/assets/img/logo-silver-2-small-crop.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type NavItemProps = {
  item: {
    route: string;
    label: string;
    subroutes?: { route: string; label: string }[];
  };
};

const links = [
  {
    route: "/events",
    label: "Events",
    subroutes: [
      { route: "/events/dev-day", label: "Dev Day" },
      { route: "/events/cs-expo", label: "CS Expo" },
      { route: "/events/committees", label: "Committees" },
    ],
  },
  {
    route: "/projects",
    label: "Projects",
    subroutes: [
      { route: "/projects/collection", label: "Collection" },
      { route: "/projects/hall-of-fame", label: "Hall of Fame" },
    ],
  },
  {
    route: "/partners",
    label: "Partners",
  },
  {
    route: "/gallery",
    label: "Gallery",
  },
  {
    route: "/about",
    label: "About",
  },
];

const NavItem = ({ item }: NavItemProps) => {
  return (
    <>
      {/* if items has subroutes, use dropdown component */}
      {item.subroutes ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start">
              <Maximize />
              {item.label}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[100]">
            {item.subroutes.map((subroute) => (
              <DropdownMenuItem asChild>
                <NavLink
                  to={subroute.route}
                  key={subroute.route}
                  className="flex items-center justify-between w-full px-4 py-2"
                >
                  {subroute.label}
                  <ChevronRight />
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <NavLink
          to={item.route}
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          <Button variant="ghost" className="w-full justify-start">
            <Maximize />
            {item.label}
          </Button>
        </NavLink>
      )}
    </>
  );
};

const Header = () => {
  const navLinks = links.map((link) => (
    <NavItem key={link.route} item={link} />
  ));
  return (
    <header className="flex w-full p-5 px-10 lg:px-24 items-center sticky top-0 bg-white bg-opacity-0 backdrop-blur-md z-[99]">
      <NavLink to="/">
        <img src={LogoSmall} className="w-1/2" />
      </NavLink>
      <nav className="ml-auto hidden lg:flex gap-3">
        {navLinks}
        <Button className="bg-red-700 text-gray-200 hover:text-black mx-5">
          Register
        </Button>
      </nav>
      <Sheet>
        <SheetTrigger className="flex lg:hidden ml-auto" asChild>
          <Button variant="outline" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="z-[100]">
          <SheetTitle>CS Expo 2024</SheetTitle>
          {/* TODO: use collapsible */}
          <div className="flex flex-col gap-5 py-5">{navLinks}</div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
