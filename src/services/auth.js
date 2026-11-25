import axios from "axios";
import {getToken} from "../utils/auth";

export const fetchUserFromServer = async () => {
  const token = getToken();
  if (!token) return null;


  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log(">>>>>>>>>> " , res.data);
  
  return res.data.user;
};