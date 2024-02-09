import { accountURL } from "../../utilities/apiURL";

export const verifyUserCredentialApi = async ({ username, password }) => {
  const response = await fetch(
    `${accountURL}/login/?username=${username}&password=${password}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );

  const respData = await response.json();
  console.log(respData.message);
  if (respData.message === "登陆成功") {
    return respData.data.token;
  } else {
    return null;
  }
};
