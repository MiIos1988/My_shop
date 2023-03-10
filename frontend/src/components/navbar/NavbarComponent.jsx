import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/userSlicer";
import { removeLocalStorage } from "../../service/authService";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.userSlicer.user);

  const onLogout = () => {
    removeLocalStorage("my_user");
    removeLocalStorage("my_token");
    dispatch(removeUser());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Link
              </Link>
            </li>
            <li className="nav-item dropdown user">
              <Link
                className="nav-link "
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                      <Link
                        className="dropdown-item"
                        to={"/"}
                        onClick={onLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
          <div className="dropdown searchDrop">
            <button
              className="btn btn-secondary searchBtn"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <form className="d-flex">
                <input
                  className="form-control me-2"
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
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
