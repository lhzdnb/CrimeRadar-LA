import React, { useEffect } from "react";
import fetchUserInfo from "../../utilities/fetchUserInfo";
import { Flex, Form, message, Input, InputNumber, Button, Radio } from "antd";
import CustomUpload from "./CustomUpload";
import fetchAvatarImage from "../../utilities/fetchAvatar";
import { accountURL } from "../../utilities/apiURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QueueAnim from "rc-queue-anim";

function SettingsForm(props) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    async function getUserdata() {
      try {
        const data = await fetchUserInfo();
        const img = await fetchAvatarImage();
        form.setFieldsValue(data); // 使用获取到的数据设置表单项的值
      } catch (e) {
        message.error("获取当前用户信息失败，请稍后再试！");
      }
    }
    getUserdata();
  }, [form]); // 依赖项中添加form

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 48,
      },
    },
  };

  function onFinish(userInfo) {
    axios
      .post(accountURL + `/update-profile/`, userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => message.success(response.data.message))
      .catch((error) => message.error(error.message));
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="settings"
      onFinish={onFinish}
      className="settings_form"
    >
      <QueueAnim
        type={["right", "left"]}
        component="div"
        className="form-queue-anim"
        ease={["easeOutQuart", "easeInOutQuart"]}
        duration={3000}
      >
        <div key="a">
          <Form.Item>
            {/*<img src={avatar} alt="Your profile picture" className="avatar"/>*/}
            <CustomUpload />
          </Form.Item>

          <Form.Item name="username" label="用户名">
            <Input />
          </Form.Item>

          <Form.Item name="age" label="年龄">
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item name="gender" label="性别">
            <Radio.Group>
              <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: "email",
                message: "请输入正确的邮箱",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="address" label="地址">
            <Input />
          </Form.Item>

          <Form.Item name="preferred_address" label="偏好地址">
            <Input />
          </Form.Item>

          <Form.Item>
            <Flex gap={"large"}>
              <Button type="primary" htmlType="submit">
                递交修改
              </Button>
              <Button type="primary" onClick={() => navigate("/")}>
                返回地图
              </Button>
            </Flex>
          </Form.Item>
        </div>
      </QueueAnim>
    </Form>
  );
}

export default SettingsForm;
