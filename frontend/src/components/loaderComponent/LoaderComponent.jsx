import { useSelector } from "react-redux";
import loader from "../../assets/image/loader.gif"
const LoaderComponent = () => {
    const showLoader = useSelector(state => state.loaderSlicer.loader);
    console.log(showLoader)

    return (
        showLoader &&
        <div className="loader">
            <img src={loader} alt="loader" />
        </div>
    )
}

export default LoaderComponent;