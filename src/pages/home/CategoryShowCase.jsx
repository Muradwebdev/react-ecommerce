import React, { useState } from "react";
import Rating from "../../components/Rating";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { categoryProducts } from "../../products";
const title = "Our Products";

const CategoryShowCase = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryProducts,
  });
console.log( data)
  const [active, setActive] = useState("All");
  const filteredItems =
    active === "All"
      ? data
      : data?.filter(
          (item) => item?.category.toLowerCase() === active.toLowerCase(),
        );

  if (isLoading) return <div>Yüklənir...</div>;
  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.img" alt="" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.img" alt="" />
      </div>
      {/* main section */}

      <div className="container">
        {/* section header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li
                className={active === "All" ? "categoryActive" : ""}
                onClick={() => setActive("All")}
              >
                All
              </li>
              <li
                className={active === "Shoes" ? "categoryActive" : ""}
                onClick={() => setActive("Shoes")}
              >
                Shoes
              </li>
              <li
                className={active === "Bags" ? "categoryActive" : ""}
                onClick={() => setActive("Bags")}
              >
                Bags
              </li>
              <li
                className={active === "Phones" ? "categoryActive" : ""}
                onClick={() => setActive("Phones")}
              >
                Phones
              </li>
              <li
                className={active === "Beauty" ? "categoryActive" : ""}
                onClick={() => setActive("Beauty")}
              >
                Beauty
              </li>
            </ul>
          </div>
        </div>
        {/* section body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-col-xl-4 row-cols-lg-3 row-cols-md-2 course-filter row-cols-1">
            {filteredItems?.map((item, i) => (
              <div key={i}>
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={item?.img_url} alt="" />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{item?.category}</a>
                        </div>
                        <div className="course-reiew">
                          <Rating />
                        </div>
                      </div>
                    </div>
                    <div className="course-content">
                      <Link to={`/shop/${item.id}`}>
                        <h6>{item?.title}</h6>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to="/" className="ca-name">
                            {item?.brand}
                          </Link>
                        </div>
                        <div className="course-price">{item.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
