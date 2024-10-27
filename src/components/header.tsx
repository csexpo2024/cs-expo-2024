import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex w-full p-5 items-center">
      <Link to="/">
        <p>logo</p>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-3">
        <Link to="/events">
          <Button variant="ghost">Events</Button>
        </Link>
        <Link to="/projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link to="/partners">
          <Button variant="ghost">Partners</Button>
        </Link>
        <Link to="/gallery">
          <Button variant="ghost">Gallery</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
