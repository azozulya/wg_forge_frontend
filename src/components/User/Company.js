import React from "react";
import Companies from '../../../data/companies';

class Company extends React.Component {
  constructor(props){
    super(props);
    this.id = props.id;
  }
  render() {
    const company = Companies.find( item => {
      if(item.id === this.id)
        return item;
    });

    if(company){
      return(
        <>
          <p>Company: <a href={company.url} target="_blank">{company.title}</a></p>
          <p>Industry: {company.industry} / {company.sector}</p>
        </>
      )
    }
    return ( <> </>);
  }
}

export default Company;
