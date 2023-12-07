// Page for Job search and GPT API assistant notebook
import React, { useState } from 'react';
import OpenAI from "openai";
import JobInfo from "../components/JobInfo";
import JobSearch from "../components/JobSearch";
import config from '../../..config'; 

function Home() {
  // State variables for form inputs and search status
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  // State variables for storing API response and loading status
  const [result, setResult] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyOverview, setCompanyOverview] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [preparationTips, setPreparationTips] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [loading, setLoading] = useState(false);

  // Initializing OpenAI with browser access
  const openai = new OpenAI({
    apiKey: config.apiKey,
    dangerouslyAllowBrowser: true
  });

  // Handler for search button click
  const handleSearch = () => {
    // Update state to indicate that search has been clicked
    setSearchClicked(true);
  };

  // Function to fetch data from OpenAI API
  const fetchData = async () => {
    // Process job information based on the values of company and title
    try {
      setLoading(true);
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {"role": "system", "content": "You are designed to output JSON for tips on Company Overview, Preparation, and expected salary number (provide a dummy if you don't know, but only when you don't have any idea). The keys of the response should strictly be: 'companyName', 'companyOverview', 'preparationTips', 'jobTitle', 'expectedSalary'."},
          { "role": "user", content: `${title} at ${company}` }
        ],
        response_format: { "type": "json_object" },
        temperature : 0,
        n : 1,
        model: 'gpt-3.5-turbo-1106',
      });

      const assistantMessage = chatCompletion.choices[0].message;
      const content = assistantMessage.content;

      try {
        // Parse JSON content and update state variables
        const parsedContent = JSON.parse(content);
        const newCompanyName = parsedContent.companyName || 'N/A';
        const newCompanyOverview = parsedContent.companyOverview || 'N/A';
        const newJobTitle = parsedContent.jobTitle || 'N/A';
        const newPreparationTips = parsedContent.preparationTips || 'N/A';
        const newExpectedSalary = parsedContent.expectedSalary || 'Our System couldn\'t respond at this time. Please try later for this info.';

        setCompanyName(newCompanyName);
        setCompanyOverview(newCompanyOverview);
        setJobTitle(newJobTitle);
        setPreparationTips(newPreparationTips);
        setExpectedSalary(newExpectedSalary);
      } catch (error) {
        console.error('Error parsing JSON content:', error);
      }

      // Update result state with the API response
      setResult(content);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching data, regardless of success or failure
    }
  };

  return (
    <>
      {/* JobSearch component */}
      <JobSearch
        setCompany={setCompany}
        setTitle={setTitle}
        onSearch={handleSearch}
        searchClicked={searchClicked}
        processJobInfo={fetchData}
      />

      {/* JobInfo component */}
      <JobInfo
        result={result}
        companyName={companyName}
        companyOverview={companyOverview}
        jobTitle={jobTitle}
        preparationTips={preparationTips}
        expectedSalary={expectedSalary}
        loading={loading}
        searchClicked={searchClicked}
      />
    </>
  );
}

export default Home;
