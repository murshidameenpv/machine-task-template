/* eslint-disable react/prop-types */
import { useState } from "react";
import { SketchPicker } from "react-color";

function ColorPickerInput({ placeholder, color, setColor }) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div className="relative shadow-lg">
      <div
        className="flex items-center border rounded cursor-pointer"
        onClick={handleClick}
      >
        <input
          readOnly
          value={placeholder}
          className="bg-transparent placeholder-gray-500 focus:outline-none flex-grow"
        />
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="chevron-down w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10 15a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 15z"
            clipRule="evenodd"
          />
        </svg>
        <div
          className="w-5 h-5 mx-2 my-1 border rounded"
          style={{ backgroundColor: color }}
        />
      </div>
      {displayColorPicker ? (
        <div className="absolute z-10">
          <div className="fixed inset-0" onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPickerInput;
