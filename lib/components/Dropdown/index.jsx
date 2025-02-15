import { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon as XCircleIconSolid } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const Dropdown = ({
  multiple = false,
  withSearch = false,
  outlined = false,
  options = [],
  label = "Label",
  placeholder = "",
  onChange = () => {}
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedOptions.length > 0) {
      onChange({selected: selectedOptions})
    }
  }, [selectedOptions, onChange]);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      multiple
        ? prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
        : [option]
    );
    if (!multiple) setIsOpen(false);
  };

  const removeOption = (option) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightMatch = (option) => {
    if (!searchTerm) return option;
    return option.replace(
      new RegExp(`(${searchTerm})`, "gi"),
      `<span class="bg-teal-500">$1</span>`
    );
  };

  return (
    <div className="flex">
      <div className="pr-4 w-1/5">
        {label}
      </div>
      <div className="relative w-4/5" ref={dropdownRef}>
        {/* Selected Options */}
        <div
          className={`min-h-10 rounded-md border border-gray-300 p-2 flex flex-wrap items-center gap-2 cursor-pointer ${outlined && 'bg-gray-300'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOptions.length === 0 ? (
            <span className="text-gray-500">
              {placeholder}
            </span>
          ) : multiple ? (
            selectedOptions.map((option) => (
              <div
                key={option}
                className="bg-gray-200 text-xs rounded-full px-2 py-0.5 flex items-center"
              >
                {option}
                <button
                  className="ml-2 text-black hover:text-gray-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeOption(option);
                  }}
                >
                  <XCircleIcon className="size-3" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-gray-500 flex items-center w-full">
              <span>{selectedOptions[0]}</span>
              <button
                className="ml-2 text-black hover:text-gray-500 absolute right-2"
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(selectedOptions[0]);
                }}
              >
                <XCircleIcon className="size-5" />
              </button>
            </div>
          )}
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 bg-white border border-gray-300 mt-2 shadow-md z-10">
            {withSearch && (
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                  <MagnifyingGlassIcon className="size-5 text-gray-400" />
                </span>
                <input
                  type="text"
                  className="w-full py-2 px-10 border-b border-gray-200 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400"
                    onClick={() => setSearchTerm("")}
                  >
                    <XCircleIconSolid className="size-5" />
                  </span>
                )}
              </div>
            )}

            <div className="max-h-40 overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <p className="p-2 text-gray-500">No options found</p>
              ) : (
                filteredOptions.map((option) => (
                  <div
                    key={option}
                    className={`p-2 cursor-pointer hover:bg-blue-100 ${
                      selectedOptions.includes(option) ? "bg-blue-200" : ""
                    }`}
                    onClick={() => toggleOption(option)}
                    dangerouslySetInnerHTML={{ __html: highlightMatch(option) }}
                  />
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  multiple: PropTypes.bool,
  withSearch: PropTypes.bool,
  outlined: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Dropdown;
