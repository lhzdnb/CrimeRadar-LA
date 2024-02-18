import React from "react";
import { Flex } from "antd";
import "./index.css";

import SettingsForm from "./SettingsForm";

function Settings(props) {
  return (
    <Flex
      className="settings_page"
      vertical
      align={"center"}
      justify={"center"}
    >
      <SettingsForm />
    </Flex>
  );
}

export default Settings;
