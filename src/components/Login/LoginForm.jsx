import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { verifyUserCredentialApi } from "./loginApi";
import { NavLink, useNavigate } from "react-router-dom";
import QueueAnim from "rc-queue-anim"; // Import QueueAnim
import "./index.css";
import { userActions } from "../../store/userStatus";
import { useDispatch, useSelector } from "react-redux";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!localStorage.getItem("remember")) {
    localStorage.setItem("remember", false);
  }
  const remember = useSelector((state) => state.remember);
  dispatch(
    userActions.setRemember({
      status: JSON.parse(localStorage.getItem("remember")),
    }),
  );
  const verifyCredentials = async (values) => {
    setLoading(true);
    try {
      const token = await verifyUserCredentialApi(values);
      if (!token) {
        setLoading(false);
        return message.error("登录失败，请检查用户名和密码");
      }
      setLoading(false);
      console.log(remember);
      if (!remember) {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("username", values.username);
      } else {
        localStorage.setItem("token", token);
        localStorage.setItem("username", values.username);
      }
      console.log("navigate to home");
      navigate("/");
    } catch (e) {
      openNotification("发送登录请求失败，请稍后再试。");
      setLoading(false);
    }
  };

  function openNotification(message) {
    api["error"]({
      message,
      placement: "top",
    });
  }

  function onChange(e) {
    console.log(e.target.checked);
    localStorage.setItem("remember", e.target.checked);
    dispatch(userActions.setRemember({ status: e.target.checked }));
  }

  return (
    <>
      {contextHolder}
      <Form
        className={"login_form"}
        onFinish={verifyCredentials}
        initialValues={{
          remember: true,
        }}
      >
        <QueueAnim
          type="bottom"
          component="div"
          className="form-queue-anim"
          delay={4000}
          duration={3000}
        >
          <div key="a">
            <Form.Item
              name="username"
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
          </div>

          <div key="b">
            <Form.Item
              name="password"
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
          </div>

          <div key="c">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox
                className="remember_me"
                onChange={onChange}
                checked={remember}
              >
                记住我
              </Checkbox>
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
            </Form.Item>
          </div>

          <div key="d">
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
          </div>
        </QueueAnim>
      </Form>
    </>
  );
}

export default LoginForm;
