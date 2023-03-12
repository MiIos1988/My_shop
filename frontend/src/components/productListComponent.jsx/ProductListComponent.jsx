import { useEffect, useState } from "react";
import { getProductData } from "../../service/productService";
import ProductComponent from "./component/ProductComponent";
import { Link } from "react-router-dom";

const ProductListComponent = () => {
  const [product, setProduct] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    perPage: 8,
  });
  const [arrayPagination, setArrayPagination] = useState([]);
  const [allNumberPagination, setAllNumberPagination] = useState(null);

  useEffect(() => {
    getProductData(pagination)
      .then((res) => {
        let numberPagination = res.data.countQuery;
        setAllNumberPagination(numberPagination);
        setProduct(res.data.data);
        const paginationAllNumber = Math.ceil(
          numberPagination / pagination.perPage
        );
        console.log(paginationAllNumber);
        setArrayPagination(
          Array.from({ length: paginationAllNumber }, (v, k) => k + 1)
        );
      })
      .catch((err) => console.log(err));
  }, []);

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
      <nav className="row " aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link className="page-link" to="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          {arrayPagination?.map((el, index) => {
            return (
              <li key={index} className="page-item">
                <Link className="page-link" to="#">
                  {el}
                </Link>
              </li>
            );
          })}

          <li className="page-item">
            <Link className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProductListComponent;
