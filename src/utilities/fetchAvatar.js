import axios from "axios";

const fetchAvatarImage = async () => {
  const username = sessionStorage.getItem("username");
  const {
    data: { data },
  } = await axios.get(`http://localhost:8000/avatar/?username=${username}`);

  return data;
};

export default fetchAvatarImage;
