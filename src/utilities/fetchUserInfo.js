import { accountURL } from "./apiURL";
import axios from "axios";

async function fetchUserInfo(username) {
  const url = accountURL + `/profile/?username=${username}`;
  const {
    data: { data },
  } = await axios.get(url);

  return data;
}

export default fetchUserInfo;
