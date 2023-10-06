import { useEffect } from "react";
import { preloader } from "../utilits";

const PreLoader = () => {
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};
export default PreLoader;
