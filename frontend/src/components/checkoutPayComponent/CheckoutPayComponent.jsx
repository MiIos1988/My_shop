import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isUserLogin } from "../../service/authService";

const CheckoutPayComponent = () => {

    const [loginUser, setLoginUser] = useState()

    useEffect(() => {
      let user = isUserLogin()
      setLoginUser(JSON.parse(user))
    },[]
    )

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    phone: Yup.string().required().min(2, "Too Short!"),
    address: Yup.string().required(),
    city: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: loginUser?.email,
      firstName: loginUser?.firstName,
      lastName: loginUser?.lastName,
      phone: loginUser?.phone,
      address: "",
      city: loginUser?.city,
    },
    enableReinitialize: true,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
    console.log(values)
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="col-6 offset-3 mt-5">
        <label htmlFor="firstName">First Name</label>
        <input
        className="form-control"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName || ""}
        /><br/>
        <label htmlFor="lastName">Last Name</label>
        <input
        className="form-control"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName || ""}
        /><br/>
        <label htmlFor="email">Email Address</label>
        <input
        className="form-control"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email || ""}
        /><br/>
        <label htmlFor="email">Phone</label>
        <input
        className="form-control"
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone || ""}
        /><br/>
        <label htmlFor="email">Address</label>
        <input
        className="form-control"
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address || ""}
        /><br/>
        <label htmlFor="email">City</label>
        <input
        className="form-control"
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city || ""}
        /><br/>
        <button type="submit" className="form-control btn btn-primary">Continue payment</button>
      </form>
    </div>
  );
};

export default CheckoutPayComponent;
