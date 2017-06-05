"use strict";

const FormatMessage = require("react-globalize").FormatMessage;
const Globalize = require("globalize");
const React = require("react");

class Component extends React.PureComponent {
  render() {
    return(
      <FormatMessage path="foo" />
    )
  }
}

module.exports = Component;
