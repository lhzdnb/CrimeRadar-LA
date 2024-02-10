import { accountURL } from "../../utilities/apiURL";
import { json } from "react-router-dom";

export default async function registerApi(data) {
  const url = accountURL + "/register/";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw Error("发送注册请求失败，请稍后再试。");
  }

  const resData = await response.json();
  return resData.message;
}
