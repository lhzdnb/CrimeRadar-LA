import { accountURL } from "../../utilities/apiURL";

export const verifyUserCredentialApi = async ({ username, password }) => {
  const response = await fetch(
    `${accountURL}/login/?username=${username}&password=${password}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );

  const data = await response.json();
  if (data.message === "登录成功") {
    return data.data.token;
  } else {
    return;
  }
};
