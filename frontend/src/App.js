import axios from "axios"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavbarComponent";
import { saveUser } from "./redux/userSlicer";

axios.defaults.baseURL = "http://localhost:5050/api"
axios.interceptors.request.use((config) => {
  if (localStorage.hasOwenProperty("my_token")) {
    config.headers.Authorization.localStorage.getItem("my_token")
  }
  return config;
})
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("my_user")) {
      dispatch(saveUser(JSON.parse(localStorage.getItem("my_user"))));
    }
  }, []
  )



  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default App;
