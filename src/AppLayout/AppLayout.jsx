import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useNavigation } from "react-router";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Loader />;

  return (
    <div>
      <>
        <Header />
      </>
      <main className="min-vh-100">
       {isLoading ? <Loader /> : <Outlet />}
      </main>
      <>
        <Footer />
      </>
    </div>
  );
};

export default AppLayout;
