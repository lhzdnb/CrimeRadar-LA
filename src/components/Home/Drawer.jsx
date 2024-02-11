import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Flex,
  FloatButton,
  message,
  notification,
  Popconfirm,
} from "antd";
import { useNavigate } from "react-router-dom";
import CrimeFilter from "./CrimeFilter";
import "./index.css";

function MyDrawer(props) {
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  function showDrawer() {
    setOpen(true);
  }

  function closeDrawer() {
    setOpen(false);
  }

  function confirm() {
    api["success"]({
      message: "成功退出登录",
      description: "将在三秒后返回登陆页面",
    });
    setTimeout(() => {
      sessionStorage.clear();
      navigate("/login");
    }, 3000);
  }

  function cancel() {
    message.success("取消退出登录");
  }

  return (
    <>
      {contextHolder}
      <FloatButton
        icon={<UserOutlined />}
        type="primary"
        style={{ right: 94, top: 20 }}
        onClick={showDrawer}
        tooltip={<div>菜单栏</div>}
      />
      <Drawer
        title="CrimeRadar - LA"
        onClose={closeDrawer}
        open={open}
        size="middle"
      >
        <Flex
          justify="space-between"
          align="center"
          vertical
          gap="small"
          className="drawer_container"
        >
          <div>
            <Flex justify="center" align="center" vertical gap="large">
              <Avatar size={48} icon={<UserOutlined />} />
              <h3>{sessionStorage.getItem("username")}</h3>
              <Button type="link" block>
                用户设置
              </Button>
            </Flex>

            <div className="filter">
              <Divider orientation="left">筛选犯罪条件</Divider>
              <CrimeFilter />
            </div>
          </div>

          <Popconfirm
            title={"退出登录"}
            description={"是否退出登录？"}
            onConfirm={confirm}
            onCancel={cancel}
            okText={"是"}
            cancelText={"否"}
          >
            <Button danger block>
              退出登录
            </Button>
          </Popconfirm>
        </Flex>
      </Drawer>
    </>
  );
}

export default MyDrawer;
