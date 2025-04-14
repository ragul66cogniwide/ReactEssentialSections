import React from "react";

export const Components = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
};
