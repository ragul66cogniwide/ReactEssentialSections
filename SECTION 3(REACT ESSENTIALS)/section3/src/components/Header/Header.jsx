import React from "react";

export const Header = () => {
  const reactdescriptions = ["Fundamentals", "Crucial", "Core"];

  function genrandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  return (
    <div>
      <h1>React Essentials</h1>
      <p>{reactdescriptions[genrandomInt(2)]} React Fundamentals</p>
    </div>
  );
};
