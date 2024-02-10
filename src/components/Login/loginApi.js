import { accountURL } from "../../utilities/apiURL";

export const verifyUserCredentialApi = async ({ username, password }) => {
  const response = await fetch(
    `${accountURL}/login/?username=${username}&password=${password}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok) {
    throw Error("发送登录请求失败，请稍后再试。");
  }

  const respData = await response.json();
  if (respData.message === "登陆成功") {
    return respData.data.token;
  } else {
    return null;
  }
};
