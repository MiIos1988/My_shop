import App from "../App";
import ActivationAccountPageComponent from "../pages/ActivationAccountPageComponent";
import HomePageComponent from "../pages/HomePageComponent";
import LoginPageComponent from "../pages/LoginPageComponent";
import RegisterPageComponent from "../pages/RegisterPageComponent";


const router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePageComponent />,
      },
      {
        path: "register",
        element: <RegisterPageComponent />,
      },
      {
        path: "activation-account/:activationId",
        element: <ActivationAccountPageComponent />,
      },
      {
        path: "active",
        element: <ActivationAccountPageComponent />,
      },
      {
        path: "login",
        element: <LoginPageComponent />,
      },
    ],
  },
];

export default router;
