import logo from "../assets/logo.png";
import thumb from "../assets/thumb.png";

const Navbar = () => {
  return (
    <nav className="bg-[#1E212E] h-[10vh] w-full flex items-center justify-between px-10 text-2xl">

      <div className="flex items-center">
        <img
          src={logo}
          alt="PassGuard Logo"
          className="h-16 w-16 object-contain mx-10"
        />
        <h1 className="text-4xl font-semibold text-blue-400 tracking-wide">
          PassGuard
        </h1>
      </div>

      <ul className="flex items-center gap-9 text-white mr-10">
        <li><a className="hover:text-blue-300" href="#">Dashboard</a></li>

        <li className="flex items-center gap-3">
          <span className="text-gray-400">|</span>
          <a className="hover:text-blue-300" href="#">Sharing</a>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-gray-400">|</span>
          <a className="hover:text-blue-300" href="#">Security</a>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-gray-400">|</span>
          <a className="hover:text-blue-300" href="#">Account</a>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-gray-400">|</span>
          <img
            src={thumb}
            alt="Thumb Icon"
            className="h-10 w-10 object-contain border-2 border-white rounded-full p-1
                       transition-all duration-300
                       hover:scale-110 hover:border-blue-400 hover:shadow-[0_0_10px_#3b82f6]"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
