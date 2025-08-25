import { useState, useRef, useEffect } from 'react';

interface SimpleCustomSelectProps {
  options?: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Dropdown({ 
  options = ['All', 'Website Design', 'Mobile App Development'],
  defaultValue = 'All',
  onChange,
  className = ''
}: SimpleCustomSelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

//   const options = [
//     'All',
//     'Website Design',
//     'Mobile App Development'
//   ];

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
      <div className={`w-full lg:w-3/7 relative inline-block ${className}`} ref={dropdownRef}>
        {/* Custom Select Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full cursor-pointer border border-[#737373] bg-[#373636] text-white p-2 rounded-[8px] flex items-center justify-between hover:bg-[#404040] transition-colors focus:outline-none"
        >
          <span>{selectedOption}</span>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#737373] rounded-[8px] shadow-lg z-10">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="w-full text-left px-3 py-2 text-black bg-white hover:bg-[#737373] hover:text-white transition-colors duration-150 first:rounded-t-[8px] last:rounded-b-[8px] focus:outline-none focus:bg-[#737373] focus:text-white"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
   
  );
}