import React from "react";

import { Flex } from "antd";

import Layout from "../Login/Layout";
import RegisterForm from "./RegisterForm";
import "./index.css";

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
      <h1 className={"title"}>CrimeRadar - LA</h1>
      <RegisterForm />
    </Flex>
  );
}

export default RegisterPage;
