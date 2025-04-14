import React from "react";

export const TabButton = ({ children, onSelect }) => {
  return (
    <ul>
      <button onClick={onSelect}>{children}</button>
    </ul>
  );
};
