import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { verifyUserCredentialApi } from "./loginApi";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const verifyCredentials = async (values) => {
    setLoading(true);
    const token = await verifyUserCredentialApi(values);
    if (!token) {
      setLoading(false);
      return message.error("登录失败，请检查用户名和密码");
    }
    setLoading(false);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("username", values.username);
    navigate("/");
  };

  return (
    <Form
      className={"login_form"}
      onFinish={verifyCredentials}
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name={"username"}
        rules={[
          {
            required: true,
            message: "请输入用户名！",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          className={"login_input"}
          placeholder={"用户名"}
        />
      </Form.Item>

      <Form.Item
        name={"password"}
        rules={[
          {
            required: true,
            message: "请输入密码！",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          className={"login_input"}
          placeholder={"密码"}
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox className="remember_me">记住我</Checkbox>
        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          htmlType={"submit"}
          type="primary"
          danger={true}
          loading={loading}
          className={"login_button"}
        >
          {loading ? "登录中..." : "登录"}
        </Button>
        <NavLink to={"/register"}>现在注册</NavLink>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
