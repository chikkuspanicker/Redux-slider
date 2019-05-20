import React, { Component, Fragment } from "react";
import Slide from "../presentational/Slide";
import "../../../style/app.scss";
class SliderWrapper extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <i className="fas fa-angle-left" />
          <i className="fas fa-angle-right" />
        </div>
        <ul>
          <Slide />
        </ul>
      </Fragment>
    );
  }
}
export default SliderWrapper;
