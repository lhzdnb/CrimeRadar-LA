import React from "react";
import { Button, Form, Input, message } from "antd";
import { verifyUserCredentialApi } from "./loginApi";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const navigate = useNavigate();
  const verifyCredentials = async (values) => {
    const token = await verifyUserCredentialApi(values);
    if (!token) {
      return message.error("登录失败，请检查用户名和密码");
    }
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <div>
      <Form
        className={"login_form"}
        onFinish={verifyCredentials}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item
          name={"username"}
          label={"Username"}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={"password"}
          label={"Password"}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button htmlType={"submit"} type="primary" danger={true}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
