import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  categoryProductData,
  getProductData,
  searchProductData,
} from "../../service/productService";
import ProductComponent from "./component/ProductComponent";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../../redux/loaderSlicer";

type ProductListComponentProps = {
  dashboard?: boolean;
};

const ProductListComponent = (props: ProductListComponentProps) => {
  const [queryParams] = useSearchParams();
  const { dashboard } = props;
  const [product, setProduct] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    perPage: 12,
    allPag: 1,
  });
  const [arrayPagination, setArrayPagination] = useState<number[]>([]);
  const selectArray = [4, 8, 12, 16, 24, 48];
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  const isMountedRef = useRef(false);

  useEffect(() => {
    if (queryParams.get("search")) {
      onSearch();
    } else if (queryParams.get("category")) {
      onCategory();
    } else {
      loadAllProducts();
    }
    dispatch(toggleLoader(false));
  }, [pagination.perPage, pagination.start, pagination.allPag, queryParams]);

  const loadAllProducts = async () => {
    try {
      const res = await getProductData(pagination);
      let numberPagination = res.data.countQuery;
      setProduct(res.data.data);
      const paginationAllNumber = Math.ceil(
        numberPagination / pagination.perPage
      );
      let copyPagination = { ...pagination, allPag: paginationAllNumber };
      setPagination(copyPagination);
      setArrayPagination(
        Array.from({ length: paginationAllNumber }, (v, k) => k + 1)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onSearch = async () => {
    try {
      const res = await searchProductData({
        search: queryParams.get("search"),
      });
      let numberPagination = res.data.countQuery;
      setProduct(res.data.data);
      const paginationAllNumber = Math.ceil(
        numberPagination / pagination.perPage
      );
      let copyPagination = { ...pagination, allPag: paginationAllNumber };
      setPagination(copyPagination);
      setArrayPagination(
        Array.from({ length: paginationAllNumber }, (v, k) => k + 1)
      );
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  const onCategory = async () => {
    try {
      const res = await categoryProductData({
        categoryId: queryParams.get("category"),
        pagination,
      });
      let numberPagination = res.data.countQuery;
      setProduct(res.data.data);
      const paginationAllNumber = Math.ceil(
        numberPagination / pagination.perPage
      );
      let copyPagination = { ...pagination, allPag: paginationAllNumber };
      setPagination(copyPagination);
      setArrayPagination(
        Array.from({ length: paginationAllNumber }, (v, k) => k + 1)
      );
    } catch (err) {
      console.log(err);
    }
  };
  type Product = {
    imgUrl: string;
    title: string;
    price: number;
    _id: number;
    dashboard: boolean;
  };
  return (
    <>
      <div className="row container d-flex m-auto flex-wrap">
        {product?.map((el: Product, index: number) => {
          return (
            <div className={"col-xl-3 col-lg-4 col-sm-6"} key={index}>
              <ProductComponent
                imgUrl={el.imgUrl}
                title={el.title}
                price={el.price}
                id={el._id}
                dashboard={dashboard}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-5 d-flex justify-content-center paginationField">
        {!queryParams && (
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
                      to=""
                      className="dropdown-item"
                      onClick={() => {
                        setPagination({
                          ...pagination,
                          perPage: el,
                          start: 0,
                        });
                        setActive(1);
                      }}
                    >
                      {el}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <nav aria-label="Page navigation example " className="paginationNav">
          <ul className="pagination justify-content-start">
            <li className="page-item">
              <div
                className="page-link"
                aria-label="Previous"
                onClick={() => {
                  if (pagination.start > 0) {
                    setPagination({
                      ...pagination,
                      start: pagination.start - 1,
                    });
                    setActive(active - 1);
                    window.scrollTo(0, 0);
                  }
                }}
              >
                <span aria-hidden="true">&laquo;</span>
              </div>
            </li>
            {arrayPagination?.map((el, index) => {
              return (
                <li
                  key={index}
                  className={`page-item ${el === active ? "active" : ""}`}
                  onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                    {
                      const liElement = e.target as HTMLLIElement;
                      setPagination({ ...pagination, start: el - 1 });
                      setActive(Number(liElement.textContent));
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  <div className="page-link">{el}</div>
                </li>
              );
            })}

            <li className="page-item">
              <div
                className="page-link"
                aria-label="Next"
                onClick={() => {
                  if (pagination.start + 1 < pagination.allPag) {
                    setPagination({
                      ...pagination,
                      start: pagination.start + 1,
                    });
                    setActive(active + 1);
                    window.scrollTo(0, 0);
                  }
                }}
              >
                <span aria-hidden="true">&raquo;</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ProductListComponent;
