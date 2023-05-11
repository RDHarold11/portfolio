import React from "react";

const Button = ({ category, handleFilter }) => {
  return (
    <button
      className="'text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-3 mr-3 mx-auto "
      onClick={() => handleFilter(category)}
    >
      {category}
    </button>
  );
};

export default Button;
