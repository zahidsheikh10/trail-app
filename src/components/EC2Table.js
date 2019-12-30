import React, { Component } from "react";
import $ from "jquery";
import "./../css/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class EC2Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instances: []
    };
  }

  componentDidMount = async () => {
    //let _this = this;

    const response = await fetch(
      "https://905dpx1sm3.execute-api.us-east-1.amazonaws.com/prod/ec2?account_number=057346956084&region=us-east-1",
      {
        headers: {
          "x-api-key": "EEpDixlDSO7J3eHjahLZZ1EQjwNzPa8f2ritb3fn"
        }
      }
    );

    const data = await response.json();
    this.setState({ instances: data });
  };
  renderTableData() {
    return this.state.instances.map((instance, index) => {
      const {
        PublicIpAddress,
        PrivateDnsName,
        PrivateIpAddress,
        Platform,
        VpcId,
        SubnetId,
        InstanceId,
        InstanceType,
        PublicDnsName,
        State
      } = instance; //destructuring

      //const Tags = instance.Tags[2];

      const Tags = instance.Tags[2]; //<"blocker">prints only the 3rd tag, need to print all the tags

      console.log(Tags);
      return (
        <tr key={index}>
          <td>{PublicIpAddress}</td>
          <td>{PrivateDnsName}</td>
          <td>{PrivateIpAddress}</td>
          <td>{Platform}</td>
          <td>{VpcId}</td>
          <td>{SubnetId}</td>
          <td>{InstanceId}</td>
          <td>{InstanceType}</td>
          <td>{PublicDnsName}</td>

          <td>{State["Code"]}</td>
          <td>{State["Name"]}</td>
          <td>{Tags["Key"]}</td>
          <td>{Tags["Value"]}</td>
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
                  <th scope="col"> PublicIpAddress</th>
                  <th scope="col">PrivateDnsName</th>
                  <th scope="col">PrivateIpAddress</th>
                  <th scope="col">Platform</th>
                  <th scope="col">VpcId</th>
                  <th scope="col">SubnetId</th>
                  <th scope="col">InstanceId</th>
                  <th scope="col">InstanceType</th>
                  <th scope="col">PublicDnsName</th>

                  <th scope="col">Code</th>
                  <th scope="col">Name</th>
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

export default EC2Table;
