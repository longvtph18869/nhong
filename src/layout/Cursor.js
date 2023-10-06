import { Fragment, useEffect } from "react";
import { customCursor } from "../utilits";

const Cursor = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Cursor;
