import { useState } from "react";
import PageHeader from "../../components/PageHeader";
// import Data from "../prducts.json";
import ProductCart from "./ProductCart";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../products";
import Pagination from "./Pagination";
const showResults = "Showing 01-12 of 139 Results";

const Shop = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [gridList, setGridList] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // pagination

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOffFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.slice(indexOffFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}
                  >
                    <a
                      href="#"
                      className="grid"
                      onClick={() => setGridList(!gridList)}
                    >
                      <i className="icofont-ghost"></i>
                    </a>
                    <a href="#" className="grid">
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div className="">
                  <ProductCart data={currentProducts} gridList={gridList} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={data?.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
