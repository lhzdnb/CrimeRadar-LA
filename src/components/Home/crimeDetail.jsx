import React from "react";
import { Button, Descriptions, Drawer, Space } from "antd";
import dayjs from "dayjs";
import { crimeCodeMap, sexCodeMap } from "../../utilities/crimeCodeMap";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

function CrimeDetail({ open, onClose, crime }) {
  console.log(crime);
  const item = crime
    ? [
        {
          key: "1",
          label: "案件描述",
          children: crime.crm_cd_desc || "无信息",
        },
        {
          key: "2",
          label: "日期",
          children: dayjs(crime.date_occ).format("LL") || "无信息",
        },
        {
          key: "3",
          label: "地点",
          children: crime.location || "无信息",
        },
        {
          key: "4",
          label: "受害者年龄",
          children: crime.vict_age || "无信息",
        },
        {
          key: "5",
          label: "受害者种族",
          children: crimeCodeMap[crime.vict_descent] || "无信息",
        },
        {
          key: "6",
          label: "受害者性别",
          children: sexCodeMap[crime.vict_sex] || "无信息",
        },
        {
          key: "7",
          label: "武器描述",
          children: crime.weapon_desc || "无信息",
        },
      ]
    : [];

  return (
    <Drawer
      title="犯罪信息"
      placement="bottom"
      width="300"
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button type="primary" onClick={onClose}>
            关闭
          </Button>
        </Space>
      }
    >
      <Descriptions items={item} />
    </Drawer>
  );
}

export default CrimeDetail;
