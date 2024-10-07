import React from "react";
import { useState } from "react";

function State() {
  const [value, setValue] = useState(0);

  const adding = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <h2> i love my country</h2>
      <p>show value: {value}</p>
      <button onClick={adding}>click me</button>
      <a href="/service">got to service</a>
    </div>
  );
}

export default State;
