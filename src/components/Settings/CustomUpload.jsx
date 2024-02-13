import React, { useEffect, useState } from "react";
import { Upload, Button, message, Image, Avatar, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import fetchAvatarImage from "../../utilities/fetchAvatar";
import { accountURL } from "../../utilities/apiURL";

const CustomUpload = () => {
  const [avatarSrc, setAvatarSrc] = useState("");
  const username = sessionStorage.getItem("username");

  async function getAvatar() {
    const data = await fetchAvatarImage();
    setAvatarSrc(accountURL + "/avatar/" + data);
  }

  useEffect(() => {
    getAvatar();
  }, [getAvatar]);

  const handleUpload = ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append("image", file); // 'image' 是后端接收文件的参数名
    formData.append("username", username);

    fetch("http://localhost:8000/upload-avatar/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          // 上传成功处理
          message.success("上传成功");
          onSuccess(result, file);
          getAvatar();
        } else {
          // 服务器返回错误
          message.error("上传失败");
          onError(new Error("上传失败"));
        }
      })
      .catch((error) => {
        // 网络或其他错误处理
        message.error("上传异常");
        onError(new Error("上传异常"));
      });
    getAvatar();
  };

  return (
    <>
      <Space wrap size={16} className="avatar_container">
        <Avatar src={avatarSrc} size={64} />
      </Space>
      <Upload customRequest={handleUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />}>点击上传图片</Button>
      </Upload>

      {/*<Button onClick={getAvatar}>更新头像</Button>*/}

      {/*<Image src={avatarSrc} preview={false}></Image>*/}
    </>
  );
};

export default CustomUpload;
