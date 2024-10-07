import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1>this is layout component</h1>
      {children}
    </div>
  );
}

export default layout;
