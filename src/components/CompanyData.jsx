import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";

function CompanyData({item}) {
  
  return (
    <div className="border-t border-slate-400 pt-1.5 mt-1.5">
        <div className="flex justify-between items-start pb-2">
        <p className="card-title">{item.Job}</p>
          <label className="swap swap-flip text-9xl">
    
          
            <input type="checkbox" />
            
            <div className="swap-on inline pr-1 text-2xl"><IoBookmark /></div>
            <div className="swap-off inline pr-1 text-2xl"><IoBookmarkOutline /></div>
          </label>
        </div>
        <p>{item.Company}</p>
    </div>
  )
}

export default CompanyData
