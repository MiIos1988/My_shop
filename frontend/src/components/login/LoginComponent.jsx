import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUser, isAdminLogin } from "../../redux/userSlicer";
import {
  isAdmin,
  loginData,
  setTokenInLocalStorage,
} from "../../service/authService";
import jwt_decode from 'jwt-decode';
import { toggleLoader } from "../../redux/loaderSlicer";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });

  const clickHandler = (data) => {
    console.log("1")
    loginData(data)
      .then((res) => {
        console.log("2")
        const decodedToken = jwt_decode(res.data.token);
        setTokenInLocalStorage(res.data.token);
        dispatch(saveUser(decodedToken._doc));
        console.log("3")
        if(isAdmin()) {
           navigate("/dashboard");
          dispatch(isAdminLogin(true) );
          console.log("4")
        } else {
          console.log("5")
          navigate("/checkout")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-5">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          clickHandler(values);
        }}
      >
        <div className="row justify-content-center mx-2">
          <Form className="  col-lg-4 ">
            <Field
              className="form-control my-2"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" />
            <Field
              className="form-control my-2"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="email" />

            <button className="btn btn-primary form-control" type="submit">
              Login
            </button>
            <br />
            <br />
            <Link
              to={"/register"}
              className="text-reset text-decoration-none d-flex justify-content-center"
            >
              If you don't have an account, register
            </Link>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default LoginComponent;
