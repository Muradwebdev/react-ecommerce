import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router";

import delImgUrl from "../../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCartItems);
  }, []);
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      handleRemoveItem(item);
    }
  };
  const handleRemoveItem = (item) => {
    const isConfirmed = window.confirm("Bu mehsul silinsin?");
    if (!isConfirmed) return;
    const updatedCart = cartItems.filter(
      (cartItems) => cartItems.id !== item.id,
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  // cart subtotal
  const cartSubtotal = cartItems?.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // order total

  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                      </td>
                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            name="qtybutton"
                            id=""
                            value={item?.quantity || 1}
                            className="text-center"
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        $ {calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart top end */}
            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code..."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form action="#" className="cart-checkout">
                  <input type="submit" value="Update cart" />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>
              {/* shopping box */}
              <div className="shipping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shipping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="tr">Turkish</option>
                          <option value="ru">Russian</option>
                          <option value="uk">Ukraine</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="Postcode/ZIP *"
                      />
                      <button type="submit">Update Adress</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ {cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">${orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

// 2 saat 40 deq
