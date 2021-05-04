import React from "react";
import "./Results.css";

const Results = ({ results }) => {
  return (
    <div className="results">
      <table style={{ width: "100%" }}>
        <tr className="tableHeading">
          <th>NAME</th>
          <th>BREED</th>
          <th>COLOR</th>
          <th>SEX</th>
        </tr>
        {results.map((result) => (
          <tr key={result.record.id} className="tableContent">
            <td>{result.record.fields.name}</td>
            <td>{result.record.fields.breed}</td>
            <td>{result.record.fields.color}</td>
            <td>{result.record.fields.sex}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Results;
