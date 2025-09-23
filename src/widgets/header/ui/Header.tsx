import { memo, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/shared/assets/logo.svg";
import {
  IoBookmarkSharp,
  IoFilm,
  IoSearch,
  IoHome,
  IoSunny,
  IoMoon,
} from "react-icons/io5";
import { Select, Button } from "antd";
import ReactCountryFlag from "react-country-flag";

export const Header = memo(() => {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { to: "/", icon: <IoHome size={20} />, label: "Home" },
    { to: "/movies", icon: <IoFilm size={20} />, label: "Movies" },
    {
      to: "/bookmarks",
      icon: <IoBookmarkSharp size={20} />,
      label: "Bookmarks",
    },
    { to: "/search", icon: <IoSearch size={20} />, label: "Search" },
  ];

  return (
    <header className="bg-white dark:bg-sy">
      <div className="container flex items-center justify-between h-20 md:flex">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center ${
                    isActive ? "text-py" : "text-th dark:text-gray-300"
                  }`}
                >
                  {item.icon}
                  <span className="font-inter font-medium text-xs">
                    {item.label}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Select
            defaultValue="en"
            className="custom-select"
            options={[
              {
                value: "en",
                label: (
                  <span className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode="GB"
                      svg
                      style={{ width: 20, height: 20 }}
                    />
                    English
                  </span>
                ),
              },
              {
                value: "ru",
                label: (
                  <span className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode="RU"
                      svg
                      style={{ width: 20, height: 20 }}
                    />
                    Русский
                  </span>
                ),
              },
              {
                value: "uz",
                label: (
                  <span className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode="UZ"
                      svg
                      style={{ width: 20, height: 20 }}
                    />
                    O‘zbek
                  </span>
                ),
              },
            ]}
          />
          <button className="bg-py text-white font-inter font-medium px-4 py-2 rounded-lg">
            Войти
          </button>

          <Button
            type="text"
            onClick={() => setDarkMode(!darkMode)}
            className="!text-black dark:!text-yellow-400"
            icon={darkMode ? <IoSunny size={18} /> : <IoMoon size={18} />}
          />
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-sy border-t border-gray-200 dark:border-gray-700 flex justify-around items-center h-16 md:hidden">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center ${
                  isActive ? "text-py" : "text-th dark:text-gray-300"
                }`}
              >
                {item.icon}
                <span className="font-inter font-medium text-xs">
                  {item.label}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
});
