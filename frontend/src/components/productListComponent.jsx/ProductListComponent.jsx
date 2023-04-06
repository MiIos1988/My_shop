import { useEffect, useState } from "react";
import { getProductData } from "../../service/productService";
import ProductComponent from "./component/ProductComponent";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../../redux/loaderSlicer";

const ProductListComponent = (props) => {
  const { dashboard } = props;
  const [product, setProduct] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    perPage: 12,
    allPag: 1
  });
  const [arrayPagination, setArrayPagination] = useState([]);
  const selectArray = [4, 8, 12, 16, 24, 48];
  const [active, setActive] = useState(1)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoader(true))
    getProductData(pagination)
      .then((res) => {
        let numberPagination = res.data.countQuery;
        setProduct(res.data.data);
        const paginationAllNumber = Math.ceil(
          numberPagination / pagination.perPage
        );
        // console.log(paginationAllNumber )
        let copyPagination = { ...pagination, allPag: paginationAllNumber };
        setPagination(copyPagination)
        setArrayPagination(
          Array.from({ length: paginationAllNumber }, (v, k) => k + 1)
        );
        dispatch(toggleLoader(false))
      })
      .catch((err) => console.log(err));
  }, [pagination.perPage, pagination.start, pagination.allPag]);

  return (
    <>
      <div className="row container d-flex m-auto flex-wrap">
        {product?.map((el, index) => {
          return (
            <div className={"col-xl-3 col-lg-4 col-sm-6"} key={index}>

              <ProductComponent
                imgUrl={el.imgUrl}
                title={el.title}
                price={el.price}
                id={el._id}
                dashboard={dashboard}
              // description={el.description}
              />
            </div>

          );
        })}
      </div>
      <div className="mt-5 d-flex justify-content-center paginationField">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Per Page: {pagination.perPage}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {selectArray.map((el, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        setPagination({
                          ...pagination, perPage: el,
                          start: 0
                        });
                        setActive(1)
                      }}

                    >
                      {el}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        <nav  aria-label="Page navigation example " className="paginationNav">
          <ul className="pagination justify-content-start">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Previous" onClick={() => {
                if (pagination.start > 0) {
                  setPagination({ ...pagination, start: pagination.start - 1 });
                  setActive(active - 1);
                  window.scrollTo(0, 0);
                }
              }}>
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            {arrayPagination?.map((el, index) => {

              return (
                <li key={index} className={`page-item ${el === active ? "active" : ""}`} onClick={(e) => {
                  {
                    setPagination({ ...pagination, start: el - 1 });
                    setActive(Number(e.target.text));
                    window.scrollTo(0, 0);
                  }
                }}>
                  <Link className="page-link" >
                    {el}
                  </Link>
                </li>
              );
            })}

            <li className="page-item">
              <Link className="page-link" href="#" aria-label="Next" onClick={() => {
                if (pagination.start + 1 < pagination.allPag) {
                  setPagination({ ...pagination, start: pagination.start + 1 });
                  setActive(active + 1);
                  window.scrollTo(0, 0);
                }

              }}>
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ProductListComponent;
