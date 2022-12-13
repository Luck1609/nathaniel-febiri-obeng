import React, { Component } from "react";

class ClickAwayListener extends Component {
  // Stores a reference to the containing node
  // This is used when checking where a click is coming from
  node = undefined;

  handleClickAway = e => {
    // Check if the click came from inside the click away container
    // If it did, do nothing
    if (this.node.contains(e.target)) return;
    // Check if the click came from inside an additional node reference
    // If it did, do nothing
    if (this.props.nodeRef && this.props.nodeRef.contains(e.target)) return;

    // Otherwise, the click happened outside of the click away container
    // So lets execute the click away function
    this.props.close();
  };

  componentDidMount() {
    // When the component mounts, register a click event that processes the click away
    window.addEventListener("click", this.handleClickAway, true);
  }

  componentWillUnmount() {
    // When the component unmounts, remove the click event that processes the click away
    window.removeEventListener("click", this.handleClickAway, true);
  }

  render() {
   
    const Children = this.props.content

    return <Children ref={el => this.node = el} handleClose={this.props.close} />
  }
}

export default ClickAwayListener;