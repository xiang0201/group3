import React, { useState } from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
import CompanyList from "./CompanyList";
import Company from "../data/Company";
import '../../src/index.css'; // Import the CSS file

// Override CSS for the BeatLoader component
const override = css`
  display: block;
  margin: auto;
`;

// Function to generate a unique ID (using a timestamp in this example)
function generateUniqueId() {
  return new Date().getTime().toString();
}

// JobInfo Component
function JobInfo({ result, companyName, companyOverview, jobTitle, preparationTips, expectedSalary, loading, searchClicked }) {
  // State for the Company data and save status
  const [company, setCompany] = useState(Company);
  const [saved, setSaved] = useState(false);

  // Function to handle saving results
  const handleSaveResults = () => {
    // Generate a unique ID for the record
    if (!saved) {
      const uniqueId = generateUniqueId();

      // Construct an object with the data and the unique ID
      const savedData = {
        id: uniqueId,
        companyName,
        companyOverview,
        jobTitle,
        preparationTips,
        expectedSalary,
      };

      // Retrieve existing saved data or initialize an empty array
      const existingData = JSON.parse(localStorage.getItem('savedResults')) || [];

      // Append the new record to the existing data
      const updatedData = [...existingData, savedData];

      // Convert the updated data to a JSON string and save it in local storage
      localStorage.setItem('savedResults', JSON.stringify(updatedData));

      setSaved(true);

      // Optionally, you can display a success message or perform other actions
      console.log('Results saved successfully!');
    }
  };

  return (
    <div className="grid-container">
      {/* Company List Section */}
      <div className="bg-neutral-content col-span-1 rounded-lg border-black">
        <p className="text-neutral">34K jobs found</p>
        <div className="divide-y divide-slate-400">
          <CompanyList company={company} />
        </div>
      </div>

      {/* AI Assistant Section */}
      <div className="bg-neutral-content col-span-1 flex-container border-black">
        {/* Message for no search query */}
        {!searchClicked && (
          <>
            <div className='assistant-container'>
              AI Assistant Notepad
            </div>
            <div className='assistant-container-text'>
              Please provide a search query and click Search to generate suggestions from the selected AI model.
            </div>
          </>
        )}

        {/* Loader Section */}
        <div className="loader-container">
          <BeatLoader css={override} size={15} color={'#0965ed'} loading={loading} />
        </div>

        {/* Result Section */}
        {!loading && result !== '' && searchClicked && (
          <div className="result-container">
            <p className="result-message">AI enabled suggestions:</p>
            <p className="result-info"><strong>Company Name:</strong> {companyName}</p>
            <p className="result-info"><strong>Company Overview:</strong> {companyOverview}</p>
            <p className="result-info"><strong>Job Title:</strong> {jobTitle}</p>
            <p className="result-info"><strong>Preparation Tips:</strong> {preparationTips}</p>
            <p className="result-info"><strong>Expected Salary:</strong> {expectedSalary}</p>
            
            {/* Save Results Button */}
            <button className={`save-button ${saved ? 'saved' : ''}`} onClick={handleSaveResults} disabled={saved}>
              {saved ? 'Saved' : 'Save Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobInfo;
