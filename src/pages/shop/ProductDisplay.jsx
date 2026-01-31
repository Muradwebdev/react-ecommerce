import { useState } from "react";
import { Link } from "react-router";

const desc = "Energistia an deliver atactica metros after avsionaryy";

const ProductDisplay = ({ item }) => {
  const {
    id,
    category,
    name,
    seller,
    price,
    stock,
    ratings,
    ratingscount,
    img,
    shipping,
    quantity,
  } = item;
  const [prequantity, setPrequantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  function handleSubmit(e) {
    e.preventDefault();
    const product = {
      id: id,
      category: category,
      name: name,
      seller: seller,
      price: price,
      stock: stock,
      ratings: ratings,
      ratingscount: ratingscount,
      img: img,
      shipping: shipping,
      quantity: quantity,
      color: color,
      size: size,
      coupon: coupon,
    };
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id,
    );
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    //  update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));
    // reset form fields
    setPrequantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  }

  function handlerSize(e) {
    setColor(e.target.value);
  }

  function handlerSizeChange(e) {
    setSize(e.target.value);
  }

  function handleDecrease() {
    if (prequantity > 0) setPrequantity((prequantity) => prequantity - 1);
  }

  function handleIncrease() {
    setPrequantity((prequantity) => prequantity + 1);
  }

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          {ratingscount} review
        </p>
        <h4>${price}</h4>
        <h6>${seller}</h6>
        <p>{desc}</p>
      </div>
      {/* cart components */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="select-product size ">
            <select value={size} onChange={handlerSizeChange}>
              <option>Select size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="Xl">Xl</option>
              <option value="XX">XX</option>
            </select>
          </div>

          <div className="select-product color ">
            <select value={color} onChange={handlerSize}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* cart plus minus */}
          <div></div>
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              className="car-plus-minus-box"
              onChange={(e) => setPrequantity(parseInt(e.target.value))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* coupon filed */}

          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          <button className="lab-btn" type="submit">
            Add To Cart
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
