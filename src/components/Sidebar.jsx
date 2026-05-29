import {
  LayoutDashboard,
  Globe,
  ShieldAlert,
  Lock,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[260px] min-h-screen bg-[#111827]/80 backdrop-blur-lg border-r border-cyan-500/10 p-6">

      {/* LOGO */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-16">
        PhishGuard
      </h1>

      {/* MENU */}
      <div className="space-y-5">

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 cursor-pointer">

          <LayoutDashboard size={24} />

          <span className="text-lg">
            Dashboard
          </span>

        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cyan-500/10 transition-all cursor-pointer">

          <Globe size={24} />

          <span className="text-lg">
            URL Scanner
          </span>

        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cyan-500/10 transition-all cursor-pointer">

          <ShieldAlert size={24} />

          <span className="text-lg">
            Threats
          </span>

        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cyan-500/10 transition-all cursor-pointer">

          <Lock size={24} />

          <span className="text-lg">
            Security
          </span>

        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cyan-500/10 transition-all cursor-pointer">

          <Settings size={24} />

          <span className="text-lg">
            Settings
          </span>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;