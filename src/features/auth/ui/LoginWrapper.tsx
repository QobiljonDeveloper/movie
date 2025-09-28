import { memo } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "../model/authSlice";
import { useTranslation } from "react-i18next";

export const LoginWrapper = memo(() => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 dark:bg-sy transition-colors duration-300">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center gap-6">
        <h1 className="text-2xl font-medium text-gray-800 dark:text-gray-100">
          {t("login.title")}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
          {t("login.subtitle")}
        </p>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (!credentialResponse.credential) return;
            const payload = jwtDecode<any>(credentialResponse.credential);
            dispatch(setUser(payload));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 text-xs mt-4">
          <span>{t("login.terms")}</span>
          <a href="#" className="text-py dark:text-red-400 underline">
            {t("login.terms_link")}
          </a>
        </div>
      </div>
    </div>
  );
});
