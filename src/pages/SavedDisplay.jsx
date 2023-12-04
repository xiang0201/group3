// Your main app component or route
import React from 'react';
import SavedResultsPage from './SavedResultPage';

function SavedDisplay() {
  const savedResults = JSON.parse(localStorage.getItem('savedResults')) || [];
  return (
    <div>
      {/* Other components or routes */}
      <SavedResultsPage savedResults={savedResults} />
    </div>
  );
};

export default SavedDisplay
