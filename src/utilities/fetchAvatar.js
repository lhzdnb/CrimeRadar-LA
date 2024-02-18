import axios from "axios";

const fetchAvatarImage = async (username) => {
  const {
    data: { data },
  } = await axios.get(`http://localhost:8000/avatar/?username=${username}`);

  return data;
};

export default fetchAvatarImage;
