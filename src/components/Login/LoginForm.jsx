import React, { useState } from "react";
import { Button, Checkbox, Flex, Form, Input, message } from "antd";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { verifyUserCredentialApi } from "./loginApi";
import { useNavigate } from "react-router-dom";

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
    localStorage.setItem("token", token);
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
        <Checkbox className="remember_me" checked>
          记住我
        </Checkbox>
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
        <Button type={"link"} className={"register-button"}>
          现在注册
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
