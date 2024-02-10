import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button, Flex } from "antd";
import "./index.css";

function Layout(props) {
  return (
    <>
      <Flex
        gap={"middle"}
        justify={"space-between"}
        align={"center"}
        className={"nav-bar"}
      >
        <div>Logo</div>
        <Flex gap={"middle"}>
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            登录
          </NavLink>
          <NavLink
            to={"/register"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            注册
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            关于我们
          </NavLink>
        </Flex>
      </Flex>
      <Outlet />
    </>
  );
}

export default Layout;
