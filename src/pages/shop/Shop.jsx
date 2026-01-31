import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
// import Data from "../products.json";
import ProductCart from "./ProductCart";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../products";
import Pagination from "./Pagination";
import Search from "../../components/Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import Loader from "../../components/Loader";

const Shop = () => {
  // ReactQuery
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  // useState
  const [gridList, setGridList] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setProducts(data);
  }, [data]); 

  const showResults = `Showing 01-12 of ${gridList ? data.length : 0}  Results`;
  // pagination

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOffFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOffFirstProduct,
    indexOfLastProduct,
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const menuItems = [...new Set(data?.map((val) => val.category))];
  const filterItem = (curcat) => {
    if (curcat === "All") {
      setProducts(data);
    } else {
      const newItem = data.filter((item) => item.category === curcat);
      setProducts(newItem);
    }
    setSelectedCategory(curcat);
    setCurrentPage(1);
  };

  if (isLoading) return <Loader />;

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
                      className={`grid ${gridList ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setGridList(true);
                      }}
                    >
                      <i className="icofont-ghost"></i>
                    </a>
                    <a
                      href="#"
                      className={`list ${!gridList ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setGridList(false);
                      }}
                    >
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div className="">
                  <ProductCart data={currentProducts} gridList={gridList} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products?.length}
                  paginate={paginate}
                  activePage={currentPage}
                  gridList={gridList}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={data} gridList={gridList} />
                <ShopCategory
                  data={data}
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
