import { Link, NavLink } from "react-router";

function BackButton({ path }) {
  return (
    <NavLink className="text-gray-400 cursor-pointer" to={path}>
      Go Back
    </NavLink>
  );
}

export default BackButton;
