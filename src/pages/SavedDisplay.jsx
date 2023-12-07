// Import React and the SavedResultsPage component
import React from 'react';
import SavedResultsPage from './SavedResultPage';

// Functional component SavedDisplay
function SavedDisplay() {
  // Retrieve saved results from local storage or initialize an empty array
  const savedResults = JSON.parse(localStorage.getItem('savedResults')) || [];

  // Render the SavedResultsPage component with the saved results as a prop
  return (
    <div>
      {/* Other components or routes can be added here */}
      <SavedResultsPage savedResults={savedResults} />
    </div>
  );
};

// Export the SavedDisplay component
export default SavedDisplay;
