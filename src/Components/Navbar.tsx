import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="bg-[#F8F8F8] sticky top-0 z-50 h-16">
      <div className="navbar bg-base-200 container h-16 mx-auto px-3 sm:px-5 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown flex items-center gap-2">
            {/* Mobile Menu Button */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            {/* Mobile Logo */}
            <img
              className="lg:hidden h-7 sm:h-8 w-auto"
              src={logo}
              alt="Logo"
            />

            {/* Mobile Menu */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-20 w-52 p-2 shadow font-semibold"
            >
              <li className="text-[#e63886]">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Desktop Logo */}
          <img src={logo} alt="Logo" className="hidden lg:flex h-9 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li className="text-[#e63886]">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Login & Sign Up */}
        <div className="navbar-end">
          <ul className="flex gap-2 sm:gap-4 content-center items-center font-semibold">
            <li>
              <a href="#" className="text-sm sm:text-base">
                Login
              </a>
            </li>

            <li>
              <button className="btn bg-[#D91B7E] text-white rounded-2xl px-3 sm:px-5 text-sm sm:text-base">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
