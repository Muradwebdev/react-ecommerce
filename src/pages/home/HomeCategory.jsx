import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import { categoryList } from "../../products";
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const HomeCategory = () => {
  const { data } = useQuery({
    queryKey: ["categoryList"],
    queryFn: categoryList,
  });
  console.log(data);
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* section header */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        {/* section card */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1 ">
            {data?.map((val, i) => (
              <div key={i}>
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    <div className="category-thump">
                      <img src={val.imgUrl} alt="img" />
                    </div>
                    {/* content */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={`${val.iconName}`}></i>
                      </div>
                      <h6>{val.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <Link to="/shop" className="lab-btn">
            <span>{btnText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
