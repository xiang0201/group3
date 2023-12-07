// Import React and required icons
import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";

// Import the CSS file for styling
import '../../src/index.css';

// CompanyData functional component that receives 'item' as a prop
function CompanyData({ item }) {
  // Log the 'item' for debugging purposes
  console.log(item);

  return (
    // Container with a top border and padding
    <div className="border-t border-slate-400 pt-1.5 mt-1.5">
      {/* Flex container with space between items */}
      <div className="flex justify-between items-start pb-2">
        {/* Company name and job details */}
        <div>
          <p className="company-name">{item.company_name}</p>
          {/* Flex container with space between job title and time posted */}
          <div className="flex justify-between"> 
            <p className="jobItems"> {item.title} - </p>
            <p> {item.time_posted} </p> 
          </div>
        </div>
        {/* Toggle bookmark button with checkbox */}
        <label className="swap swap-flip text-xl ">
          <input type="checkbox" />
          {/* Bookmark icon when checked */}
          <div className="swap-on inline pr-1 text-2xl">
            <IoBookmark />
          </div>
          {/* Outline bookmark icon when unchecked */}
          <div className="swap-off inline pr-1 text-2xl">
            <IoBookmarkOutline />
          </div>
        </label>
      </div>
      {/* Location and employment type details */}
      <p> {item.location} - {item.employment_type}</p>
    </div>
  );
}

// Export the CompanyData component
export default CompanyData;
