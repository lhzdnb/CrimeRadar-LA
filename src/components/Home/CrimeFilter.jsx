import React, { useState } from "react";
import { Form, Select, DatePicker, Button, message } from "antd";

import { selectOptions } from "../../config/selectOptions";
import dayjs from "dayjs";
import fetchCrime from "../../utilities/fetchCrime";

const { RangePicker } = DatePicker;

function CrimeFilter({ handleData, handleClose }) {
  const today = dayjs();
  const threeDaysAgo = today.subtract(3, "day");

  const [loading, setLoading] = useState(false);
  async function onFinish(values) {
    if (!values.timeRange) {
      values.timeRange = [threeDaysAgo, today];
    }
    try {
      const crimeData = await fetchCrime(values);
      handleData(crimeData);
      message.success(`成功查询到${crimeData.length}条犯罪记录`);
      handleClose();
    } catch (e) {
      message.error("查询失败，请稍后再试！");
    }
  }

  const rangeConfig = {
    rules: [
      {
        type: "array",
        message: "请选择时间范围",
      },
    ],
  };

  const typeConfig = {
    rules: [
      {
        required: true,
        message: "请选择犯罪类型",
      },
    ],
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Form
      name="crime_filter"
      onFinish={onFinish}
      className={"crime_filter_form"}
    >
      <Form.Item name="timeRange" label="时间范围" {...rangeConfig}>
        <RangePicker defaultValue={[threeDaysAgo, today]} />
      </Form.Item>
      <Form.Item name="type" label="犯罪类型" {...typeConfig}>
        <Select
          showSearch
          placeholder="选择一个犯罪类型"
          optionFilterProp="children"
          filterOption={filterOption}
          options={selectOptions}
        />
      </Form.Item>
      <Form.Item>
        <Button block htmlType={"submit"} type="primary" loading={loading}>
          {loading ? "递交中" : "递交"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CrimeFilter;
