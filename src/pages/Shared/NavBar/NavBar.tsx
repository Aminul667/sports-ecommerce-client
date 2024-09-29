import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center border-b-red-200 border-b-2">
        {/* Left: Company Name */}
        <div className="text-2xl font-bold">Company Name</div>

        {/* Center: Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          <NavLink
            to="/"
            end
            className="hover:text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "blue", fontWeight: "bold" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "blue", fontWeight: "bold" } : undefined
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/all-products"
            className="hover:text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "blue", fontWeight: "bold" } : undefined
            }
          >
            All Products
          </NavLink>
        </div>

        {/* Right: Login and Cart */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
