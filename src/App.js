import "./App.css";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";

import { ConfigProvider } from "antd";
import { HappyProvider } from "@ant-design/happy-work-theme";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import RegisterPage from "./components/Register";
import ErrorPage from "./components/ErrorPage";

function App() {
  const location = useLocation();
  const nodeRef = React.useRef(null);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: "#000000",
          wireframe: false,
          colorPrimary: "#ff4d4f",
          colorInfo: "#ff4d4f",
        },
        components: {
          Notification: {
            colorBgElevated: "rgb(197,53,70)",
            colorText: "rgb(255, 241, 240)",
            colorTextHeading: "rgb(219, 228, 255)",
          },
          Button: {
            defaultColor: "rgb(255, 241, 240)",
          },
          Input: {
            activeBg: "rgb(255, 241, 240)",
          },
          DatePicker: {
            activeBg: "rgb(255, 204, 199)",
            cellActiveWithRangeBg: "rgb(255, 241, 240)",
            cellHoverBg: "rgb(255, 241, 240)",
          },
          Form: {
            labelColor: "rgb(92, 0, 17)",
          },
          Message: {
            contentBg: "rgb(255, 204, 199)",
          },
          Drawer: {
            colorBgElevated: "rgb(255, 241, 240)",
          },
          Descriptions: {
            labelBg: "rgb(255, 241, 240)",
          },
        },
      }}
    >
      <HappyProvider>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames={{
              enter:
                location.pathname === "/register"
                  ? "forward-enter"
                  : "back-enter",
              enterActive:
                location.pathname === "/register"
                  ? "forward-enter-active"
                  : "back-enter-active",
              exit:
                location.pathname === "/login" ? "back-exit" : "forward-exit",
              exitActive:
                location.pathname === "/login"
                  ? "back-exit-active"
                  : "forward-exit-active",
            }}
            nodeRef={nodeRef}
          >
            <div ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </HappyProvider>
    </ConfigProvider>
  );
}

export default App;
