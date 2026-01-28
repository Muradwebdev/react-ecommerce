import { useState } from "react";
// import products from "../../../products.json";

import { Link } from "react-router";
import SelectedCategory from "../../components/SelectedCategory";
const title = (
  <h2>
    Search One From <span>Thoursand</span> of Products
  </h2>
);

const desc = "We have the largest collection of products";

// const bannerList = [
//   { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
//   { iconName: "icofont-notification", text: "More then 2000 Marchent" },
//   { iconName: "icofont-globe", text: "Buy Anything Online" },
// ];

const Banner = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handlerSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    const filtered =
      data &&
      data.filter((product) =>
        product.seller.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    setFilteredProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory />
            <input
              type="text"
              name="search"
              placeholder="Search your products"
              value={searchInput}
              onChange={handlerSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`./shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
