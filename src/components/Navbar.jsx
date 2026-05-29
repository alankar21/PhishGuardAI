import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (

    <nav className="w-full fixed top-0 z-50 bg-[#0B1120]/80 backdrop-blur-lg border-b border-cyan-500/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <ShieldCheck
            className="text-cyan-400"
            size={35}
          />

          <h1 className="text-2xl font-bold">
            PhishGuard AI
          </h1>

        </div>

        {/* NAV LINKS */}

        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <button
            onClick={() => navigate("/")}
            className="hover:text-cyan-400 transition-all"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="hover:text-cyan-400 transition-all"
          >
            Analytics
          </button>

          <button
            onClick={() => navigate("/history")}
            className="hover:text-cyan-400 transition-all"
          >
            Threats
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="hover:text-cyan-400 transition-all"
          >
            Features
          </button>

        </div>

        {/* BUTTONS */}

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/login")}
            className="border border-cyan-500 px-5 py-2 rounded-xl hover:bg-cyan-500/10 transition-all"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl transition-all"
          >
            Register
          </button>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;