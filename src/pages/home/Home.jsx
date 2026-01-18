import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner";
import CategoryShowCase from "./CategoryShowCase";
import HomeCategory from "./HomeCategory";
import { getProducts } from "../../products";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div>
      <Banner data={data} />
      <HomeCategory />
      <CategoryShowCase />
    </div>
  );
};

export default Home;
