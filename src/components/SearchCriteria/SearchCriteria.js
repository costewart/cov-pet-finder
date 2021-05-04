import React from "react";
import RadioGroup from "../RadioGroup";
import "./SearchCriteria.css";

const SearchCriteria = ({ onSubmit }) => {
  return (
    <div className="searchBox">
      <form onSubmit={() => {}}>
        <label>
          <h3>Name</h3>
          <input type="text" name="name" />
        </label>

        <label>
          <h3>Breed</h3>
          <select name="breed">
            <option value="">-- Please select a breed --</option>
            <option value="unknown">Unknown</option>
            <option value="pitbull">PitBull</option>
            <option value="pug">Pug</option>
            <option value="husky">Husky</option>
          </select>
        </label>
        <RadioGroup
          items={[
            { label: "Female", checked: true },
            { label: "Male" },
            { label: "Unknown" },
          ]}
        />

        <RadioGroup
          items={[
            { label: "Cat", checked: true },
            { label: "Dog" },
            { label: "Other" },
          ]}
        />
        <button type="submit" onClick={(e) => onSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default SearchCriteria;
