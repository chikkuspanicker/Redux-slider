import React, { Component } from "react";
import ReactDOM from "react-dom";

import SliderWrapper from "./SliderWrapper";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    debugger;
  }

  render() {
    return (
      <form id="article-form">
        <SliderWrapper />
      </form>
    );
  }
}

export default FormContainer;
