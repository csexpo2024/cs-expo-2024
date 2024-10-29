import { MessageCircleQuestion } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex gap-5 justify-center items-center font-heading text-6xl pt-40">
      <MessageCircleQuestion className="w-40 h-40 text-red-600" />
      <div>
        <h1>Page Not Found</h1>
        <Link to="/" className="text-blue-500">
          <p className="text-md lg:text-base font-sans">
            Go back to CS Expo 2024
          </p>
        </Link>
      </div>
    </div>
  );
};

export { NotFound };
