import App from "../App"
import HomePageComponent from "../pages/HomePageComponent"
import LoginPageComponent from "../pages/LoginPageComponent"
import RegisterPageComponent from "../pages/RegisterPageComponent"

const router = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePageComponent />
            },
            {
                path: 'register',
                element: <RegisterPageComponent/>
            },
            {
                path: 'login',
                element: <LoginPageComponent/>
            }
        ]
    }

]


export default router