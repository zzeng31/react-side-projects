import React from "react";

export default class Input extends React.Component {
  render() {
    const {
      onChange = () => {},
      type = "text",
      placeholder = "",
      value = "",
      className = "",
    } = this.props;
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />
      </div>
    );
  }
}
