import React, { Component } from "react";
import "./../css/index.css";
import { BrowserRouter as Router, Switch, Route, Link,withRouter } from "react-router-dom";
import Table from "./Table";

class SecurityGroupTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      securitygroups: []
    };
  }

  componentDidMount = async () => {
    const accountNumber = this.props.location.state.account;
    const Region = this.props.location.state.region;
    console.log(accountNumber)
    console.log(Region)
    const response = await fetch(
      `https://905dpx1sm3.execute-api.us-east-1.amazonaws.com/prod/security_groups?account_number=${accountNumber}&region=${Region}`,
      {
        headers: {
          "x-api-key": "EEpDixlDSO7J3eHjahLZZ1EQjwNzPa8f2ritb3fn"
        }
      }
    );

    const data = await response.json();
    this.setState({ securitygroups: data });
  };
  renderTableData() {
    return this.state.securitygroups.map((securitygroup, index) => {
      const { GroupName, GroupId, Description, VpcId } = securitygroup; //destructuring

      const Tags = securitygroup.Tags[2];
      //array.forEach(element => {

      //});

      //console.log(Tags);
      return (
        <tr key={index}>
          <td>{GroupName}</td>
          <td>{GroupId}</td>
          <td>{Description}</td>
          <td>{VpcId}</td>
          <td>{Tags["Key"]}</td>
          <td>{Tags["Value"]}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="security-table-wrapper wrapper">
        <div id="table-scroll" className="table-scroll">
          <div className="table-wrap">
            <table className="main-table">
              <thead>
                <tr>
                  <th scope="col"> GroupName</th>
                  <th scope="col">GroupId</th>
                  <th scope="col">Description</th>
                  <th scope="col">VpcId</th>
                  <th scope="col">Key</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SecurityGroupTable) 