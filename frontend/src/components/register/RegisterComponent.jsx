import { useFormik } from 'formik';
import { userData } from '../../service/authService';
import * as Yup from "yup"

const registerSchema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    phone: Yup.number().required(),
    city: Yup.string().required()

})


const RegisterComponent = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phone: '',
            city: '',
        },
        onSubmit: values => {
            console.log(values)
            userData(values).then(res => console.log("working backend"))
                .catch(error => console.log(error));
        },
    })
    return (
        <>
            <form className='col-4 offset-4 mt-4' onSubmit={formik.handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name={"email"} value={formik.values.email} onChange={formik.handleChange} id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name={"password"} value={formik.values.password} onChange={formik.handleChange} id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" name={"confirmPassword"} value={formik.values.confirmPassword} onChange={formik.handleChange} id="confirmPassword" />
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" name={"firstName"} value={formik.values.firstName} onChange={formik.handleChange} id="firstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" name={"lastName"} value={formik.values.lastName} onChange={formik.handleChange} id="lastName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" name={"phone"} value={formik.values.phone} onChange={formik.handleChange} id="phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" name={"city"} value={formik.values.city} onChange={formik.handleChange} id="city" />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    )
}

export default RegisterComponent;