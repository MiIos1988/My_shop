import axios from "axios"
import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavbarComponent";

axios.defaults.baseURL = "http://localhost:5050/api"

function App() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default App;
