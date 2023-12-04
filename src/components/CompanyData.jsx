import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import '../../src/index.css';

function CompanyData({ item }) {
  console.log(item);

  return (
    <div className="border-t border-slate-400 pt-1.5 mt-1.5">
      <div className="flex justify-between items-start pb-2">
        <div>
          <p className="company-name">{item.company_name}</p>
          <div className="flex justify-between"> 
          <p className="jobItems"> {item.title} - </p>
          <p> {item.time_posted} </p> 
          </div>
        </div>
        <label className="swap swap-flip text-xl ">
          <input type="checkbox" />
          <div className="swap-on inline pr-1 text-2xl">
            <IoBookmark />
          </div>
          <div className="swap-off inline pr-1 text-2xl">
            <IoBookmarkOutline />
          </div>
        </label>
      </div>
      <p> {item.location} - {item.employment_type}</p>

      </div>
  );
}

export default CompanyData;
