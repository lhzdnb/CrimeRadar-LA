// react 自带库
import React from "react";

// 第三方库

// 自己写的
import "./index.css";
import LoginForm from "./LoginForm";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import Layout from "./Layout";
const { Title } = Typography;

function Login(props) {
  const navigate = useNavigate();
  function toRegister() {
    navigate("/register");
  }
  function toAbout() {
    navigate("/about");
  }

  return (
    <Flex
      className={"login_page"}
      vertical
      gap={"large"}
      align={"center"}
      justify={"center"}
    >
      <Layout />
      <h1 className={"title"}>CrimeRadar - LA</h1>
      <LoginForm />
    </Flex>
  );
}

export default Login;
