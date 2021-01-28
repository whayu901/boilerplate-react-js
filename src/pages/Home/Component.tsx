import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
// import { ICONS } from "../../configs";
import { InfiniteScroll } from "../../components";
import { documentTitle } from "../../utils";
import { sampleAction } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Home");
  const history = useHistory();
  const dispatch = useDispatch();
  const homeState = useSelector((state: Reducers) => state.home);

  useEffect(() => {
    dispatch(sampleAction());
  }, [dispatch]);

  const _loadMore = useCallback(() => {
    dispatch(sampleAction());
  }, [dispatch]);

  return (
    <InfiniteScroll onEndReached={_loadMore}>
      <div className="page-home">
        {[...Array(homeState.count)].map((item, index) => (
          <div className="container" key={index}>
            <header className="header">
              <div className="container-text-box">
                <div
                  className="text-box text"
                  style={{ marginRight: 20 }}
                  onClick={() => history.push("/slice")}
                >
                  <p>Hello world</p>
                </div>
                <div className="text-box text">
                  <p>Hello world</p>
                </div>
              </div>
              <h3>{index}</h3>
              <button type="button" onClick={() => history.push("/detail")}>
                <h2 className="link">Go To Detail</h2>
              </button>
            </header>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Component;
