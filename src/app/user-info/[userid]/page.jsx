import React from "react";

function page({ params }) {
  return (
    <div>
      <h1>this is dynamic page here</h1>
      <span>{params.userid}</span>
    </div>
  );
}

export default page;
