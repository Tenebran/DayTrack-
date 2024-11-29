import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { CssBaseline } from "@mui/material";
import { App } from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import "./translations/i18n";
import { CustomThemeProvider } from "./common/context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter
    basename={process.env.NODE_ENV === "production" ? "/DayTrack-/" : "/"}
  >
    <Provider store={store}>
      <CustomThemeProvider>
        <CssBaseline />
        <App />
      </CustomThemeProvider>
    </Provider>
  </BrowserRouter>,
);
