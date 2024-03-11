// react 自带库
import React, { useEffect } from "react";

// 第三方库

// 自己写的
import "./index.css";
import LoginForm from "./LoginForm";
import { Flex, message } from "antd";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Title from "../Title";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
      message
        .success("用户已经登录，将跳转至地图页面！")
        .then(() => navigate("/"));
    }
  }, []);

  return (
    <Flex className={"login_page"} vertical align={"center"} justify={"center"}>
      <Layout />

      <Title />

      <LoginForm />
    </Flex>
  );
}

export default Login;
