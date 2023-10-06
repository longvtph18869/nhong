const ServicePopup = ({ data, open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        {data && (
          <div className="description_wrap">
            <div className="service_popup_informations">
              <div className="image">
                <img src="img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url={data && data.img}
                  style={{ backgroundImage: `url(${data && data.img})` }}
                />
              </div>
              <div className="main_title">
                <h3>{data && data.title ? data.title : "Title"}</h3>
                <span className="price">
                  Starts from <span>${data && data.price}</span>
                </span>
              </div>
              <div className="descriptions">
                {data &&
                  data.dec &&
                  data.dec.map((dec, i) => <p key={i}>{dec}</p>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicePopup;
