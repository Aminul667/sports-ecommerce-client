import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left side - Logo and Links */}
        <div className="flex items-center space-x-6">
          {/* Company Logo */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            CompanyLogo
          </NavLink>

          {/* Dropdown Link */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              Products
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md z-50">
              <NavLink
                to="/products/product1"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-blue-500 font-bold"
                    : "block px-4 py-2 text-gray-600 hover:bg-gray-100"
                }
              >
                Product 1
              </NavLink>
              <NavLink
                to="/products/product2"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-blue-500 font-bold"
                    : "block px-4 py-2 text-gray-600 hover:bg-gray-100"
                }
              >
                Product 2
              </NavLink>
              <NavLink
                to="/products/product3"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-blue-500 font-bold"
                    : "block px-4 py-2 text-gray-600 hover:bg-gray-100"
                }
              >
                Product 3
              </NavLink>
            </div>
          </div>

          {/* Other Links */}
          <NavLink
            to="/all-products"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            All Product
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Products
          </NavLink>
        </div>

        {/* Right side - Search Bar, Cart, Favorite, and User */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>

          {/* Cart Icon */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700 hover:text-gray-900"
            }
          >
            Cart
          </NavLink>

          {/* Favorite Icon */}
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700 hover:text-gray-900"
            }
          >
            Favorite
          </NavLink>

          {/* User Icon */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700 hover:text-gray-900"
            }
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
