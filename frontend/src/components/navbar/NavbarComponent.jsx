import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeUser } from "../../redux/userSlicer"

const NavbarComponent = () => {
  const dispatch = useDispatch()
  const userStore = useSelector((store) => store.userSlicer.user);

  const onLogout = () => dispatch(removeUser())

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                  !userStore?.email ? (
                    <>
                      <li><Link className="dropdown-item" to={"/register"}>Register</Link></li>
                      <li><Link className="dropdown-item" to={"/login"}>Login</Link></li>
                    </>
                  ) : (
                    <>
                      <li><Link className="dropdown-item" to={"/"}>Profile</Link></li>
                      <li><Link className="dropdown-item" to={"/"} onClick={onLogout}>Logout</Link></li>
                    </>
                  )
                }


              </ul>
            </li>

          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent