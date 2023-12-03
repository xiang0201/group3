import CompanyData from "./CompanyData"

function CompanyList({company}) {
  return (
    <div>
      {company.map((item)=>(
        <CompanyData key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default CompanyList
