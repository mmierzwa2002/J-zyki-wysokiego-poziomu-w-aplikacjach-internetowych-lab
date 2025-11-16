import React, { useState } from "react";

function StyleAndData() {
  const [state, setState] = useState({
    name: "User",
    count: 0,
    style: { color: "blue", fontSize: "18px" },
    mouseStatus: "Nie wykryto myszki",
  });

  const handleCLick = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };

  const loadDataFromJson = () => {
    const jsonData = { name: "Nowa Nazwa Użytkownika", role: "Admin" };
    setState((prev) => ({ ...prev, ...jsonData }));
  };

  const changeStyle = () => {
    const newColor = state.style.color === "blue" ? "red" : "blue";
    setState((prev) => ({
      ...prev,
      style: { ...prev.style, color: newColor },
    }));
  };
  const handleMouseOver = () => {
    setState((prev) => ({ ...prev, mouseStatus: "Wykryto myszkę" }));
  };

  const handleMouseOut = () => {
    setState((prev) => ({ ...prev, mouseStatus: "Nie wykryto myszki" }));
  };

  return (
    <div style={{ border: "1px solid white", padding: "10px" }}>
      <h4
        style={state.style}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Name: {state.name}, Ilość: {state.count}
      </h4>

      <p>{state.mouseStatus}</p>

      <button onClick={handleCLick}>Click (handleCLick)</button>
      <button onClick={loadDataFromJson}>
        Wczytaj Dane (loadDataFromJson)
      </button>
      <button onClick={changeStyle}>Zmień Styl (changeStyle)</button>
    </div>
  );
}
export default StyleAndData;
