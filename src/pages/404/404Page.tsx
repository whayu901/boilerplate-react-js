import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import { ICONS } from "../../configs";
import { documentTitle } from "../../utils";

const NotfoundPage = () => {
  documentTitle("404 page");
  const history = useHistory();
  return (
    <div className="container-page">
      <div>
        <img src={ICONS.notFound} alt={"logo"} className="image-404" />
      </div>
      <div>
        <span>Oops !</span>
        <p>Page Not Found</p>
      </div>
      <div>
        <button
          className="btn btn-back-home"
          title="kembali ke home"
          onClick={() => history.push("/")}
        >
          Kembali ke Home
        </button>
      </div>
    </div>
  );
};

export default NotfoundPage;
