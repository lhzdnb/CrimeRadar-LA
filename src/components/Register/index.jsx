import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Login/Layout";
import { Flex } from "antd";
import RegisterForm from "./RegisterForm";

function RegisterPage(props) {
  const navigate = useNavigate();

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
