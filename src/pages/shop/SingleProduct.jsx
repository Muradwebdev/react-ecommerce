import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { getProductsById } from "../../products";
import PageHeader from "../../components/PageHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";

const SingleProduct = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductsById(id),
    enabled: !!id,
  });

  if (isLoading) return <Loader />;
  if (error) return <p>Sehife tapilmadi !</p>;

  return (
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / SingleProducts"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swipper-container pro-single-top">
                          <Swiper
                            className="mySwiper"
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prew",
                              nextEl: ".pro-single-next",
                            }}
                          >
                            {product.map((val, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={val.img} alt="img" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* details */}
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div className="">
                          {product.map((item) => (
                            <ProductDisplay key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review">
                  <Review />
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">right</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
