import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner";
import CategoryShowCase from "./CategoryShowCase";
import HomeCategory from "./HomeCategory";
import { getProducts } from "../../products";
import Register from "./Register";
import LocationSprade from "./LocationSprade";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";
import Loader from "../../components/Loader";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log(data);
  if (isLoading) return <Loader />;
  return (
    <div>
      <Banner data={data} />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSprade />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </div>
  );
};

export default Home;
