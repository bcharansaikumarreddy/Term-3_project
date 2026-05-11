import "./Loader.css";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
      <FadeLoader size={50} />
    </div>
  );
};

export default Loader;
