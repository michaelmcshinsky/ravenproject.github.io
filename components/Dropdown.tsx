import { useState, useRef, ReactNode } from "react";
import classNames from "classnames";
import { useClickAway } from "../utils/hooks";

export interface DropdownProps {
  title?: string;
  className?: string;
  children?: ReactNode;
}

export function Dropdown({
  title,
  className,
  children,
  ...props
}: DropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef();

  useClickAway(ref, () => {
    setIsDropdownOpen(false);
  });

  function _toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const btnClasses = classNames(
    "relative px-4 py-2 text-sm font-medium rounded-md",
    "text-gray-900 hover:bg-raven-yellow hover:text-white",
    "transform duration-300 ease",
    className
  );

  const svgClasses = classNames(
    "inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",
    isDropdownOpen ? "rotate-180" : "rotate-0"
  );

  return (
    <div ref={ref} className="relative" {...props}>
      <button onClick={_toggleDropdown} className={btnClasses}>
        <span>{title}</span>
        <svg fill="currentColor" viewBox="0 0 20 20" className={svgClasses}>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
          <div className="flex flex-col px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

Dropdown.displayName = "Dropdown";
Dropdown.defaultProps = {
  title: "Dropdown",
};

export default Dropdown;
