import React, { useEffect, useState } from "react";
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
import fetchAvatarImage from "../../utilities/fetchAvatar";
import { accountURL } from "../../utilities/apiURL";
import { useSelector } from "react-redux";

function MyDrawer({ handleData }) {
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const remember = useSelector((state) => state.remember);
  const username = remember
    ? localStorage.getItem("username")
    : sessionStorage.getItem("username");

  useEffect(() => {
    async function getAvatar() {
      if (username) {
        try {
          const img = await fetchAvatarImage(username);
          setAvatar(accountURL + "/avatar/" + img);
        } catch (e) {
          message.error("获取用户头像失败，请稍后再试");
        }
      }
    }

    getAvatar();
  }, []);

  function showDrawer() {
    setOpen(true);
  }

  function closeDrawer() {
    setOpen(false);
  }

  function navigateToSetting() {
    setOpen(false);
    navigate("/settings");
  }

  function confirm() {
    api["success"]({
      message: "成功退出登录",
      description: "将在三秒后返回登陆页面",
    });
    setOpen(false);
    setTimeout(() => {
      sessionStorage.clear();
      localStorage.clear();
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
        style={{ right: 94, top: 24 }}
        onClick={showDrawer}
        tooltip={<div>菜单栏</div>}
      />

      <div className="outer_container">
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
                {avatar ? (
                  <Avatar size={48} src={avatar} />
                ) : (
                  <Avatar size={48} icon={<UserOutlined />} />
                )}
                <h3>{username}</h3>
                <Button type="link" block onClick={navigateToSetting}>
                  用户设置
                </Button>
              </Flex>

              <div className="filter">
                <Divider orientation="left">筛选犯罪条件</Divider>
                <CrimeFilter
                  handleData={handleData}
                  handleClose={closeDrawer}
                />
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
      </div>
    </>
  );
}

export default MyDrawer;
