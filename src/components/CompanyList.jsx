// Import the CompanyData component
import CompanyData from "./CompanyData";

// Functional component CompanyList that receives 'company' as a prop
function CompanyList({ company }) {
  // Render a list of CompanyData components for each item in the 'company' array
  return (
    <div>
      {company.map((item) => (
        // Render a CompanyData component for each item with a unique key and pass the item as a prop
        <CompanyData key={item.id} item={item} />
      ))}
    </div>
  );
}

// Export the CompanyList component
export default CompanyList;
