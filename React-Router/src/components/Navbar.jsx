import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass =
    "px-4 py-2 rounded-md hover:bg-blue-100 transition font-medium";

  return (
    <nav className="flex gap-4 p-4 bg-white shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-blue-500 text-white` : linkClass
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-blue-500 text-white` : linkClass
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-blue-500 text-white` : linkClass
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
