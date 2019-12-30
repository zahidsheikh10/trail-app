import React, { Component } from "react";
import $ from "jquery";
import "./../css/index.css";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      accounts : []
   } 
 }
  
  componentDidMount = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://905dpx1sm3.execute-api.us-east-1.amazonaws.com/prod/account_info",
      {
        headers: {
          "x-api-key": "EEpDixlDSO7J3eHjahLZZ1EQjwNzPa8f2ritb3fn"
        }
      }
    );
    
    const data = await response.json();
    this.setState({ accounts:data});
    $(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');
    
  };
  renderTableData() {
    return this.state.accounts.map((account, index) => {
      const {
        environment,
        account_number,
        bu,
        account_alias,
        resource_name
      } = account; //destructuring
      const regions = account.regions;
      return (
        <tr key={index}>
          <td className="fixed-side">{account_number}</td>
          <td className="fixed-side">{account_alias}</td>
          <td className="fixed-side">{environment}</td>
          <td className="fixed-side">{bu}</td>
          <td>
            <Link to={{
              pathname:"/securityGroups",
              state: { account:account_number,region:'us-east-1'}}}>
              {regions["us-east-1"]}
            </Link>
            </td>
          <td>{regions["us-east-2"]}</td>
          <td>{regions["us-west-1"]}</td>
          <td>{regions["us-west-2"]}</td>
          <td>{regions["us-gov-west-1"]}</td>
          <td>{regions["us-gov-east-1"]}</td>
          <td>{regions["sa-east-1"]}</td>
          <td>{regions["me-south-1"]}</td>
          <td>{regions["eu-north-1"]}</td>
          <td>{regions["eu-west-3"]}</td>
          <td>{regions["eu-west-2"]}</td>
          <td>{regions["eu-west-1"]}</td>
          <td>{regions["eu-central-1"]}</td>
          <td>{regions["cn-northwest-1"]}</td>
          <td>{regions["cn-north-1"]}</td>
          <td>{regions["ca-central-1"]}</td>
          <td>{regions["ap-northeast-1"]}</td>
          <td>{regions["ap-southeast-2"]}</td>
          <td>{regions["ap-southeast-1"]}</td>
          <td>{regions["ap-northeast-2"]}</td>
          <td>{regions["ap-northeast-3"]}</td>
          <td>{regions["ap-south-1"]}</td>
          <td>{regions["ap-east-1"]}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="wrapper">
        <div id="table-scroll" className="table-scroll">
          <div className="table-fixed-right table-wrap">
            <table className="main-table">
              <thead>
                <tr>
                  <th className="fixed-side" scope="col">Account Number</th>
                  <th className="fixed-side" scope="col">Account Alias</th>
                  <th className="fixed-side" scope="col">Environment</th>
                  <th  className="fixed-side" scope="col">BU</th>
                  <th scope="col">us-east-1</th>
                  <th scope="col">us-east-2</th>
                  <th scope="col">us-west-1</th>
                  <th scope="col">us-west-2</th>
                  <th scope="col">us-gov-west-1</th>
                  <th scope="col">us-gov-east-1</th>
                  <th scope="col">sa-east-1</th>
                  <th scope="col">me-south-1</th>
                  <th scope="col">eu-north-1</th>
                  <th scope="col">eu-west-3</th>
                  <th scope="col">eu-west-2</th>
                  <th scope="col">eu-west-1</th>
                  <th scope="col">eu-central-1</th>
                  <th scope="col">cn-northwest-1</th>
                  <th scope="col">cn-north-1</th>
                  <th scope="col">ca-central-1</th>
                  <th scope="col">ap-northeast-1</th>
                  <th scope="col">ap-southeast-2</th>
                  <th scope="col">ap-southeast-1</th>
                  <th scope="col">ap-northeast-2</th>
                  <th scope="col">ap-northeast-3</th>
                  <th scope="col">ap-south-1</th>
                  <th scope="col">ap-east-1</th>
                </tr>
              </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    );
  }
}
export default Table;
