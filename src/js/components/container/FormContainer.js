import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "../presentational/Input";

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
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={this.state.title}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default FormContainer;
