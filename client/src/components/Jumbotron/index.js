import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, paddingTop: 120, textAlign: "center" }}
      className="jumbotron bg-dark"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
