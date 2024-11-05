import "animate.css/animate.compat.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import ScrollAnimation from "react-animate-on-scroll";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <App />

  </StrictMode>
);
