import React from "react";
import burger from "../Burger";
import "./buildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bakon", type: "bacon" },
  { label: "Chese", type: "chese" },
  { label: "Meat", type: "meat" },
];

const burgerControls = (props) => {
  return <div className="BuildControls">{controls.map(ele => 
    <BuildControl key={ele.label} label={ele.label}  added={() => props.ingredientAdded(ele.type)}/>)}</div>;
};

export default burgerControls;
