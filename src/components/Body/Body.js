import React, { useState, useCallback } from "react";
import List from "../List";
import Results from "../Results/Results";
import SearchCriteria from "../SearchCriteria/SearchCriteria.js";
import { ApiClient, fromCatalog } from "@opendatasoft/api-client";

const Body = () => {
  const [results, setResults] = useState([]);

  const searchData = useCallback((e) => {
    const { value } = e.target;
    setResults(value.toLowerCase().trim());
  }, []);

  // Initialize the Client by indicating the domain to request.
  const client = new ApiClient({ domain: "documentation-resources" });

  // Create the query to run.
  const query = fromCatalog() // From the domain catalog
    .dataset("animal-control-inventory-lost-and-found") // ... we'll use the dataset "doc-geonames-cities-5000"
    .aggregates() // ... in order to make an aggregation.
    .where("sex:'M'") // // Filter records where country_code === "FR".
    .orderBy("name") // Sort by population in descending order.
    .limit(10) // But we only want the first 10 most populated cities.
    .toString(); // Then finally, we convert our query into a string.

  // Now, run the query.
  client
    .get(query)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

  return (
      <div>
          <SearchCriteria/>
      {/* <List /> */}
      {/* <Results results={results} /> */}
    </div>
  );
};
export default Body;
