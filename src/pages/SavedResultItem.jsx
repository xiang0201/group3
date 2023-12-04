import React, { useState, useEffect } from 'react';
import '../../src/index.css';

const SavedResultItem = ({ result, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    companyOverview: result.companyOverview, // Set initial value from local storage
    preparationTips: result.preparationTips, // Set initial value from local storage
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateClick = () => {
    setIsEditing(false);
    onUpdate(result.id, updatedData);
  };

  useEffect(() => {
    // Set initial values from local storage when the component mounts
    setUpdatedData({
      companyOverview: result.companyOverview,
      preparationTips: result.preparationTips,
    });
  }, [result.companyOverview, result.preparationTips]);



  return (
    <div className='displayItem'>
      {/* Display result details */}
      <p className="result-info"><strong>Company Name:</strong> {result.companyName}</p>
      <p className="result-info"><strong>Company Overview:</strong> {result.companyOverview}</p>
      <p className="result-info"><strong>Job Title:</strong> {result.jobTitle}</p>
      <p className="result-info"><strong>Preparation Tips:</strong> {result.preparationTips}</p>
      <p className="result-info"><strong>Expected Salary:</strong> {result.expectedSalary}</p>

      {/* Add more fields as needed */}

      {/* Option to delete and update */}
      <button className='edit-button' onClick={() => onDelete(result.id)}>Delete</button>

      {/* Conditionally render input fields, save button, and update button when editing */}
      {isEditing ? (
        <>
          {/* Add input fields for each property you want to update */}
          <input
            type="text"
            name="companyOverview"
            placeholder="Edit Company Overview"
            value={updatedData.companyOverview}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="preparationTips"
            placeholder="Personal Tips"
            value={updatedData.preparationTips}
            onChange={handleInputChange}
          />
          
          {/* Save button */}
          <button className='edit-button' onClick={handleUpdateClick}>Save</button>
        </>
      ) : (
        <button className='edit-button' onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default SavedResultItem;
