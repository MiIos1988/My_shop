import AuthGuardComponent from "../guard/AuthGuardComponent";
import App from "../App";
import ActivationAccountPageComponent from "../pages/ActivationAccountPageComponent";
import HomePageComponent from "../pages/HomePageComponent";
import LoginPageComponent from "../pages/LoginPageComponent";
import RegisterPageComponent from "../pages/RegisterPageComponent";
import ShopPageComponent from "../pages/ShopPageComponent";
import AdminPageComponent from "../pages/admin/AdminPageComponent";
import { AdminGuardComponent } from "../guard/AdminGuardComponent";
import CreateProductComponent from "../pages/admin/CreateProductComponent";
import ShowAllProduct from "../pages/admin/ShowAllProduct";

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
        element: (
          <AuthGuardComponent>
            <RegisterPageComponent />
          </AuthGuardComponent>
        ),
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
        element: (
          <AuthGuardComponent>
            <LoginPageComponent />
          </AuthGuardComponent>
        ),
      },
      {
        path: "shop",
        element: <ShopPageComponent />
      },

    ],
  },
  {
    path: "dashboard",
    element: (
      <AdminGuardComponent>
        <AdminPageComponent />
      </AdminGuardComponent>
    ),
    children: [
      {
        path: "create-edit-product",
        element: <CreateProductComponent />
      },
      {
        path: 'create-edit-product/:id',
        element: <CreateProductComponent />
      },
      {
        path: "show-product",
        element: <ShowAllProduct />
      },

    ]
  }
];

export default router;
