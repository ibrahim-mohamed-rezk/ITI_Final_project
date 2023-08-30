import { useNavigate } from "react-router-dom";

export const UseCheckLogin = () => {
  const user = localStorage.getItem("name");
  const islogin = localStorage.getItem("isLogin");

  if (user && islogin) {
    return true;
  } else {
    return false;
  }
};
