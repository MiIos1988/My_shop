import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/userSlicer";
import { removeLocalStorage } from "../../service/authService";
import "animate.css";
import logo from "../../assets/image/logo-zurea.jpg";

const NavbarComponent = () => {


  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.userSlicer.user);
  const cartSlicer = useSelector(store => store.cartSlicer);
  // console.log(cartSlicer)

  const onLogout = () => {
    removeLocalStorage("my_user");
    removeLocalStorage("my_token");
    dispatch(removeUser());
  };

  return (
    // <div className="container-fluid mt-5">
    <nav className=" navbar navbar-expand-lg navbar-light bg-light border border-secondary mx-5 m-auto py-0">
      <Link className="navbar-brand" to={"/"}>
        <img className="py-3 px-5" src={logo} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
          <li className="nav-item">
            <Link
              className="navigationLink nav-link animate__animated animate__backInLeft"
              aria-current="page"
              to={"/"}
            >
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="navigationLink nav-link animate__animated animate__backInLeft"
              to={"/shop"}
            >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="navigationLink nav-link animate__animated animate__backInRight"
              aria-current="page"
              to={"/"}
            >
              Watch
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="navigationLink nav-link dropdown-toggle animate__animated animate__backInRight"
              to={"/"}
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </Link>
            <div
              className="dropdown-menu ulDiv"
              aria-labelledby="navbarDropdown"
            >
              <ul className="d-flex navUl">
                <li>
                  <Link className="dropdown-item" to={"/"}>
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/"}>
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/"}>
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="nav-item dropdown user">
          <Link
            className="nav-link "
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></Link>
          <ul
            className="dropdown-menu dropdown-menu-end animate__animated animate__slideInDown "
            aria-labelledby="navbarDropdown"
          >
            {!userStore?.email ? (
              <>
                <li>
                  <Link className="dropdown-item" to={"/register"}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/login"}>
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="dropdown-item" to={"/"}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/"} onClick={onLogout}>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="dropdown searchDrop ">
          <button
            className="btn btn-secondary searchBtn"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul
            className="dropdown-menu dropdown-menu-end animate__animated animate__slideInDown px-2"
            aria-labelledby="dropdownMenu2"
          >
            <form className="d-flex">
              <input
                className="form-control me-2 searchInp "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
        <div className="basketAll">
          <div className="basket d-flex px-3">
            <div className="basketImg "></div>
            <p className="align-self-center m-0">Cart - {!cartSlicer.cart.length ? 0 : cartSlicer.cart.length}</p>
          </div>
          <div className="cardDropdown border">No Product Add In Cart</div>
        </div>
      </div>
    </nav>
    // {/* </div> */}
  );
};

export default NavbarComponent;
