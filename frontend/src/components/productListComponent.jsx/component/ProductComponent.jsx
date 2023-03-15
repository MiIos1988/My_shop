function ProductComponent(props) {
  const { imgUrl, title, price } = props;
  return (
   
      <div className=" d-flex flex-column product mt-4">
        <div className="border border-secondary imgSection">
          <img
            src={imgUrl}
            alt="product"
          />
        </div>
        <div className="priceSection">
          <p className="title">
            {title}
          </p>
          <p className="price">${price}</p>
          <button className="btn btn-secondary addBtn">Add To Cart</button>
        </div>
      </div>
   
  );
}

export default ProductComponent;
