// react 自带库
import React from "react";

// 第三方库

// 自己写的
import "./index.css";
import LoginForm from "./LoginForm";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Title from "../Title";

function Login(props) {
  const navigate = useNavigate();
  function toRegister() {
    navigate("/register");
  }
  function toAbout() {
    navigate("/about");
  }

  return (
    <Flex className={"login_page"} vertical align={"center"} justify={"center"}>
      <Layout />

      <Title />

      <LoginForm />
    </Flex>
  );
}

export default Login;
