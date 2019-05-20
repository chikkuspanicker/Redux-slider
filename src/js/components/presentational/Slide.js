import React, { Component } from "react";
import ListItem from './ListItem';
class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : "list-item",
            active : "list-item active",
            position : 0
        };
    }
  render() {
    return <ul>
        <ListItem a={0} b={this.state.position}/>
        <ListItem a={1} b={this.state.position}/>
        <ListItem a={2} b={this.state.position}/>
    </ul>
  }
}

export default Slide;
