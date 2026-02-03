import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const AppLayout = () => {
  return (
    <div>
      <>
        <Header />
      </>
      <main className="min-vh-100">
        <Outlet />
      </main>
      <>
        <Footer />
      </>
    </div>
  );
};

export default AppLayout;
