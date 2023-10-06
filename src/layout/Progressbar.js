import { useEffect } from "react";

const Progressbar = () => {
  useEffect(() => {
    let scrollUp = document.getElementById("scroll-top"),
      lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let st = window.scrollY;
      if (st > 110) {
        scrollUp.classList.add("active");
      } else {
        scrollUp.classList.remove("active");
      }
    });
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="progressbar">
      <a href="#" id="scroll-top" onClick={() => onClick()}>
        <span className="text" style={{ bottom: "150.75px" }}>
          To Top
        </span>
      </a>
      <span className="line" />
    </div>
  );
};
export default Progressbar;
