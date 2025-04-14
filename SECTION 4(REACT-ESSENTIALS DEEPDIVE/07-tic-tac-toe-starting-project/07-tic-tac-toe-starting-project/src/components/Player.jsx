import React, { useState } from "react";

export default function Player({
  initialname,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [PlayerName, setPlayerName] = useState(initialname);

  function handleclick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, PlayerName);
    }
  }

  function handleplayername(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            Value={PlayerName}
            onChange={handleplayername}
          />
        ) : (
          <span className="player-name">{PlayerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleclick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
