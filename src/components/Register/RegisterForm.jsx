import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form, Input, notification, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import registerApi from "./registerApi";
import { tailFormItemLayout } from "../../utilities/formLayout";
import "./index.css";

function RegisterForm(props) {
  const [fetching, setFetching] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  async function handleRegister(values) {
    setFetching(true);

    try {
      const resMessage = await registerApi(values);

      if (resMessage === "用户名已被注册") {
        setFetching(false);
        return message.error("该用户名已被注册，请更换一个");
      }
      setFetching(false);

      openNotification(resMessage, "将在三秒后跳转至登录页面", "success");
      setTimeout(() => navigate("/login"), 3000);
    } catch (e) {
      setFetching(false);
      openNotification("发送注册请求失败，请稍后再试。", "", "error");
    }
  }

  function openNotification(message, description, type) {
    api[type]({
      message: message,
      description,
      placement: "top",
    });
  }

  return (
    <>
      {contextHolder}
      <Form
        className="register_form"
        onFinish={handleRegister}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        scrollToFirstError
      >
        <Form.Item
          name={"username"}
          rules={[{ required: true, message: "请输入用户名！" }]}
          label={"用户名"}
        >
          <Input
            prefix={<UserOutlined />}
            className={"login_input"}
            placeholder={"用户名"}
          />
        </Form.Item>

        <Form.Item
          name={"password"}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
          label={"密码："}
        >
          <Input.Password
            prefix={<LockOutlined />}
            className={"login_input"}
            placeholder={"密码"}
          />
        </Form.Item>

        <Form.Item
          name={"confirmPassword"}
          hasFeedback
          rules={[
            {
              required: true,
              message: "两次输入的密码不匹配，请重新输入！",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("两次输入的密码不匹配，请重新输入！"),
                );
              },
            }),
          ]}
          label={"确认密码"}
        >
          <Input.Password
            prefix={<LockOutlined />}
            className={"login_input"}
            placeholder={"再次确认密码"}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            danger={true}
            loading={fetching}
            className={"submit_button"}
            htmlType={"submit"}
          >
            {fetching ? "注册中..." : "注册"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default RegisterForm;
