const CopyRight = ({ brandName }) => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed with love by{" "}
                <a
                  href="https://themeforest.net/user/codeefly"
                  target="_blank"
                  rel="noreferrer"
                >
                  {brandName && brandName}
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="#">{`Terms & Condition`}</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
