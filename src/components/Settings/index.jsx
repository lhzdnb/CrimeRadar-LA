import React from "react";
import { Flex } from "antd";
import "./index.css";

import SettingsForm from "./SettingsForm";
import Title from "../Title";

function Settings(props) {
  return (
    <Flex
      className="settings_page"
      vertical
      align={"center"}
      justify={"center"}
    >
      <Title />
      <SettingsForm />
    </Flex>
  );
}

export default Settings;
