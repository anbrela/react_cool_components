import React, { useState } from "react";
import PropTypes from "prop-types";

import searchImage from "../../stories/assets/search.svg";
import close from "../../stories/assets/close.svg";

export const Search = ({ onSearch, clearable, placeholder, size }) => {
  const [value, setValue] = useState("");

  const hasSize = (siz) => {
    if (siz === "small") {
      return "max-w-sm";
    }

    if (siz === "medium") {
      return "max-w-3xl";
    }

    return "w-full";
  };

  return (
    <div className={`relative flex ${hasSize(size)}`}>
      <input
        className={` w-full h-10 px-4 shadow rounded focus:outline-gray-300`}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="absolute right-0 h-full py-1 mr-2 flex space-x-2">
        <img
          className="cursor-pointer h-full "
          src={searchImage}
          alt="search icon"
          onClick={() => onSearch(value)}
        />
        {value ? (
          <img
            className="py-1 cursor-pointer"
            src={close}
            alt="close icon"
            onClick={() => setValue("")}
          />
        ) : null}
      </div>
    </div>
  );
};

Search.propTypes = {
  clearable: PropTypes.bool,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "full"]),
};

Search.defaultProps = {
  clearable: false,
  onSearch: null,
  size: "small",
  placeholder: "Find elements by name, label, surname, etc",
};
