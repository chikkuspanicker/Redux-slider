import React, { Component, Fragment } from "react";
import Slide from "../presentational/Slide";
import "../../../style/app.scss";
class SliderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
    this.slide = this.slide.bind(this);
  }
  slide(e) {
    if (e.target.classList.contains("fa-angle-left")) {
      if (this.state.position !== 0) {
        this.setState (prevState => ({
            position : prevState.position - 1
        } 
    ));
      }
    } else {
      if (this.state.position !== document.getElementsByClassName('slider')[0].children.length - 1) {
        this.setState (prevState => ({
                position : prevState.position + 1
            } 
        ));
      }
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <i className="fas fa-angle-left" onClick={this.slide} />
          <i className="fas fa-angle-right" onClick={this.slide} />
        </div>
          <Slide position={this.state.position}/>
      </Fragment>
    );
  }
}
export default SliderWrapper;
