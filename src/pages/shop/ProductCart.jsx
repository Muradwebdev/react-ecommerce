import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";

const ProductCart = ({ data, gridList }) => {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${gridList ? "grid" : "list"}`}
    >
      {data &&
        data.map((product, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-12">
            <div className="product-item">
              {/* product image */}
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt={product.name} />
                </div>
                {/* product links */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <i className="icofont-eye"></i>
                  </Link>
                  <a href="#">
                    <i className="icofont-heart"></i>
                  </a>
                  <Link to="/cart-page">
                    <i className="icofont-cart-alt"></i>
                  </Link>
                </div>
              </div>

              {/* product content */}
              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>

                <div className="productRating">
                  <Rating />
                </div>

                <h6>${product.price}</h6>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCart;
