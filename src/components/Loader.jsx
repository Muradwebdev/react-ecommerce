import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <HashLoader color="#ff3366" size={80} />
    </div>
  );
};

export default Loader;
