const DetailsPopup = ({ open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src="img/thumbs/4-2.jpg" alt="image" />
              <div
                className="main"
                data-img-url="img/portfolio/6.jpg"
                style={{ backgroundImage: 'url("img/portfolio/6.jpg")' }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>Global Evolution</h3>
              <span>
                <a href="#">Detail</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                  We live in a world where we need to move quickly and iterate
                  on our ideas as flexibly as possible.
                </p>
                <p>
                  {`Mockups are useful both for the creative phase of the project
                  - for instance when you're trying to figure out your user
                  flows or the proper visual hierarchy - and the production
                  phase when they phase when they will represent the target
                  product. Building mockups strikes the ideal balance ease of
                  modification.`}
                </p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Client</span>
                    <span>Alvaro Morata</span>
                  </li>
                  <li>
                    <span className="first">Category</span>
                    <span>
                      <a href="#">Detail</a>
                    </span>
                  </li>
                  <li>
                    <span className="first">Date</span>
                    <span>March 07, 2021</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="additional_images">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                        style={{
                          backgroundImage: 'url("img/portfolio/1.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                        style={{
                          backgroundImage: 'url("img/portfolio/2.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                        style={{
                          backgroundImage: 'url("img/portfolio/3.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
