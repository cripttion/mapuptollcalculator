import React from "react";
import { useUserContext } from "../StateManagemet";
import { decode, encode } from "@googlemaps/polyline-codec";
export default function TollsData(props) {
  const { route, source,setSource,dest,setDest, } = useUserContext();
  return (
    <div>
      <h3 style={{marginTop:20}}>Your Toll data of route {source} to {dest}</h3>
      <table className="main-table">
        <thead>
          <tr>
            <th>Minimum Toll Cost</th>
            <th>Distance</th>
            <th>Route</th>
          </tr>
        </thead>
        <tbody>
          {route.map((item, index) => (
            <tr key={index}>
              <td>Rs {item.costs.minimumTollCost}</td>
              <td>{item.summary.distance.metric}</td>
              <td>Route {index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {route.map((item, index) => (
        <div key={index} className="sub-table-container">
          <center>
            {" "}
            <h4 style={{marginBottom:20}}>Route {index + 1} data</h4>
          </center>
          <table className="sub-table">
            <thead>
              <tr>
                <th>Toll Name</th>
                <th>On Road</th>
                <th>Cash Cost</th>
              </tr>
            </thead>
            <tbody>
              {item.tolls.map((toll, i) => (
                <tr key={i}>
                  <td>{toll.name}</td>
                  <td>{toll.road}</td>
                  <td>Rs {toll.cashCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
