import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ style, color, size, label, ...props }) => {
  const buttonStyle = (s) => {
    switch (s) {
      case "primary": {
        return `bg-gray-800  text-white`;
      }
      case "secondary": {
        return `bg-gray-400 text-white`;
      }

      case "outlined": {
        return "border-2 border-gray-800";
      }
    }
  };

  const buttonSize = (siz) => {
    switch (siz) {
      case "small": {
        return "text-xs px-2";
      }

      case "medium": {
        return "text-base";
      }

      case "large": {
        return "text-xl px-4";
      }
    }
  };

  return (
    <button
      type="button"
      className={`${buttonStyle(
        style
      )} p-2 px-4 rounded shadow hover:shadow-lg ${buttonSize(size)}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button style.
   */
  style: PropTypes.oneOf(["primary", "secondary", "outlined"]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  style: "primary",
  size: "medium",
  label: "button",
  onClick: undefined,
};
