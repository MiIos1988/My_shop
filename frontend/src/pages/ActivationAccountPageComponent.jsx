import { useNavigate, useParams } from "react-router-dom"
import { userActive } from "../service/authService";

const ActivationAccountPageComponent = () => {
    const params = useParams()
    const userId = params.activationId;
const navigate = useNavigate()

    userActive(userId).then( data => navigate("/login"))
    .catch( error => console.log("Problem in activation email."));



}

export default ActivationAccountPageComponent