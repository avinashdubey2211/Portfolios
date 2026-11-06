import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  Home,
  LayoutDashboard,
  Info,
  Phone,
  LogOut,
  UserRound,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userMobile");
    navigate("/login", { replace: true });
  };

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-purple-500/15 text-purple-300"
        : "text-slate-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#070b1a]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/20 transition duration-300 group-hover:rotate-12">
            <Sparkles size={23} className="text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              Aura<span className="text-purple-400">Tech</span>
            </h1>
            <p className="text-[10px] tracking-[2px] text-slate-500">
              BUILD. INNOVATE. GROW.
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkStyle}
              >
                <Icon size={16} />
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
              <UserRound size={16} className="text-purple-300" />
            </div>

            <div>
              <p className="text-xs font-semibold text-white">Welcome Back</p>
              <p className="text-[10px] text-slate-500">AuraTech User</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition hover:border-red-500/40 hover:bg-red-500/20"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#090e20] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={linkStyle}
                >
                  <Icon size={18} />
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-5 border-t border-white/10 pt-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-purple-500/20 p-3">
                <UserRound size={19} className="text-purple-300" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Welcome Back</p>
                <p className="text-xs text-slate-500">AuraTech User</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 py-3 text-sm font-semibold text-red-400"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
