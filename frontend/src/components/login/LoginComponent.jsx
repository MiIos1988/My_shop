import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { loginData } from "../../service/authService";

const LoginComponent = () => {

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(2, "Too Short!").required("Required"),
    });

    const clickHandler = data => {
        loginData(data).then(res => {
            console.log(res.data)
        })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Formik initialValues={{
                email: '',
                password: '',
            }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    clickHandler(values)
                }}>
                <Form className="col-4 offset-4" >
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

                    <button className="btn btn-primary" type="submit">Login</button>
                </Form>
            </Formik>

        </>
    )

}

export default LoginComponent