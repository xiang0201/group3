// SavedResultsPage.jsx
import React, { useState, useEffect } from 'react';
import SavedResultItem from './SavedResultItem';

const SavedResultPage = () => {
  const [savedResults, setSavedResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch initial data from local storage when the component mounts
    const storedResults = JSON.parse(localStorage.getItem('savedResults')) || [];
    setSavedResults(storedResults);
  }, []);

  const handleDelete = (id) => {
    // Retrieve existing results from local storage
    const storedResults = JSON.parse(localStorage.getItem('savedResults')) || [];

    // Filter out the result with the specified id
    const updatedResults = storedResults.filter((result) => result.id !== id);

    // Save the updated results back to local storage
    localStorage.setItem('savedResults', JSON.stringify(updatedResults));

    // Update React state to trigger a re-render
    setSavedResults(updatedResults);
  };

  const handleUpdate = (id, updatedData) => {
    // Retrieve existing results from local storage
    const storedResults = JSON.parse(localStorage.getItem('savedResults')) || [];

    // Find the result with the specified id
    const resultToUpdate = storedResults.find((result) => result.id === id);

    if (resultToUpdate) {
      // Update the properties of the result with the provided data
      Object.assign(resultToUpdate, updatedData);

      // Save the updated results back to local storage
      localStorage.setItem('savedResults', JSON.stringify(storedResults));

      // Update React state to trigger a re-render
      setSavedResults(storedResults);
    } else {
      console.error(`Result with id ${id} not found.`);
    }
  };
  const renderSearchBar = savedResults.length > 0 && (
    <div className="fixed-search-bar">
    <input
      className='input-search'
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
  );

  const filteredResults = savedResults.filter(
    (result) =>
      result.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.companyOverview.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.preparationTips.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.expectedSalary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {renderSearchBar}
      {filteredResults.length === 0 ? (
        <p>No results to show.</p>
      ) : (
        filteredResults.map((result) => (
          <SavedResultItem
            key={result.id}
            result={result}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      )}
    </div>
  );
};

export default SavedResultPage;
