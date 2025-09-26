import { memo } from "react";
import logo from "@/shared/assets/footer-logo.svg";
import apple from "@/shared/assets/apple.png";
import goole from "@/shared/assets/google.png";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export const Footer = memo(() => {
  return (
    <footer className="bg-white dark:bg-gradient-to-r dark:from-black dark:via-[#111] dark:to-black text-black dark:text-white py-10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Logo" className="w-22" />
            <div className="flex flex-col gap-3">
              <img
                src={apple}
                alt="App Store"
                className="w-28 cursor-pointer hover:opacity-80 transition"
              />
              <img
                src={goole}
                alt="Google Play"
                className="w-28 cursor-pointer hover:opacity-80 transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">О нас</h3>
            {["Публичная оферта", "Реклама", "F.A.Q", "Контакты"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="relative inline-block text-th dark:text-gray-300 hover:text-py transition 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:w-0 after:h-[2px] after:bg-py 
                  after:transition-all after:duration-300 
                  hover:after:w-full"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Категории</h3>
            {["Кино", "Театр", "Концерты", "Спорт"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative inline-block text-th dark:text-gray-300 hover:text-py transition 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:w-0 after:h-[2px] after:bg-py 
                  after:transition-all after:duration-300 
                  hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Контакты</h3>
            <p className="text-lg font-bold text-py">+998 99 123 11 22</p>
            <p className="mb-2 mt-[10px]">Социальные сети:</p>
            <div className="flex gap-5 text-2xl">
              <a
                href="#"
                className="hover:text-pink-500 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition duration-200"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
