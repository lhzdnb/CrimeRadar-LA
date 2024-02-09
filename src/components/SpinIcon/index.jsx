import React from "react";
import "./index.css";

function SpinIcon(props) {
  return (
    <template>
      <view className="page">
        <view className="container">
          <view className="ring"></view>
          <view className="ring"></view>
          <view className="ring"></view>
          <view className="ring"></view>
          <view className="h3">加载中...</view>
        </view>
      </view>
    </template>
  );
}

export default SpinIcon;
