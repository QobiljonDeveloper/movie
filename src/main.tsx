import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/style/index.css";
import App from "./app";
import "@ant-design/v5-patch-for-react-19";
import "./app/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
