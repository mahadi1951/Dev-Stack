import logo from "../assets/logo-text.png";

const Navbar = () => {
  <>
  const navLinks = [ <ul className="menu menu-horizontal px-1 font-semibold">
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
          </ul>]
  </>;
  return (
    <div className="bg-[#F8F8F8] sticky top-0 z-50 h-16">
      <div className="navbar bg-base-200 container h-16 mx-auto">
        <div className="navbar-start">
          <div className="dropdown flex items-center gap-2">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <img className="lg:hidden " src={logo} alt="Logo" />
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
          <img src={logo} alt="Logo" className="hidden lg:flex" />
        </div>
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
        <div className="navbar-end">
          <ul className="flex gap-4 content-center items-center font-semibold">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <button className="btn bg-[#D91B7E] text-white rounded-2xl">
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
