
function JobSearch() {
  return (
    <div>
      <div>
        <form>
        <div className="grid grid-cols-5 gap-2 ">
            <div className="col-span-2">
                <input type="text" className='w-full pr-40 bg-neutral-content input input-lg text-black'
            placeholder='Company' />
            </div >  

            <div className="col-span-2">
                <input type="text" className='w-full pr-40 bg-neutral-content input input-lg text-black'
            placeholder='Location' />
            </div >   
            
            <div className="">
                <button 
                    className='btn btn-ghost btn-lg bg-secondary text-base-100 w-full'>
                    Search
                </button>
            </div>
        </div>
        
            <div className="flex pt-2">
                <div className="flex-1 pr-2">
                    <select className="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Date Posted</option>
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>This Year</option>
                        <option>Previous Years</option>
                    </select>
                </div>

                <div className="flex-1 pr-2">
                    <select className="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Job type</option>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Internship</option>
                        <option>On-Campus</option>
                        <option>Job</option>
                    </select>
                </div>

                <div className="flex-1 pr-2">
                    <select className="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>On-site/remote</option>
                        <option>On-site</option>
                        <option>Remote</option>
                    </select>
                </div>
                <div className="flex-1 pr-2">
                    <select className="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Location</option>
                        <option>10 miles</option>
                        <option>25 miles</option>
                        <option>50 miles</option>
                        <option>75 miles</option>
                        <option>100 miles</option>
                        <option>more than 100 miles</option>
                        
                    </select>
                </div>
                <div className="flex-1 pr-2">

                    <select className="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Industry</option>
                        <option>Financial Services</option>
                        <option>Accounting</option>
                        <option>manufacturing</option>
                        <option>Real Estate/Construction</option>
                        <option>Marketing/Advertising/PR</option>
                        <option>Government/Education</option>
                        <option>consulting</option>
                        <option>Pharmacy/Bio-Tech</option>
                        <option>Technology/Science</option>
                        <option>Healthcare</option>
                        <option>Legal</option>
                        <option>Media/Entertainment</option>
                        <option>Non-Profit</option>
                        <option>Retail</option>
                        <option>Others</option>
                    </select>
                </div>
                <div className="flex-1">
                    <select className="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Experience Level</option>
                        <option>Entry-Level</option>
                        <option>Mid-Level</option>
                        <option>Managerial-Level</option>
                    </select>
                </div>
                </div>

        </form>
      </div>

      

      
    </div>
  )
}

export default JobSearch