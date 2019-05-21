import React, { Component } from "react";
import ListItem from './ListItem';
class Slide extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return <ul className="slider">
        <ListItem a={0} b={this.props.position}/>
        <ListItem a={1} b={this.props.position}/>
        <ListItem a={2} b={this.props.position}/>
    </ul>
  }
}

export default Slide;
