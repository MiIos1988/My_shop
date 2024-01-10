import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
//@ts-ignore
import { saveUser, isAdminLogin } from "../../redux/userSlicer";
import {
  isAdmin,
  loginData,
  setTokenInLocalStorage,
} from "../../service/authService";
import jwt_decode from 'jwt-decode';
//@ts-ignore
import { toggleLoader } from "../../redux/loaderSlicer";
import { useEffect, useState } from "react";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams()
  const [query, setQuery] = useState<null | string>()

  useEffect(() => {
    setQuery(queryParams.get("id"))
    dispatch(toggleLoader(false));
  }, []
  )

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });

  type Data = {
      email: string,
      password: string
  }

  const clickHandler = async (data: Data) => {
    try {
     const res = await loginData(data)
     const decodedToken = jwt_decode(res.data.token);
       setTokenInLocalStorage(res.data.token);
       dispatch(saveUser(decodedToken));
       if (isAdmin()) {
         navigate("/dashboard");
         dispatch(isAdminLogin(true));
        } else {
              query ? navigate("/checkout") : navigate(-1)
            }
    } catch (error) {
      console.log( error)
    }
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
          <Form className="  col-lg-4 " >
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
            <ErrorMessage name="password" />

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
