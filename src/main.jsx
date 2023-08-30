import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ConfigProvider } from "antd";

import { Provider } from "react-redux";
import store from "./redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#5c449e",
            colorPrimaryHover: "#ccc0fa4",
          },
        },
        // token: {
        //   borderRadius: "5px",
        //   colorPrimary: "#5c4493",
        // },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
