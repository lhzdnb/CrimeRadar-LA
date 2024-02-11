import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Drawer, FloatButton } from "antd";

function MyDrawer(props) {
  const [open, setOpen] = useState(false);

  function showDrawer() {
    setOpen(true);
  }

  function closeDrawer() {
    setOpen(false);
  }

  return (
    <>
      <FloatButton
        icon={<UserOutlined />}
        type="primary"
        style={{ right: 94, top: 20 }}
        onClick={showDrawer}
        tooltip={<div>菜单栏</div>}
      />
      <Drawer title="Settings" onClose={closeDrawer} open={open}>
        <Button type="link" block>
          用户设置
        </Button>
        <Button block danger>
          退出登录
        </Button>
      </Drawer>
    </>
  );
}

export default MyDrawer;
