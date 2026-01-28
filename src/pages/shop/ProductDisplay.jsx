import { useState } from "react";

const desc = "Energistia an deliver atactica metros after avsionaryy";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingCount, quantity } = item;

  const [prequantity, setPrequantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");


  function handlerSizeChange(e) {
    setSize(e.target.value)
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
          {ratingCount} review
        </p>
        <h4>${price}</h4>
        <h6>${seller}</h6>
        <p>{desc}</p>
      </div>
      {/* cart components */}
      <div>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
