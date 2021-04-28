import React from "react";
import "./RadioGroup.css";

const RadioGroup = ({ items }) => {
  return (
    <div className="RadioGroup">
      {items.map((item) => {
        return (
          <div className="Radio" key={item.value}>
            <label className="flex-row">
              <input
                type="radio"
                //   onChange={this.props.onSelect}
                //   name={this.props.name}
                //   value={item.value || item.label}
                defaultChecked={item.checked}
              />
              <p>{item.label}</p>
            </label>
          </div>
        );
      })}
    </div>
  );
};
export default RadioGroup;
