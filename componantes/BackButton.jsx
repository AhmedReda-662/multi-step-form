import { Link } from "react-router";

function BackButton({ path }) {
  return (
    <Link className="text-gray-400 cursor-pointer" to={path}>
      Go Back
    </Link>
  );
}

export default BackButton;
