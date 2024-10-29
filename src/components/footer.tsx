import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-14">
      <div className="px-24">
        <p>CS Expo 2024</p>
        <p>FEU Institute of Technology</p>
      </div>
      <div className="bg-neutral-800 p-[0.5px] my-10" />
      <div className="flex justify-between items-center px-32">
        <div className="flex gap-5">
          <Facebook className="h-10 w-10" />
          <Instagram className="h-10 w-10" />
        </div>
        <p>2024</p>
      </div>
    </footer>
  );
};

export default Footer;
