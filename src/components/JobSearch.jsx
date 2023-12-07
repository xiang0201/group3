import React from 'react';

// JobSearch Component
function JobSearch({ setCompany, setTitle, onSearch, searchClicked, processJobInfo }) {
  
  // Handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSearch(); // Call the onSearch function passed as a prop
    processJobInfo(); // Call the processJobInfo function passed as a prop
  };

  return (
    <div>
      {/* Form for job search */}
      <div>
        <form>
          {/* Grid layout for input fields and search button */}
          <div className="grid grid-cols-5 gap-2">
            {/* Input field for Company */}
            <div className="col-span-2">
              <input
                type="text"
                className='w-full pr-40 bg-neutral-content input input-lg text-black rounded-full w-full'
                placeholder='Company'
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Input field for Title */}
            <div className="col-span-2">
              <input
                type="text"
                className='w-full pr-40 bg-neutral-content input input-lg text-black rounded-full w-full'
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Search button */}
            <div className="">
              <button
                className='btn btn-ghost btn-lg bg-secondary text-base-100 w-full rounded-full w-full'
                onClick={handleFormSubmit}
              >
                Search
              </button>
            </div>
          </div>

          {/* Additional filters */}
          <div className="flex pt-2">
            {/* Date Posted filter */}
            <div className="flex-1 pr-4">
              <select className="select select-bordered select-sm w-full max-w-xs rounded-full w-full">
                <option disabled selected>Date Posted</option>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
                <option>Previous Years</option>
              </select>
            </div>

            {/* Job Type filter */}
            <div className="flex-1 pr-4">
              <select className="select select-bordered select-sm w-full max-w-xs rounded-full w-full">
                <option disabled selected>Job Type</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
                <option>On-Campus</option>
                <option>Job</option>
              </select>
            </div>

            {/* On-site/Remote filter */}
            <div className="flex-1 pr-4">
              <select className="select select-bordered select-sm w-full max-w-xs rounded-full w-full">
                <option disabled selected>On-site/Remote</option>
                <option>On-site</option>
                <option>Remote</option>
              </select>
            </div>

            {/* Location filter */}
            <div className="flex-1 pr-4">
              <select className="select select-bordered select-sm w-full max-w-xs rounded-full w-full">
                <option disabled selected>Location</option>
                <option>10 miles</option>
                <option>25 miles</option>
                <option>50 miles</option>
                <option>75 miles</option>
                <option>100 miles</option>
                <option>more than 100 miles</option>
              </select>
            </div>

            {/* Industry filter */}
            <div className="flex-1 pr-4">
              <select className="select select-bordered select-sm w-full max-w-xs rounded-full w-full">
                <option disabled selected>Industry</option>
                {/* Add industry options */}
              </select>
            </div>

            {/* AI Model filter */}
            <div className="flex-1">
              <select className="select select-bordered select-sm w-full max-w-xs rounded-full w-full">
                <option disabled selected>AI Model</option>
                <option>GPT 3.5</option>
                <option>GPT 4</option>
                <option>Claude</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobSearch;
