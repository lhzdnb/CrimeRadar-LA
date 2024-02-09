// react 自带库
import React from "react";

// 第三方库
import { Button, Form, Input } from "antd";

// 自己写的
import "./index.css";
import LoginForm from "./LoginForm";

function Login(props) {
  return (
    <div className={"login_page"}>
      <LoginForm />
    </div>
  );
}

export default Login;
