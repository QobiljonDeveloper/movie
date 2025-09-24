import { memo } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import footer_logo from "@/shared/assets/footer-logo.svg";

export const Footer = memo(() => {
  return (
    <div className=" flex flex-col">

      <footer className="bg-py dark:bg-black py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 text-white">
          <div className="flex flex-col gap-6">
            <img src={footer_logo} alt="Footer Logo" className="w-32" />
            <div className="flex flex-col gap-2">
              <Link
                to="/google-play"
                className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded"
              >
                Google Play
              </Link>
              <Link
                to="/app-store"
                className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded"
              >
                App Store
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold mb-2">О нас</h4>
              <Link to="/offer" className="text-th hover:underline">
                Публичная оферта
              </Link>
              <Link to="/advertising" className="text-py hover:underline">
                Реклама
              </Link>
              <Link to="/faq" className="text-th hover:underline">
                F.A.Q
              </Link>
              <Link to="/contacts" className="text-th hover:underline">
                Контакты
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold mb-2">Категории</h4>
              <Link to="/movies" className="text-th hover:underline">
                Кино
              </Link>
              <Link to="/theater" className="text-th hover:underline">
                Театр
              </Link>
              <Link to="/concerts" className="text-th hover:underline">
                Концерты
              </Link>
              <Link to="/sports" className="text-rh hover:underline">
                Спорт
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Связаться с нами</h4>
            <p className="text-py">+998 (95) 897-33-38</p>
            <h4 className="text-white font-semibold mt-4 mb-2">
              Социальные сети
            </h4>
            <div className="flex gap-4 text-py text-xl">
              <FaInstagram />
              <FaFacebookF />
              <FaYoutube />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});
