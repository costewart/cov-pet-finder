import React from "react";
import RadioGroup from "../RadioGroup";
import "./SearchCriteria.css";

const SearchCriteria = () => {
  return (
    <div className="searchBox">
      <form onSubmit={() => {}}>
        <label>
          <p>Name</p>
          <input name="name" />
        </label>

        <label>
          <p>Apples</p>
          <select name="apple">
            <option value="">--Please choose an option--</option>
            <option value="fuji">Fuji</option>
            <option value="jonathan">Jonathan</option>
            <option value="honey-crisp">Honey Crisp</option>
          </select>
        </label>
        <RadioGroup
          items={[
            { label: "Female", checked: true },
            { label: "Male" },
            { label: "Unknown"}
          ]}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SearchCriteria;
