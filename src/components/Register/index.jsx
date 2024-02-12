import React from "react";

import { Flex } from "antd";

import Layout from "../Login/Layout";
import RegisterForm from "./RegisterForm";
import "./index.css";
import Title from "../Title";

function RegisterPage(props) {
  return (
    <Flex
      className={"register_page"}
      vertical
      gap={"large"}
      align={"center"}
      justify={"center"}
    >
      <Layout />
      <Title />
      <RegisterForm />
    </Flex>
  );
}

export default RegisterPage;
