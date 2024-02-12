import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./utilities/router";
import { ConfigProvider } from "antd";
import { HappyProvider } from "@ant-design/happy-work-theme";

function App() {
  const route = useRoutes(routes);

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
            colorBgElevated: "rgb(168, 7, 26)",
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
        <div className="App">{route}</div>
      </HappyProvider>
    </ConfigProvider>
  );
}

export default App;
