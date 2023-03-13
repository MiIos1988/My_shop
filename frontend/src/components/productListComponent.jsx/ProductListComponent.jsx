import { useEffect, useState } from "react";
import { getProductData } from "../../service/productService";
import ProductComponent from "./component/ProductComponent";
import { Link } from "react-router-dom";

const ProductListComponent = () => {
  const [product, setProduct] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    perPage: 12,
    allPag: 1
  });
  const [arrayPagination, setArrayPagination] = useState([]);
  const selectArray = [4, 8, 16, 24, 48];

  useEffect(() => {
    getProductData(pagination)
      .then((res) => {
        let numberPagination = res.data.countQuery;
        setProduct(res.data.data);
        const paginationAllNumber = Math.ceil(
          numberPagination / pagination.perPage
        );
        setPagination({ ...pagination, allPag: paginationAllNumber })
        setArrayPagination(
          Array.from({ length: paginationAllNumber }, (v, k) => k + 1)
        );
      })
      .catch((err) => console.log(err));
  }, [pagination.perPage, pagination.start]);

  return (
    <>
      <div className="row container d-flex gap-4 flex-wrap">
        {product?.map((el, index) => {
          return (
            <ProductComponent
              key={index}
              imgUrl={el.imgUrl}
              title={el.title}
              price={el.price}
            />
          );
        })}
      </div>
      <div className="row ">
        <div className="col-2 offset-2">
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
                        setPagination({ ...pagination, perPage: el });
                      }}

                    >
                      {el}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <nav className="col-8" aria-label="Page navigation example">
          <ul className="pagination justify-content-start">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Previous" onClick={() => {
                if (pagination.start === 0) {
                  setPagination({ ...pagination, start: 0 });
                } else {
                  setPagination({ ...pagination, start: pagination.start - 1 });
                }
              }}>
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            {arrayPagination?.map((el, index) => {
              return (
                <li key={index} className="page-item">
                  <Link className="page-link" onClick={() => {
                    {
                      setPagination({ ...pagination, start: el - 1 });
                    }
                  }}>
                    {el}
                  </Link>
                </li>
              );
            })}

            <li className="page-item">
              <Link className="page-link" href="#" aria-label="Next" onClick={() => {
                console.log(pagination.start)
                console.log(pagination.allPag)
                console.log(pagination.start >= pagination.allPag)
                if (pagination.start + 1 > pagination.allPag) {
                  setPagination({ ...pagination, start: pagination.allPag });
                } else {
                  setPagination({ ...pagination, start: pagination.start + 1 });
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
