import React, { useState } from "react";
import { Button, Form, Input, notification, message } from "antd";
import registerApi from "./registerApi";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { formItemLayout, tailFormItemLayout } from "../../utilities/formLayout";

function RegisterForm(props) {
  const [fetching, setFetching] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  async function handleRegister(values) {
    setFetching(true);

    const resMessage = await registerApi(values);

    if (resMessage === "用户名已被注册") {
      setFetching(false);
      return message.error("该用户名已被注册，请更换一个");
    }
    setFetching(false);

    openNotification(resMessage, "success");
  }

  function openNotification(message, type) {
    api[type]({
      message: message,
      description: "Enjoy using this App!",
    });
  }

  function comparePassword() {}

  return (
    <div>
      {contextHolder}
      <Form
        className="register_form"
        onFinish={handleRegister}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        scrollToFirstError
        {...formItemLayout}
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
    </div>
  );
}

export default RegisterForm;
