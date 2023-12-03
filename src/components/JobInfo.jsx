import {useState} from 'react'
import CompanyList from "./CompanyList"
import Company from "../data/Company"

function JobInfo() {

    const [company,setCompany]=useState(Company)

  return (
    <div className="grid grid-cols-5 gap-2 pt-8 ">
        <div className="bg-neutral-content col-span-2 p-5 h-96 overflow-auto">
            <p className="text-neutral">34K jobs found</p>

                <div className="divide-y divide-slate-400">
                    <CompanyList company={company} />
                </div>
          

        </div>
        <div className="bg-neutral-content col-span-3 p-5 h-96 overflow-auto">
            job description
        </div>
        
    </div>
  )
}

export default JobInfo
