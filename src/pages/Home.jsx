import React, { useState } from 'react';
import OpenAI from "openai";
import JobInfo from "../components/JobInfo"
import JobSearch from "../components/JobSearch"

function Home() {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  const [result, setResult] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyOverview, setCompanyOverview] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [preparationTips, setPreparationTips] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
  });

  const handleSearch = () => {
    // Update state to indicate that search has been clicked
    setSearchClicked(true);
  };

  const fetchData = async () => {
    // Process job information based on the values of company and title

    try {
      setLoading(true); 
      const chatCompletion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are designed to output JSON for tips on Company Overview, Preparation, and expected salary number (provide a dummy if you don't know, but only when you don't have any idea). The keys of the response should strictly be: 'companyName', 'companyOverview' (Also include levels of the job like SDE 1, SDE 2 if you know), 'preparationTips', 'jobTitle' (this should be the full title, not the prompt. Don't mention the company name in the title), 'expectedSalary'."}, 
                   { "role": "user", content: `${title} at ${company}` }],
        response_format: { "type": "json_object" },
        temperature : 0,
        n : 1,
        model: 'gpt-3.5-turbo-1106',
      });

      const assistantMessage = chatCompletion.choices[0].message;
      const content = assistantMessage.content;

      try {
        const parsedContent = JSON.parse(content);
        const newCompanyName = parsedContent.companyName || 'N/A';
        const newCompanyOverview = parsedContent.companyOverview || 'N/A';
        const newJobTitle = parsedContent.jobTitle || 'N/A';
        const newPreparationTips = parsedContent.preparationTips || 'N/A';
        const newExpectedSalary = parsedContent.expectedSalary || 'Our System couldnt respond at this time. Please try later for this info.';

        setCompanyName(newCompanyName);
        setCompanyOverview(newCompanyOverview);
        setJobTitle(newJobTitle);
        setPreparationTips(newPreparationTips);
        setExpectedSalary(newExpectedSalary);
      } 
      catch (error) 
      {
        console.error('Error parsing JSON content:', error);
      }
      setResult(content);
    } 
    
    catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false); // Set loading to false after fetching data, regardless of success or failure
    }
  };

  return (
    <>
        <JobSearch 
        setCompany={setCompany}
        setTitle={setTitle}
        onSearch={handleSearch}
        searchClicked={searchClicked}
        processJobInfo={fetchData} />
        <JobInfo 
        result = {result}
        companyName={companyName} 
        companyOverview={companyOverview} 
        jobTitle ={jobTitle}
        preparationTips={preparationTips}
        expectedSalary={expectedSalary}
        loading={loading}
        searchClicked={searchClicked}  />
    </>
  )
}

export default Home