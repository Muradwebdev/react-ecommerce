import { ThreeDot } from "react-loading-indicators";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <ThreeDot
        variant="bounce"
        color="#ffe040"
        size="medium"
        text=""
        textColor=""
      />
    </div>
  );
};

export default Loader;
