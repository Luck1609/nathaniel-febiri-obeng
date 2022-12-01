import React, { Component } from "react";
import styled from "styled-components";

export const Btn = styled.button`
  ${({ theme, onClick, children, disabled, ...props }) =>
    Object.entries(props).map(([key, value]) => {
      return `${key}: ${value};`
  })}
  color: ${(props) => props.color ?? "#fff"};
  height: ${(props) => props.height ?? "43px"};
  width: ${(props) => props.width ?? "auto"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export default class Button extends Component {
  render() {
    return <Btn {...this.props}>{this.props.children}</Btn>;
  }
}
